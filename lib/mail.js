import nodemailer from "nodemailer";
import { activationEmail } from "./emailTemplates/activation";
import Handlebars from "handlebars";
import { resetPasswordTemplate } from "./emailTemplates/resetPass";

export async function sendMail(to, subject, body) {
  const { SMTP_EMAIL, SMTP_GMAIL_PASS } = process.env;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_GMAIL_PASS,
    },
  });
  try {
    const testResult = await transporter.verify();
  } catch (error) {
    console.log("error", error);
  }
  try {
    const sendResult = await transporter.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
  } catch (error) {}
}

export function compileActivationTemplate(name, url) {
  const template = Handlebars.compile(activationEmail);
  const htmlBody = template({ name, url });
  return htmlBody;
}

export function compileResetTemplate(name, url) {
  const template = Handlebars.compile(resetPasswordTemplate);
  const htmlBody = template({ name, url });
  return htmlBody;
}
