"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0] as string;
      fieldErrors[key] = issue.message;
    }
    return { success: false, fieldErrors };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  if (!resendApiKey || !toEmail) {
    return {
      success: false,
      error: "Contact form is not configured. Please set RESEND_API_KEY and CONTACT_EMAIL environment variables.",
    };
  }

  try {
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: toEmail,
      replyTo: result.data.email,
      subject: `[Portfolio] ${result.data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${result.data.name}</p>
        <p><strong>Email:</strong> ${result.data.email}</p>
        <p><strong>Subject:</strong> ${result.data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${result.data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return {
      success: false,
      error: "Failed to send message. Please try again or reach out via WhatsApp.",
    };
  }
}
