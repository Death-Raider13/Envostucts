export const ENVOSTRUCTS_EMAIL = "envostructs@gmail.com"
const WEB3FORMS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "595f761c-48d5-4b22-be23-d68a3b354369"

export interface InquiryPayload {
  fullName: string
  email: string
  phone?: string
  company?: string
  country?: string
  clientType?: string
  service: string
  projectDetails: string
}

export function formatInquiryBody(data: InquiryPayload): string {
  return [
    `TECHNICAL PROJECT INQUIRY — ENVOSTRUCTS NIGERIA LIMITED (RC: 694337)`,
    `==================================================================`,
    `Full Name: ${data.fullName}`,
    `Company / Organization: ${data.company || "N/A"}`,
    `Client Category: ${data.clientType || "Direct Corporate / Private Developer"}`,
    `Location / Country: ${data.country || "Nigeria"}`,
    `Email Address: ${data.email}`,
    `Phone / WhatsApp: ${data.phone || "N/A"}`,
    `Service Required: ${data.service}`,
    ``,
    `Project Scope & Technical Details:`,
    `----------------------------------`,
    data.projectDetails,
  ].join("\n")
}

export function buildMailtoUrl(data: InquiryPayload): string {
  const subject = encodeURIComponent(
    `Engineering Inquiry (${data.service}) — ${data.fullName} | Envostructs Nigeria Ltd`
  )
  const body = encodeURIComponent(formatInquiryBody(data))
  return `mailto:${ENVOSTRUCTS_EMAIL}?subject=${subject}&body=${body}`
}

export async function submitInquiryToEnvostructs(data: InquiryPayload): Promise<{
  deliveredOnline: boolean
  recipient: string
  mailtoUrl: string
}> {
  const subject = `New Engineering Inquiry: ${data.service} — ${data.fullName} (${
    data.country || "Nigeria"
  })`
  const mailtoUrl = buildMailtoUrl(data)

  const formSubmitPromise = fetch(`https://formsubmit.co/ajax/${ENVOSTRUCTS_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _replyto: data.email,
      _template: "table",
      _captcha: "false",
      name: data.fullName,
      company: data.company || "N/A",
      client_category: data.clientType || "Direct Corporate / Private Developer",
      location: data.country || "Nigeria",
      email: data.email,
      phone: data.phone || "N/A",
      service_required: data.service,
      message: data.projectDetails,
    }),
  }).then((r) => r.json())

  const web3FormsPromise = fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_PUBLIC_KEY,
      subject,
      from_name: data.fullName,
      name: data.fullName,
      email: data.email,
      phone: data.phone || "N/A",
      company: data.company || "N/A",
      client_category: data.clientType || "Direct Corporate / Private Developer",
      location: data.country || "Nigeria",
      service_required: data.service,
      message: data.projectDetails,
      to_email: ENVOSTRUCTS_EMAIL,
    }),
  }).then((r) => r.json())

  const internalApiPromise = fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.fullName,
      email: data.email,
      phone: data.phone || "",
      company: data.company || "",
      country: data.country || "",
      clientType: data.clientType || "",
      service: data.service,
      subject,
      message: data.projectDetails,
    }),
  }).then((r) => r.json())

  const [fsRes, w3Res, apiRes] = await Promise.allSettled([
    formSubmitPromise,
    web3FormsPromise,
    internalApiPromise,
  ])

  const fsOk =
    fsRes.status === "fulfilled" &&
    (fsRes.value?.success === "true" || fsRes.value?.success === true)

  const w3Ok = w3Res.status === "fulfilled" && w3Res.value?.success === true

  const apiOk =
    apiRes.status === "fulfilled" && apiRes.value?.deliveredServerSide === true

  const deliveredOnline = Boolean(fsOk || w3Ok || apiOk)

  return {
    deliveredOnline,
    recipient: ENVOSTRUCTS_EMAIL,
    mailtoUrl,
  }
}
