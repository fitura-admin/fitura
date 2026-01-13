const BREVO_API_URL = process.env.BREVO_API_URL!;
const BREVO_API_KEY = process.env.BREVO_API_KEY!;

const senderEmail = "info@fitura.lv";
const recipientEmail = "m.panina@fitura.lv";

export async function sendEmailViaBrevo(data: {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: File | null;
}) {
  const attachments = [];

  if (data.resume) {
    const buffer = Buffer.from(await data.resume.arrayBuffer());

    attachments.push({
      content: buffer.toString("base64"),
      name: data.resume.name,
    });
  }

  const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: {
        email: senderEmail,
        name: "HR",
      },
      to: [{ email: recipientEmail }],
      subject: `Отклик на вакансию: ${data.position}`,
      htmlContent: `
        <p><b>Имя:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Телефон:</b> ${data.phone}</p>
        <p><b>Вакансия:</b> ${data.position}</p>
      `,
      attachment: attachments,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Brevo error: ${error}`);
  }
}
