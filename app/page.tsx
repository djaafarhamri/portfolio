"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import { ThemeToggle } from "@/components/theme-toggle";
import CustomCursor from "@/components/custom-cursor";
import ParallaxSection from "@/components/parallax-section";
import { motion } from "framer-motion";
import AboutImage from "@/components/about-image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateParallax = (factor: number) => {
    return -scrollY * factor;
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/90 relative overflow-hidden">
      <CustomCursor />

      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.015] pointer-events-none">
        <div className="h-full w-full bg-[url('/grid-pattern.svg')] bg-repeat bg-[length:50px_50px]"></div>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold relative group">
            <span className="text-foreground">Djaafar</span>
            <span className="text-primary">Hamri</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              {["about", "experience", "skills", "projects", "contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    className="text-muted-foreground hover:text-foreground transition-colors relative group uppercase text-sm tracking-wider"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              )}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden"
          style={{
            perspective: "1000px",
          }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              transform: `translateY(${calculateParallax(0.1)}px)`,
            }}
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-start">
                <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary backdrop-blur-sm border border-primary/20">
                  Available for Hire
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
                  <span className="text-primary">Djaafar A. Hamri</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">
                  Senior Full Stack Developer
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary/20 text-primary font-medium text-sm rounded-full border border-primary/30">
                    5+ Years Experience
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary font-medium text-sm rounded-full border border-primary/30">
                    React Expert
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary font-medium text-sm rounded-full border border-primary/30">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary font-medium text-sm rounded-full border border-primary/30">
                    TypeScript
                  </span>
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
                  I specialize in building scalable web applications with modern
                  technologies. My experience spans from startups to enterprise
                  solutions, focusing on clean code and exceptional user
                  experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href={"#projects"}>
                    <Button
                      size="lg"
                      className="group relative overflow-hidden"
                    >
                      <span className="relative z-10">View Projects</span>
                      <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href={"#contact"}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="group relative overflow-hidden"
                    >
                      <span className="relative z-10">Contact Me</span>
                      <span className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                }}
                className="w-1 h-1 bg-primary rounded-full"
              />
            </div>
            <span className="text-xs text-muted-foreground mt-2">
              Scroll Down
            </span>
          </div>
        </section>

        {/* About Section */}
        <ParallaxSection id="about" className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <AboutImage type="code" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary backdrop-blur-sm border border-secondary/20 mb-4">
                  About Me
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Passionate developer with proven industry experience
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  With over 5 years of professional experience, I've developed a
                  strong expertise in building scalable web applications using
                  modern JavaScript frameworks and cloud technologies.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I thrive in collaborative environments and have a track record
                  of delivering high-quality solutions that meet business
                  objectives while providing exceptional user experiences.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  My approach combines technical excellence with strong
                  communication skills, ensuring that projects are delivered on
                  time and exceed expectations.
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Github,
                      url: "https://github.com/djaafarhamri",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      url: "https://www.linkedin.com/in/djaafar-hamri/",
                      label: "LinkedIn",
                    },
                    {
                      icon: Mail,
                      url: "mailto:hamridjaafar12@gmail.com",
                      label: "Email",
                    },
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="relative group border border-border/50 backdrop-blur-sm bg-background/50"
                      asChild
                    >
                      <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                        <span className="sr-only">{social.label}</span>
                        <span className="absolute -inset-0.5 scale-0 rounded-full bg-background/50 group-hover:scale-100 transition-transform duration-300"></span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </ParallaxSection>

        {/* Professional Experience Section */}
        <ParallaxSection id="experience" className="py-24 md:py-32 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary backdrop-blur-sm border border-secondary/20 mb-4">
                Work History
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Experience
              </h2>
              <p className="text-muted-foreground">
                A track record of delivering high-quality solutions across
                various industries
              </p>
            </motion.div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {[
                {
                  role: "Senior Full Stack Developer",
                  company: "Temacina",
                  period: "2023 - 2025",
                  description:
                    "Developed and maintained multiple backend projects with Express.js and Node.js. Reduced response times by 20% through performance optimization. Collaborated with design team to implement pixel-perfect UIs.",
                  technologies: [
                    "React",
                    "Node.js",
                    "TypeScript",
                    "GCP",
                    "PostgreSQL",
                  ],
                },
                {
                  role: "Full Stack Developer",
                  company: "Digital Solutions Ltd.",
                  period: "2020 - 2022",
                  description:
                    "Developed and maintained multiple client projects with React and Node.js. Reduced load times by 40% through performance optimization. Collaborated with design team to implement pixel-perfect UIs.",
                  technologies: [
                    "React",
                    "Express.js",
                    "MongoDB",
                    "Docker",
                    "Redux",
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-sm bg-background/30 border border-border/50 rounded-xl p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <p className="text-primary">{job.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20">
                        {job.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Skills Section */}
        <ParallaxSection
          id="skills"
          className="py-24 md:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent backdrop-blur-sm border border-accent/20 mb-4">
                Expertise
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technical Proficiency
              </h2>
              <p className="text-muted-foreground">
                A curated collection of technologies I've mastered to build
                powerful, scalable, and beautiful applications
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: "JavaScript", level: 95 },
                { name: "TypeScript", level: 95 },
                { name: "React", level: 95 },
                { name: "Next.js", level: 88 },
                { name: "Node.js", level: 97 },
                { name: "Nest.js", level: 88 },
                { name: "CSS/SCSS", level: 90 },
                { name: "Tailwind CSS", level: 90 },
                { name: "PostgreSQL", level: 87 },
                { name: "MongoDB", level: 83 },
                { name: "Git", level: 90 },
                { name: "Docker", level: 85 },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillBadge name={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Projects Section */}
        <ParallaxSection id="projects" className="py-24 md:py-32 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary backdrop-blur-sm border border-primary/20 mb-4">
                Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                A showcase of my most significant work, demonstrating my skills
                and problem-solving approach
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Stylish E-Commerce Platform",
                  description:
                    "A full-stack e-commerce solution with payment processing and inventory management.",
                  tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
                  imageUrl: "/ecom.png",
                  achievements: [
                    "Built an admin dashboard for managing products, orders, and users",
                    "Integrated RESTful APIs and JWT authentication for secure user access and seamless communication.",
                  ],
                  demoUrl: "#",
                  repoUrl: "#",
                },
                {
                  title: "Multiplayer Chess App",
                  description:
                    "A multiplayer chess platform to play against your friends, randoms or the chess engine",
                  tags: ["React", "Node", "Socket IO"],
                  imageUrl: "/placeholder.svg?height=400&width=600",
                  achievements: [
                    "Created a real-time multiplayer chess platform using MERN stack.",
                    "Integrated Socket IO enabling live gameplay, chat, and move synchronization",
                  ],
                  demoUrl: "#",
                  repoUrl: "#",
                },
                {
                  title: "Portfolio Website",
                  description:
                    "A responsive gaming like portfolio website with multiple themes.",
                  tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
                  imageUrl: "/portfolio.png",
                  achievements: [
                    "Designed and developed a gaming-themed portfolio using React and Tailwind CSS.",
                    "Built a responsive and customizable layout to highlight skills, and projects in a creative and immersive way.",
                  ],
                  demoUrl: "#",
                  repoUrl: "#",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Contact Section */}
        <ParallaxSection id="contact" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary backdrop-blur-sm border border-secondary/20 mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Have a project in mind or want to discuss opportunities? I'm
                  always open to new challenges and collaborations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-background/30 border border-border/50 rounded-xl p-6 md:p-8"
              >
                <form
                  className="space-y-6"
                  action="https://formsubmit.co/hamridjaafar12@gmail.com"
                  method="POST"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-md bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-md bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-md bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-md bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Your message here..."
                    />
                  </div>
                  <Button className="w-full py-6 text-base relative group overflow-hidden">
                    <span className="relative z-10">Send Message</span>
                    <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </ParallaxSection>
      </main>

      <footer className="border-t border-border/40 py-12 relative z-10 backdrop-blur-sm bg-background/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-xl font-bold">
                <span className="text-foreground">Djaafar</span>
                <span className="text-primary">Hamri</span>
              </Link>
              <p className="text-sm text-muted-foreground mt-2">
                Crafting digital experiences with code
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-4 mb-4">
                {[
                  {
                    icon: Github,
                    url: "https://github.com/djaafarhamri",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    url: "https://www.linkedin.com/in/djaafar-hamri",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    url: "mailto:hamridjaafar12@gmail.com",
                    label: "Email",
                  },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="relative group border border-border/50 backdrop-blur-sm bg-background/50"
                    asChild
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} djaafar hamri. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
