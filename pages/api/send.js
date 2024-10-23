import { Resend } from 'resend';
import { EmailTemplate } from '@/components/parts/email';
import fs from 'fs';
import path from 'path';
import os from 'os';
const resend = new Resend(process.env.RESEND_API_KEY);


export default async (req, res) => {
  console.log(req)
  const { name, email, phone, date, time, service, message } = req.body;
  const emailContent = EmailTemplate({ formData: { name, email, phone, date, time, service, message } });
  const toEmail = process.env.RESEND_EMAIL ?? "tjs"
  const fromEmail = `${name} <onboarding@resend.dev>`

  const emailText = `
  テスト:
  
  Name: ${name}
  Email: ${email}
  Phone Number: ${phone}
  Date: ${date}
  Time: ${time}
  Service: ${service}
  Message: ${message}
`;

console.log("-----------------")
console.log(toEmail)
console.log(fromEmail)
console.log("-----------------")


  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: '入学手続きフォーム',
    react: emailContent,
    text: emailText,
    attachments: [
      {
        content: fileBuffer.toString('base64'), // Base64エンコードされたファイル
        filename: 'appointment-details.txt', // 添付ファイルの名前
        type: 'text/plain', // MIMEタイプ
      },
    ],
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
