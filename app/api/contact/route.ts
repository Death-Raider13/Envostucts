import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required", success: false }, { status: 400 })
    }

    // Simulate sending an email (replace with actual email sending logic)
    console.log("Sending email:", { name, email, phone, subject, message })

    return NextResponse.json({ message: "Message sent successfully!", success: true }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ message: "Failed to send message", success: false }, { status: 500 })
  }
}
