/* import nodemailer from 'nodemailer';

export async function POST(req) {
  const data = await req.json();
  const { name, email, message, company, website } = data;

  // Honeypot check
  if (website) {
    return new Response('Bot detected', { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'contact@earthmetaadvisor.com',
    subject: `New message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Message sent successfully', { status: 200 });
  } catch (error) {
    console.error('Email sending failed:', error);
    return new Response('Email sending failed', { status: 500 });
  }
}
 */
import { Resend } from 'resend';

/* kod za provjeru robota start */

export async function POST(req) {
  const body = await req.json();
  const { name, email, message, company, website, token } = body;

  // Honeypot: ako neko popuni ovo polje, vjerovatno je bot
  if (website) {
    return new Response('Bot detected', { status: 400 });
  }

  // Validacija reCAPTCHA tokena
  const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const captchaRes = await fetch(verifyUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`,
  });

  const captchaData = await captchaRes.json();

  if (!captchaData.success || captchaData.score < 0.5) {
    return new Response('reCAPTCHA failed', { status: 400 });
  }

  // Ako je captcha prošla, nastavi slanje maila...
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // zamijeni sa vlastitom ako budeš verifikovao domen
      to: ['cazemeskovic@gmail.com'], // Promijeni sa stvarnim emailom
      subject: `New contact form submission from ${name}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Message:
${message}
      `,
    });

    return new Response('Message sent successfully', { status: 200 });
  } catch (error) {
    console.error('Resend Error:', error);
    return new Response('Failed to send email', { status: 500 });
  }
}

/* kod za provjeru robota end */
