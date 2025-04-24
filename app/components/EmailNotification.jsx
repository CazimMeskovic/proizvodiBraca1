// components/EmailNotification.js

import nodemailer from "nodemailer";

const sendEmailNotification = async (orderDetails) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: orderDetails.email,
        subject: "Order Confirmation",
        text: `Thank you for your order!\n\nDetails:\nName: ${orderDetails.name}\nPackage: ${orderDetails.package}`,
    };

    await transporter.sendMail(mailOptions);
};

export default sendEmailNotification;
