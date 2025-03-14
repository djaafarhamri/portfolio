"use client"

import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useState } from "react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl?: string
  repoUrl?: string
}

export default function ProjectCard({ title, description, tags, imageUrl, demoUrl, repoUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card
        className="overflow-hidden h-full border-border/40 backdrop-blur-sm bg-background/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"
            style={{
              opacity: isHovered ? 0.7 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 z-20"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            {demoUrl && (
              <Button variant="secondary" size="sm" className="mr-2" asChild>
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 text-sm">{description}</p>

          {/* Add key achievements section */}
          <div className="mb-4 space-y-2">
            <h4 className="text-sm font-semibold text-primary">Key Achievements:</h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>Improved performance by 40% through code optimization</li>
              <li>Implemented responsive design for all device sizes</li>
              <li>Integrated with multiple third-party APIs</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          {repoUrl && (
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

