/* 

  // app/api/send-invoice/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, pdfBase64 } = body;

    console.log('📨 Email body primljen:', body);

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: 'Vaša faktura',
      html: '<p>U prilogu se nalazi vaša faktura.</p>',
      attachments: [
        {
          filename: 'faktura.pdf',
          content: pdfBase64,
          type: 'application/pdf',
        },
      ],
    });

    console.log('✅ Email poslat:', data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    console.error('❌ Greška pri slanju emaila:', error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, pdfBase64 } = body;

    console.log('📨 Email body primljen:', body);

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Verifikovana email adresa
      to: [email], // Klijent
      /* bcc: ['admin@earthmeta-advisor.com'], // 👈 Dodaj ovdje email tima/admina */
      subject: 'Vaša faktura',
      html: '<p>U prilogu se nalazi vaša faktura.</p>',
      attachments: [
        {
          filename: 'faktura.pdf',
          content: pdfBase64,
          type: 'application/pdf',
        },
      ],
    });

    console.log('✅ Email poslat:', data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    console.error('❌ Greška pri slanju emaila:', error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
