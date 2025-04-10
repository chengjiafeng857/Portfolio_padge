import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg border border-brand-100">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-brand-800">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-brand-50 text-brand-600">
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-brand-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2">
        {liveUrl && (
          <Button
            variant="outline"
            size="sm"
            className="flex gap-1 border-brand-200 text-brand-500 hover:bg-brand-50 hover:text-brand-600"
            asChild
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="flex gap-1 border-brand-200 text-brand-500 hover:bg-brand-50 hover:text-brand-600"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
