"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { submitContactForm, type ContactFormState } from "@/lib/actions"
import { useEffect } from "react"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  )
}

export function ContactForm() {
  const initialState: ContactFormState = {}
  const [state, formAction] = useActionState(submitContactForm, initialState)

  // Reset form on successful submission
  useEffect(() => {
    if (state.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement
      if (form) {
        form.reset()
      }
    }
  }, [state.success])

  return (
    <Card className="border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>I'll get back to you as soon as possible</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {state.success && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Thank you for your message! I'll get back to you soon.
            </AlertDescription>
          </Alert>
        )}

        {state.error && !state.success && (
          <Alert className="border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">{state.error}</AlertDescription>
          </Alert>
        )}

        <form id="contact-form" action={formAction} className="space-y-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                state.fieldErrors?.name ? "border-red-300" : "border-purple-200"
              }`}
              placeholder="Your name"
              required
            />
            {state.fieldErrors?.name && <p className="text-sm text-red-600">{state.fieldErrors.name[0]}</p>}
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                state.fieldErrors?.email ? "border-red-300" : "border-purple-200"
              }`}
              placeholder="Your email"
              required
            />
            {state.fieldErrors?.email && <p className="text-sm text-red-600">{state.fieldErrors.email[0]}</p>}
          </div>

          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`flex min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                state.fieldErrors?.message ? "border-red-300" : "border-purple-200"
              }`}
              placeholder="Your message"
              required
            />
            {state.fieldErrors?.message && <p className="text-sm text-red-600">{state.fieldErrors.message[0]}</p>}
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  )
}
