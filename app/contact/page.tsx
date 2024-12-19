"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Get <span className="text-[#cc73f8]">in</span> Touch
        </h1>
        <p className="text-gray-400">Have questions? We'd love to hear from you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="rounded-2xl bg-[#0F0F13] p-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-[#cc73f8]/10 p-3">
                  <Mail className="size-6 text-[#cc73f8]" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium">info@hoops.tech</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-[#cc73f8]/10 p-3">
                  <Phone className="size-6 text-[#cc73f8]" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-[#cc73f8]/10 p-3">
                  <MapPin className="size-6 text-[#cc73f8]" />
                </div>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="font-medium">123 Sport Street, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0F0F13] p-8">
            <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl bg-[#0F0F13] p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  className="bg-[#1A1A1F] border-transparent focus:border-[#cc73f8] focus:ring-0"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-[#1A1A1F] border-transparent focus:border-[#cc73f8] focus:ring-0"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                className="bg-[#1A1A1F] border-transparent focus:border-[#cc73f8] focus:ring-0"
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                className="min-h-[150px] bg-[#1A1A1F] border-transparent focus:border-[#cc73f8] focus:ring-0"
                placeholder="Your message..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#cc73f8] hover:bg-[#cc73f8]/90 text-white rounded-full py-6"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

