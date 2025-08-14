"use server"
import { z } from "zod"

// Define a schema for your form data using Zod for validation
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

  // Validate the form data
  const validatedFields = contactFormSchema.safeParse(data)
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Check for Web3Forms access key
  const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!web3formsAccessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not set in environment variables.")
    return {
      success: false,
      message: "Contact form is not configured. Please set WEB3FORMS_ACCESS_KEY.",
      errors: { form: ["Configuration error. Please contact support."] },
    }
  }

  try {
    // WEB3FORMS INTEGRATION
    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3formsAccessKey, // Use the environment variable directly

        // Map your form fields to Web3Forms expected fields
        name: validatedFields.data.fullName,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
        message: validatedFields.data.projectDetails,

        // Custom fields for better email organization
        subject: `New Consultation Request - ${validatedFields.data.service} | Envostructs Nigeria`,
        service_type: validatedFields.data.service,
        from_name: validatedFields.data.fullName,

        // Additional metadata for tracking
        submission_date: new Date().toISOString(),
        source: "Envostructs Website Contact Form",
        company: "Envostructs Nigeria Limited",
      }),
    })

    const result = await web3formsResponse.json()

    if (result.success) {
      console.log("Form submitted successfully to Web3Forms:", result)
      return {
        success: true,
        message: "Thank you for your inquiry! We will contact you within 24 hours.",
      }
    } else {
      console.error("Web3Forms submission failed:", result)
      // Pass the specific error message from Web3Forms if available
      const errorMessage = result.message || "Submission failed. Please try again."
      return {
        success: false,
        message: errorMessage,
        errors: { form: [errorMessage] },
      }
    }
  } catch (error) {
    console.error("Error submitting to Web3Forms:", error)
    return {
      success: false,
      message: "An error occurred while sending your message. Please try again later.",
      errors: { form: ["Network error. Please check your connection and try again."] },
    }
  }
}
