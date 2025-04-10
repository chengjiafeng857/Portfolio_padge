"use client"

import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "lucide-react"

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      const yOffset = 0 // No offset to ensure full view
      const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 py-12 overflow-hidden bg-gradient-to-b from-brand-50 to-brand-100">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-25"></div>
      <div className="relative max-w-3xl mx-auto space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-900">Chengjia Feng</h1>
        <h2 className="text-xl md:text-2xl font-medium text-brand-700">Full Stack Developer</h2>
        <p className="text-lg text-brand-600 max-w-xl mx-auto">
          I build beautiful, responsive, and user-friendly web applications with modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="bg-brand-500 hover:bg-brand-600" onClick={scrollToProjects}>
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-brand-200 text-brand-500 hover:bg-brand-50 hover:text-brand-600"
          >
            Download Resume
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-brand-500 hover:text-brand-600 hover:bg-brand-50"
          onClick={scrollToProjects}
        >
          <ArrowDownIcon className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
