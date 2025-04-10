import ProjectCard from "./project-card"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with Next.js, featuring product listings, cart functionality, and secure checkout.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app that helps users organize tasks, set deadlines, and track progress with intuitive drag-and-drop functionality.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that provides real-time forecasts, historical data, and interactive maps for locations worldwide.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "Weather API", "Chart.js", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ]

  return (
    <section
      id="projects"
      aria-label="My Projects"
      className="min-h-screen flex items-center py-16 px-4 md:px-6 bg-white scroll-mt-0"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">My Projects</h2>
          <p className="text-brand-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
