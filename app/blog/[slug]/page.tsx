"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { blogPosts } from "@/lib/blog-data"
import { ppEditorialNewUltralightItalic, inter } from "@/app/fonts"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Markdown from "react-markdown"

export default function BlogPost() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.slug) {
      const foundPost = blogPosts.find((p) => p.slug === params.slug)
      if (foundPost) {
        setPost(foundPost)
      } else {
        router.push("/")
      }
      setIsLoading(false)
    }
  }, [params.slug, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="animate-pulse text-white/50">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-white/50">Post not found</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-[#141414] ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center space-x-2 text-white/70 mb-4">
              <span className="uppercase text-sm tracking-wider">{post.category}</span>
              <span>•</span>
              <span className="text-sm">{post.date}</span>
            </div>
            <h1
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl text-white font-light italic tracking-tighter leading-tight mb-6`}
            >
              {post.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Button
          variant="ghost"
          className="mb-8 text-white/70 hover:text-white hover:bg-white/10"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <Markdown>{post.content}</Markdown>
        </motion.div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h2
            className={`${ppEditorialNewUltralightItalic.className} text-2xl text-white/80 font-light italic tracking-tighter mb-8`}
          >
            Continue Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={relatedPost.coverImage || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  </div>
                  <h3
                    className={`${ppEditorialNewUltralightItalic.className} text-xl text-white font-light italic tracking-tighter leading-tight mb-2`}
                  >
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-white/50 line-clamp-2">{relatedPost.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

