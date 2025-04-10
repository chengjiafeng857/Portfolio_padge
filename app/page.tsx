"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  useEffect(() => {
    // This ensures smooth scrolling works in all browsers
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
