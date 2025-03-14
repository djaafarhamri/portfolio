"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

interface SkillBadgeProps {
  name: string
  level: number
  className?: string
}

export default function SkillBadge({ name, level, className }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Add experience years based on skill level
  const getExperienceYears = (level: number) => {
    if (level >= 90) return "5+ years"
    if (level >= 80) return "3-5 years"
    if (level >= 70) return "2-3 years"
    return "1-2 years"
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "relative overflow-hidden rounded-lg border border-border/40 backdrop-blur-sm bg-background/30",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 flex flex-col items-center justify-center">
        <span className="font-medium mb-2">{name}</span>
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 opacity-0 transition-opacity"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <span className="text-2xl font-bold mb-1">{level}%</span>
          <span className="text-xs text-muted-foreground">{getExperienceYears(level)}</span>
        </div>
      </div>
    </motion.div>
  )
}

