"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface BlogPostPreviewProps {
  id: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  category: string
  slug: string
  isHovered: boolean
  showFrame: boolean
  corner: string
  edgeHorizontal: string
  edgeVertical: string
}

export function BlogPostPreview({
  id,
  title,
  excerpt,
  coverImage,
  date,
  category,
  slug,
  isHovered,
  showFrame,
  corner,
  edgeHorizontal,
  edgeVertical,
}: BlogPostPreviewProps) {
  const [borderThickness] = useState(0)
  const [borderSize] = useState(80)

  return (
    <Link href={`/blog/${slug}`} className="block w-full h-full">
      <div
        className="relative w-full h-full group transition-all duration-300"
        style={{
          transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
        }}
      >
        <div className="relative w-full h-full overflow-hidden">
          {/* Blog Post Preview with Border */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              zIndex: 1,
              transition: "all 0.3s ease-in-out",
              padding: showFrame ? `${borderThickness}px` : "0",
              width: showFrame ? `${borderSize}%` : "100%",
              height: showFrame ? `${borderSize}%` : "100%",
              left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
              top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            }}
          >
            <div className="w-full h-full overflow-hidden relative">
              {/* Cover Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={coverImage || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-white/70">{category}</span>
                    <span className="text-xs text-white/70">{date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl text-white font-light leading-tight">{title}</h3>
                  <p className="text-sm text-white/80 line-clamp-2 md:line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {excerpt}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Frame Elements (Higher z-index) */}
          {showFrame && (
            <div className="absolute inset-0" style={{ zIndex: 2 }}>
              {/* Corners */}
              <div
                className="absolute top-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${corner})` }}
              />
              <div
                className="absolute top-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }}
              />
              <div
                className="absolute bottom-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }}
              />
              <div
                className="absolute bottom-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }}
              />

              {/* Edges */}
              <div
                className="absolute top-0 left-16 right-16 h-16"
                style={{
                  backgroundImage: `url(${edgeHorizontal})`,
                  backgroundSize: "auto 64px",
                  backgroundRepeat: "repeat-x",
                }}
              />
              <div
                className="absolute bottom-0 left-16 right-16 h-16"
                style={{
                  backgroundImage: `url(${edgeHorizontal})`,
                  backgroundSize: "auto 64px",
                  backgroundRepeat: "repeat-x",
                  transform: "rotate(180deg)",
                }}
              />
              <div
                className="absolute left-0 top-16 bottom-16 w-16"
                style={{
                  backgroundImage: `url(${edgeVertical})`,
                  backgroundSize: "64px auto",
                  backgroundRepeat: "repeat-y",
                }}
              />
              <div
                className="absolute right-0 top-16 bottom-16 w-16"
                style={{
                  backgroundImage: `url(${edgeVertical})`,
                  backgroundSize: "64px auto",
                  backgroundRepeat: "repeat-y",
                  transform: "scaleX(-1)",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

