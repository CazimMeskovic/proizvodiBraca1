/* export async function POST(req) {
  try {
    const { formData, selectedPackage } = await req.json();
    console.log("📦 formData:", formData);
    console.log("📦 selectedPackage:", selectedPackage);

    // Test 1: Probaj prvo samo generisanje PDF-a
    const pdfBuffer = await ReactPDF.renderToBuffer(
      <InvoicePDF formData={formData} selectedPackage={selectedPackage} />
    );
    console.log("📄 PDF generated successfully");

    // Test 2: Sad slanje emaila
    const { error } = await resend.emails.send({
      from: 'EarthMeta Advisor <your@domain.com>',
      to: formData.email,
      bcc: 'meskovic0007@gmail.com',
      subject: 'Your EarthMeta Advisor Invoice',
      html: `<p>Hi ${formData.name},</p><p>Invoice attached.</p>`,
      attachments: [
        {
          filename: 'invoice.pdf',
          content: pdfBuffer,
        },
      ],
    });

    if (error) {
      console.error('📧 Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Send Invoice Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
 */

import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function POST(req) {
  try {
    const { formData, paymentInfo, selectedPackage } = await req.json();

    // 1. Create new PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const drawText = (text, x, y, size = 12) => {
      page.drawText(text, {
        x, y,
        size,
        font,
        color: rgb(0, 0, 0),
      });
    };

    // 2. Add EarthMeta branding
    drawText('EarthMeta Advisor', 50, 370, 20);
    drawText('www.earthmeta.io', 50, 350, 10);
    drawText('info@earthmeta.io', 50, 335, 10);

    // 3. Buyer and Project Info
    drawText(`Name: ${formData.name}`, 50, 300);
    drawText(`Email: ${formData.email}`, 50, 285);
    drawText(`Project: ${formData.projectName}`, 50, 270);
    drawText(`Package: ${selectedPackage}`, 50, 255);
    drawText(`Budget: ${formData.budget}`, 50, 240);
    drawText(`Timeline: ${formData.timeline}`, 50, 225);

    // 4. Payment Info
    drawText(`Transaction ID: ${paymentInfo.id}`, 50, 200);
    drawText(`Status: ${paymentInfo.status}`, 50, 185);
    drawText(`Paid Amount: $${paymentInfo.purchase_units[0].amount.value}`, 50, 170);
    drawText(`Date: ${new Date(paymentInfo.create_time).toLocaleDateString()}`, 50, 155);

    // pisem sta zelim u tekstu da bude ovde
    drawText(`ovde pisem sta hocu i zelim da bude u fakturi u pdf cazim pisao `);

    // 5. Finalize PDF
    const pdfBytes = await pdfDoc.save();

    // 6. Return as base64 string for further use
    const base64PDF = Buffer.from(pdfBytes).toString('base64');

    return NextResponse.json({ success: true, pdf: base64PDF });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: 'Error generating PDF' }, { status: 500 });
  }
}
