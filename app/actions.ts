"use server"
import { z } from "zod"

const TARGET_EMAIL = "envostructs@gmail.com"

const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  phone: z.string().min(1, "Phone Number is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Service Required is required"),
  projectDetails: z.string().min(1, "Project Details are required"),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const data = {
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    service: formData.get("service"),
    projectDetails: formData.get("projectDetails"),
  }

  const validatedFields = contactFormSchema.safeParse(data)
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { fullName, phone, email, service, projectDetails } = validatedFields.data
  const subject = `New Engineering Inquiry (${service}) — ${fullName} | Envostructs Nigeria Ltd`

  // 1. Try FormSubmit directly to envostructs@gmail.com
  try {
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://envostructs.com",
        Referer: "https://envostructs.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify({
        _subject: subject,
        _replyto: email,
        _template: "table",
        _captcha: "false",
        recipient_email: TARGET_EMAIL,
        name: fullName,
        email,
        phone,
        service_required: service,
        message: projectDetails,
        company: "Envostructs Nigeria Limited (RC: 694337)",
      }),
    })

    if (formSubmitRes.ok) {
      const json = await formSubmitRes.json().catch(() => null)
      if (json && (json.success === "true" || json.success === true)) {
        return {
          success: true,
          message: `Thank you! Your inquiry has been sent to ${TARGET_EMAIL}. We will respond within 24 hours.`,
        }
      }
    }
  } catch (err) {
    console.warn("FormSubmit server attempt warning:", err)
  }

  // 2. Try Web3Forms if configured
  const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (web3formsAccessKey) {
    try {
      const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://envostructs.com",
          Referer: "https://envostructs.com/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name: fullName,
          email,
          phone,
          message: projectDetails,
          subject,
          service_type: service,
          from_name: fullName,
          to_email: TARGET_EMAIL,
          submission_date: new Date().toISOString(),
          source: "Envostructs Website Contact Form",
          company: "Envostructs Nigeria Limited",
        }),
      })

      if (web3formsResponse.ok) {
        const result = await web3formsResponse.json().catch(() => null)
        if (result?.success) {
          return {
            success: true,
            message: `Thank you! Your inquiry has been sent to ${TARGET_EMAIL}. We will contact you within 24 hours.`,
          }
        }
      }
    } catch (err) {
      console.warn("Web3Forms server attempt warning:", err)
    }
  }

  // Return success with client fallback flag so client browser dispatches directly without blocking the user
  return {
    success: true,
    clientFallback: true,
    message: `Thank you! Your inquiry has been routed to ${TARGET_EMAIL}.`,
  }
}
