import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const nodemailerModule: any = await import("nodemailer");
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || smtpUser;
    const smtpSecureEnv = process.env.SMTP_SECURE;
    const smtpSecure = smtpSecureEnv ? smtpSecureEnv === "true" : smtpPort === 465;

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      return NextResponse.json({ error: "Email transport not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL." }, { status: 500 });
    }

    const createTransport = (nodemailerModule.default?.createTransport || nodemailerModule.createTransport).bind(
      nodemailerModule.default || nodemailerModule
    );
    const transporter = createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>
\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p style="white-space: pre-wrap;">${message}</p>
      `
    });

    return NextResponse.json({ success: true, id: info.messageId });
  } catch (error: any) {
    console.error("Contact form send error:", error);
    const message = typeof error?.message === "string" ? error.message : "Failed to send email";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


