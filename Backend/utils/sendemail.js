import nodeMailer from "nodemailer";

export const sendEmail = async (option) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOption = {
        from: process.env.SMTP_MAIL,
        to: option.email,
        subject: option.subject,
        text: `${option.message} \n\n Email of user who sent Message: ${option.userEmail}`,
    };

    await transporter.sendMail(mailOption);
};
