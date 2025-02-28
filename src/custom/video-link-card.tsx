"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlayCircle, LinkIcon, Copy, Check, X } from "lucide-react"

interface VideoLinkCardProps {
  videoName?: string
  videoUrl?: string
  onRemove?: () => void
}

export default function VideoLinkCard({
  videoName = "Introduction to Next.js",
  videoUrl = "https://example.com/video",
  onRemove,
}: VideoLinkCardProps) {
  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(videoUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRemove = () => {
    setIsVisible(false)
    // Call the parent's onRemove after animation
    setTimeout(() => {
      onRemove?.()
    }, 300) // Match this with the CSS transition duration
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <Card className="w-full max-w-md relative mt-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 h-7 w-7 rounded-full hover:bg-destructive hover:text-destructive-foreground transition-colors"
          onClick={handleRemove}
          aria-label="Remove video"
        >
          <X className="h-4 w-4" />
        </Button>
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl">{videoName}</CardTitle>
          </div>
          <CardDescription>Click the link below to watch the video</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <LinkIcon className="h-4 w-4 text-muted-foreground" />
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline truncate"
            >
              {videoUrl}
            </a>
          </div>
          <div className="relative">
            <Label htmlFor="video-link" className="sr-only">
              Video Link
            </Label>
            <Input id="video-link" value={videoUrl} readOnly className="pr-10" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={copyToClipboard}
              aria-label="Copy link"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => window.open(videoUrl, "_blank")}>
            <PlayCircle className="mr-2 h-4 w-4" />
            Watch Video
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

