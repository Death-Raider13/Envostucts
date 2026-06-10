import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()

    if (!email) {
      return NextResponse.json({ message: "Email is required", success: false }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ message: "Subscribed successfully!", success: true }, { status: 200 })
    }

    // Notify ENVOSTRUCTS of new subscriber
    await resend.emails.send({
      from: "ENVOSTRUCTS Website <onboarding@resend.dev>",
      to: ["envostructs@gmail.com"],
      subject: `New Newsletter Subscriber: ${email}`,
      html: `<p>New subscriber: <strong>${name || "Anonymous"}</strong> — <a href="mailto:${email}">${email}</a></p>`,
    })

    // Welcome email to subscriber
    await resend.emails.send({
      from: "ENVOSTRUCTS Nigeria <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the Envostructs Newsletter",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
          <div style="background: #003366; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 18px; font-weight: 900;">ENVOSTRUCTS NIGERIA LIMITED</h1>
            <p style="color: #F59E0B; margin: 4px 0 0; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Newsletter</p>
          </div>
          <div style="background: #fff; padding: 28px 32px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #374151; font-size: 15px; line-height: 1.7;">Thank you for subscribing${name ? `, ${name}` : ""}!</p>
            <p style="color: #374151; font-size: 14px; line-height: 1.7;">You'll now receive updates on our latest projects, engineering insights, and company news from Envostructs Nigeria Limited.</p>
            <p style="color: #374151; font-size: 14px; margin-top: 20px;">The Envostructs Team<br/><span style="color: #6b7280;">51, Akanro Street, Ilasa Bustop, Yaba, Lagos</span></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ message: "Subscribed successfully!", success: true }, { status: 200 })
  } catch (error) {
    console.error("Newsletter error:", error)
    return NextResponse.json({ message: "Subscription failed. Please try again.", success: false }, { status: 500 })
  }
}
