import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { subject, name } = await req.json();

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["brunogalberti@gmail.com"],
    subject: subject || "Hello world",
    react: EmailTemplate({ name }),
  });

  if (error) {
    return Response.json({ error }, { status: 400 });
  }

  return Response.json({ success: true, data });
}
