import nodemailer from 'nodemailer';

// SMTP Configuration
const smtpConfig = {
  host: 'smtp.stackmail.com',
  port: 465, // SSL port
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || '', // Your email address
    pass: process.env.SMTP_PASS || '', // Your email password or app password
  },
};

// Create transporter
const transporter = nodemailer.createTransport(smtpConfig);

export default transporter;
