"use client"

import { FileText, ExternalLink, X } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
// import Link from "next/link"

interface DocumentCardProps {
  name: string
  link: string
  description?: string
  onDelete?: () => void
}

export default function DocumentCard({
  name = "Project Proposal",
  link = "https://example.com/documents/project-proposal.pdf",
  description = "Project overview and timeline details",
  onDelete = () => {},
}: DocumentCardProps) {
  return (
    <Card className="w-full mt-4 max-w-md overflow-hidden transition-all hover:shadow-md relative">
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-destructive hover:text-destructive-foreground transition-colors"
        aria-label="Remove document"
      >
        <X className="h-4 w-4 text-muted-foreground" />
      </button>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-md bg-primary/10 p-2">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-medium leading-none">{name}</h3>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 px-6 py-3">
        <Link to={link} className="w-full" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full justify-between">
            <span>View {description}</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

