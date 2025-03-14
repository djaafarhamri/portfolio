"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export default function ParallaxSection({ children, id, className }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id={id} ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y, opacity }} className="h-full w-full">
        {children}
      </motion.div>
    </section>
  )
}

