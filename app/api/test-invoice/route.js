import nodemailer from 'nodemailer';

export async function GET() {
    const mockFormData = {
        name: 'Test User',
        projectName: 'Mock Project',
        email: 'cazemeskovic@gmail.com',
        timeline: '2 weeks',
        budget: '$5000',
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cazemesko@gmail.com', // Tvoj Gmail email
            pass: 'Tristan08011985', // Tvoja lozinka ili app password
        },
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: mockFormData.email,
        subject: 'Test Invoice',
        text: 'Test email without attachment',
        html: '<p>Test email without attachment</p>',
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Simple email sent successfully!");
        return new Response("Email sent!");
    } catch (err) {
        console.error("TEST EMAIL ERROR:", err);
        return new Response("Email failed", { status: 500 });
    }
}
