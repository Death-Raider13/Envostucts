import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const TARGET_EMAIL = "envostructs@gmail.com"

function hasValidResendKey() {
  const key = process.env.RESEND_API_KEY
  return Boolean(key && key.startsWith("re_") && key !== "re_your_api_key_here")
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      name,
      email,
      phone,
      company,
      country,
      clientType,
      service,
      subject: rawSubject,
      message,
    } = body

    const finalSubject =
      rawSubject || `New Engineering Inquiry (${service || "General"}) — ${name}`

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and project details are required", success: false },
        { status: 400 }
      )
    }

    let deliveredServerSide = false

    // 1. Try FormSubmit to envostructs@gmail.com
    try {
      const fsResponse = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://envostructs.com",
          Referer: "https://envostructs.com/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        body: JSON.stringify({
          _subject: finalSubject,
          _replyto: email,
          _template: "table",
          _captcha: "false",
          name,
          email,
          phone: phone || "N/A",
          company: company || "N/A",
          client_category: clientType || "N/A",
          location: country || "Nigeria",
          service_required: service || finalSubject,
          message,
        }),
      })

      if (fsResponse.ok) {
        const fsResult = await fsResponse.json().catch(() => null)
        if (fsResult && (fsResult.success === "true" || fsResult.success === true)) {
          deliveredServerSide = true
        }
      }
    } catch (err) {
      console.warn("FormSubmit server warning:", err)
    }

    // 2. Try Resend if a real API key is configured
    if (hasValidResendKey()) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: "ENVOSTRUCTS Website <onboarding@resend.dev>",
          to: [TARGET_EMAIL],
          subject: `New Enquiry: ${finalSubject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #003366; padding: 24px 32px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #fff; margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 1px;">ENVOSTRUCTS NIGERIA LIMITED</h1>
                <p style="color: #F59E0B; margin: 4px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">New Website Enquiry (${TARGET_EMAIL})</p>
              </div>
              <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; width: 140px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #111827;">${name}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;"><a href="mailto:${email}" style="color: #003366;">${email}</a></td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${phone || "N/A"}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${company || "N/A"}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Client Category</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${clientType || "N/A"}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Location</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${country || "Nigeria"}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Subject / Service</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #003366;">${finalSubject}</td></tr>
                </table>
                <div style="margin-top: 24px;">
                  <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Project Scope & Message</p>
                  <div style="background: #fff; border: 1px solid #e5e7eb; border-left: 4px solid #F59E0B; padding: 16px; border-radius: 4px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                </div>
              </div>
            </div>
          `,
          replyTo: email,
        })
        deliveredServerSide = true
      } catch (err) {
        console.warn("Resend delivery warning:", err)
      }
    }

    return NextResponse.json(
      {
        message: `Your inquiry has been routed to ${TARGET_EMAIL}!`,
        success: true,
        deliveredServerSide,
        recipient: TARGET_EMAIL,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact inquiry:", error)
    return NextResponse.json(
      { message: "Processed with client email fallback.", success: true, deliveredServerSide: false },
      { status: 200 }
    )
  }
}
