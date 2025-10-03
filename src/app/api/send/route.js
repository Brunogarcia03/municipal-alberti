import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY_MUNICIPALIDAD);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, name, subject, content } = body;

    const { data, error } = await resend.emails.send({
      from: "Municipalidad de Alberti <onboarding@resend.dev>",
      to: ["mailmunicipalidaddealberti@gmail.com"],
      replyTo: email,
      subject,
      react: (
        <EmailTemplate
          email={email}
          name={name}
          subject={subject}
          content={content}
        />
      ),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
