"use client"

import { ppEditorialNewUltralightItalic, inter } from "@/app/fonts"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className={`min-h-screen bg-[#141414] ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Button variant="ghost" className="mb-8 text-white/70 hover:text-white hover:bg-white/10" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-8 space-y-4">
              <h3
                className={`${ppEditorialNewUltralightItalic.className} text-2xl text-white/80 font-light italic tracking-tighter`}
              >
                Connect
              </h3>
              <div className="flex flex-col space-y-2">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  Twitter
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </Link>
                <Link
                  href="mailto:hello@example.com"
                  className="text-white/70 hover:text-white transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h1
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-5xl text-white font-light italic tracking-tighter leading-tight mb-8`}
            >
              About Me
            </h1>

            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <p>
                Hello! I'm a designer and writer with over a decade of experience in digital design, branding, and user
                experience. My journey in design began with a fascination for how visual elements can communicate
                complex ideas and evoke powerful emotions.
              </p>

              <p>
                Throughout my career, I've had the privilege of working with startups, agencies, and established brands
                across various industries. This diverse experience has shaped my approach to design—I believe in
                creating work that balances aesthetic appeal with functional purpose, always keeping the end user in
                mind.
              </p>

              <h2
                className={`${ppEditorialNewUltralightItalic.className} text-2xl text-white/80 font-light italic tracking-tighter mt-12 mb-4`}
              >
                My Design Philosophy
              </h2>

              <p>
                I approach design as a problem-solving discipline. While I value beauty and craftsmanship, I believe
                that great design must first serve a purpose and meet user needs. I'm particularly interested in the
                intersection of design and technology, and how emerging tools can enhance our creative capabilities.
              </p>

              <p>
                This blog serves as my platform to share insights, analyze trends, and document my own creative journey.
                I write about everything from practical design techniques to philosophical reflections on the role of
                design in society.
              </p>

              <h2
                className={`${ppEditorialNewUltralightItalic.className} text-2xl text-white/80 font-light italic tracking-tighter mt-12 mb-4`}
              >
                Beyond Design
              </h2>

              <p>
                When I'm not designing or writing, you might find me exploring photography, practicing mindfulness, or
                searching for the perfect cup of coffee. I believe that creative inspiration comes from diverse
                experiences, and I'm constantly seeking new perspectives.
              </p>

              <p>
                Thank you for visiting my blog. I hope you find something here that inspires your own creative journey.
                Feel free to reach out if you'd like to connect or collaborate.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

