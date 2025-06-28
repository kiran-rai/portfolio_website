"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success?: boolean
  error?: string
  fieldErrors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Validate form data
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    })

    if (!validatedFields.success) {
      return {
        error: "Please fix the errors below",
        fieldErrors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, message } = validatedFields.data

    // Replace the commented section and console.log with this:
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "portfolio@resend.dev", // Using Resend's default domain
      to: "kiran.s.rai@outlook.com",
      subject: `New contact form submission from ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong style="color: #374151;">Name:</strong> ${name}</p>
        <p><strong style="color: #374151;">Email:</strong> ${email}</p>
        <p><strong style="color: #374151;">Message:</strong></p>
        <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #7c3aed;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
      <p style="color: #6b7280; font-size: 14px;">
        This message was sent from your portfolio contact form.
      </p>
    </div>
  `,
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      error: "Failed to send message. Please try again later.",
    }
  }
}
