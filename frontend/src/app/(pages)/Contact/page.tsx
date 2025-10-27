/* eslint-disable @next/next/no-img-element */
"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-green-700 mb-4">CONTACT US</h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Got a question? We’d love to hear from you. Send us a message and
          we’ll respond as soon as we can.
        </p>

        {/* Contact layout */}
        <div className="grid md:grid-cols-2 gap-12 bg-white shadow-md rounded-2xl p-8">
          {/* Left Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <Input placeholder="First" required />
                <Input placeholder="Last" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                required
                className="mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="Type your message..."
                required
                className="mt-2 min-h-[120px]"
              />
            </div>

            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6"
            >
              Submit
            </Button>
          </form>

          {/* Right Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-green-700">
                EMAIL ADDRESS
              </h2>
              <p className="text-gray-700">mantalongonnhs.303000@gmail.com</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-green-700">
                CELLPHONE NUMBER
              </h2>
              <p className="text-gray-700">+63 916 785 9669</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-green-700">
                PHYSICAL ADDRESS
              </h2>
              <p className="text-gray-700">
                Mantalongon Proper, Mantalongon, Dalaguete, Cebu
              </p>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.68786633157!2d123.51274887480616!3d9.776271177148216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abbffe0b4adf77%3A0x9093195f7e5ec7e5!2sMantalongon%20National%20High%20School!5e0!3m2!1sen!2sph!4v1696410000000!5m2!1sen!2sph"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
