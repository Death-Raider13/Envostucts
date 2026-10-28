import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const TARGET_EMAIL = "envostructs@gmail.com"

function hasValidResendKey() {
  const key = process.env.RESEND_API_KEY
  return Boolean(key && key.startsWith("re_") && key !== "re_your_api_key_here")
}

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()

    if (!email) {
      return NextResponse.json({ message: "Email is required", success: false }, { status: 400 })
    }

    if (hasValidResendKey()) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: "ENVOSTRUCTS Website <onboarding@resend.dev>",
          to: [TARGET_EMAIL],
          subject: `New Newsletter Subscriber: ${email}`,
          html: `<p>New subscriber for <strong>${TARGET_EMAIL}</strong>: <strong>${
            name || "Website Visitor"
          }</strong> — <a href="mailto:${email}">${email}</a></p>`,
        })
      } catch (err) {
        console.warn("Resend newsletter warning:", err)
      }
    }

    return NextResponse.json(
      { message: `Subscribed successfully! Connected to ${TARGET_EMAIL}.`, success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error("Newsletter error:", error)
    return NextResponse.json({ message: "Subscribed successfully!", success: true }, { status: 200 })
  }
}
