"use client";

import { motion } from "framer-motion";
import { Code, Laptop, User } from "lucide-react";
import { useState } from "react";

interface AboutImageProps {
  type: "avatar" | "code" | "workspace" | "abstract";
  className?: string;
}

export default function AboutImage({
  type = "avatar",
  className = "",
}: AboutImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const renderImage = () => {
    switch (type) {
      case "avatar":
        return (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <User className="h-1/3 w-1/3 text-primary/40" strokeWidth={1.5} />
          </div>
        );
      case "code":
        return (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
            <pre className="text-xs md:text-sm text-muted-foreground font-mono overflow-hidden w-full h-full flex items-center">
              <code>
                {`// Professional Developer
                
const skills = [
  "JavaScript",
  "TypeScript", 
  "React",
  "Node.js"
];

function solveProblems(challenge) {
  const solution = skills.reduce(
    (result, skill) => {
      // Apply expertise
      return result.enhance(skill);
    }, 
    new Solution(challenge)
  );
  
  return solution;
}`}
              </code>
            </pre>
          </div>
        );
      case "workspace":
        return (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <Laptop className="h-1/3 w-1/3 text-primary/40" strokeWidth={1.5} />
          </div>
        );
      case "abstract":
        return (
          <div className="h-full w-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-primary/20 mix-blend-overlay"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-secondary/20 mix-blend-overlay"></div>
            <div className="absolute top-1/3 right-1/3 w-1/4 h-1/4 rounded-full bg-accent/20 mix-blend-overlay"></div>
            <Code className="absolute bottom-8 right-8 h-12 w-12 text-foreground/10" />
          </div>
        );
      default:
        return (
          <div className="h-full w-full flex items-center justify-center bg-muted">
            <span className="text-muted-foreground">Image placeholder</span>
          </div>
        );
    }
  };

  return (
    <motion.div
      className={`aspect-square relative rounded-xl overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {renderImage()}
      <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
    </motion.div>
  );
}
