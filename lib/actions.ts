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
  console.log("=== CONTACT FORM DEBUG START ===")

  try {
    // Validate form data
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    })

    if (!validatedFields.success) {
      console.log("❌ Validation failed:", validatedFields.error)
      return {
        error: "Please fix the errors below",
        fieldErrors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, message } = validatedFields.data
    console.log("✅ Form data validated:", { name, email: email.substring(0, 5) + "..." })

    // Check if API key exists
    console.log("🔑 Checking API key...")
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is not set in environment variables")
      return {
        error: "Email service is not configured. Please contact the administrator.",
      }
    }

    const apiKeyPreview = process.env.RESEND_API_KEY.substring(0, 8) + "..."
    console.log("✅ API key found:", apiKeyPreview)

    // Import and initialize Resend
    console.log("📧 Initializing Resend...")
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)
    console.log("✅ Resend initialized")

    // Prepare email data
    const emailData = {
      from: "portfolio@resend.dev",
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
    }

    console.log("📤 Sending email with data:", {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
    })

    // Send email
    const result = await resend.emails.send(emailData)

    console.log("📬 Resend API response:", JSON.stringify(result, null, 2))

    if (result.error) {
      console.error("❌ Resend API returned error:", result.error)
      return {
        error: `Email failed to send: ${result.error.message}`,
      }
    }

    if (result.data?.id) {
      console.log("✅ Email sent successfully! ID:", result.data.id)
    } else {
      console.log("⚠️ Unexpected response format:", result)
    }

    console.log("=== CONTACT FORM DEBUG END ===")

    return {
      success: true,
    }
  } catch (error) {
    console.error("💥 CRITICAL ERROR in submitContactForm:")
    console.error("Error type:", typeof error)
    console.error("Error message:", error instanceof Error ? error.message : String(error))
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace")

    console.log("=== CONTACT FORM DEBUG END (ERROR) ===")

    return {
      error: `System error: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}
