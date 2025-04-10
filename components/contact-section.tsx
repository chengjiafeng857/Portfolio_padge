import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 md:px-6 bg-brand-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">Get In Touch</h2>
          <p className="text-brand-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-brand-500">
                <MailIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-brand-800">Email</h3>
                <p className="text-brand-600">feng.chen@northeastern.edu</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-brand-500">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-brand-800">Phone</h3>
                <p className="text-brand-600">(857) 277-3082</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-brand-500">
                <MapPinIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-brand-800">Location</h3>
                <p className="text-brand-600">Boston, MA</p>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-brand-700">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="border-brand-200 focus-visible:ring-brand-500" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-brand-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="border-brand-200 focus-visible:ring-brand-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-brand-700">
                Subject
              </label>
              <Input id="subject" placeholder="Subject" className="border-brand-200 focus-visible:ring-brand-500" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-brand-700">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[120px] border-brand-200 focus-visible:ring-brand-500"
              />
            </div>
            <Button className="w-full bg-brand-500 hover:bg-brand-600">Send Message via Email</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
