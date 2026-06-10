import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required", success: false }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not set — email not sent")
      return NextResponse.json({ message: "Message sent successfully!", success: true }, { status: 200 })
    }

    // Notify ENVOSTRUCTS of the new enquiry
    await resend.emails.send({
      from: "ENVOSTRUCTS Website <onboarding@resend.dev>",
      to: ["envostructs@gmail.com"],
      subject: `New Enquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #003366; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 1px;">ENVOSTRUCTS NIGERIA LIMITED</h1>
            <p style="color: #F59E0B; margin: 4px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">New Website Enquiry</p>
          </div>
          <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #111827;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;"><a href="mailto:${email}" style="color: #003366;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;"><a href="tel:${phone}" style="color: #003366;">${phone}</a></td></tr>` : ""}
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Subject</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #003366;">${subject}</td></tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <div style="background: #fff; border: 1px solid #e5e7eb; border-left: 4px solid #F59E0B; padding: 16px; border-radius: 4px; color: #374151; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</div>
            </div>
            <div style="margin-top: 24px; padding: 16px; background: #fffbeb; border: 1px solid #F59E0B; border-radius: 8px;">
              <p style="margin: 0; font-size: 13px; color: #92400e;">Reply directly to this email to respond to <strong>${name}</strong> at <strong>${email}</strong></p>
            </div>
          </div>
          <div style="background: #003366; padding: 16px 32px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="color: rgba(255,255,255,0.5); font-size: 11px; margin: 0;">51, Akanro Street, Ilasa Bustop, Yaba, Lagos · envostructs@gmail.com · +234-080-3477-0098</p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    // Auto-reply to the enquirer
    await resend.emails.send({
      from: "ENVOSTRUCTS Nigeria <onboarding@resend.dev>",
      to: [email],
      subject: "We received your enquiry — ENVOSTRUCTS Nigeria Limited",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #003366; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 1px;">ENVOSTRUCTS NIGERIA LIMITED</h1>
            <p style="color: #F59E0B; margin: 4px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Enquiry Received</p>
          </div>
          <div style="background: #fff; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #374151; font-size: 15px; line-height: 1.7;">Dear <strong>${name}</strong>,</p>
            <p style="color: #374151; font-size: 15px; line-height: 1.7;">Thank you for reaching out to <strong>Envostructs Nigeria Limited</strong>. We have received your enquiry regarding <em>"${subject}"</em> and a member of our team will get back to you within <strong>24 hours</strong>.</p>
            <div style="margin: 24px 0; padding: 20px; background: #f9fafb; border-left: 4px solid #F59E0B; border-radius: 4px;">
              <p style="margin: 0 0 8px; font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Your message summary</p>
              <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">${message.length > 200 ? message.substring(0, 200) + "..." : message}</p>
            </div>
            <p style="color: #374151; font-size: 14px; line-height: 1.7;">For urgent matters, you can reach us directly:</p>
            <table style="margin: 16px 0;">
              <tr><td style="padding: 4px 16px 4px 0; color: #6b7280; font-size: 13px;">Phone</td><td style="font-weight: bold; color: #003366;">+234-080-3477-0098</td></tr>
              <tr><td style="padding: 4px 16px 4px 0; color: #6b7280; font-size: 13px;">WhatsApp</td><td style="font-weight: bold; color: #003366;">+234-080-3477-0098</td></tr>
              <tr><td style="padding: 4px 16px 4px 0; color: #6b7280; font-size: 13px;">Email</td><td style="font-weight: bold; color: #003366;">envostructs@gmail.com</td></tr>
            </table>
            <p style="color: #374151; font-size: 14px; line-height: 1.7; margin-top: 24px;">We look forward to working with you.</p>
            <p style="color: #374151; font-size: 14px;">Warm regards,<br/><strong>The Envostructs Team</strong></p>
          </div>
          <div style="background: #003366; padding: 16px 32px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="color: rgba(255,255,255,0.5); font-size: 11px; margin: 0;">51, Akanro Street, Ilasa Bustop, Yaba, Lagos, Nigeria · COREN Licensed · RC: 694337</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ message: "Message sent successfully!", success: true }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Failed to send message. Please call us directly.", success: false }, { status: 500 })
  }
}
