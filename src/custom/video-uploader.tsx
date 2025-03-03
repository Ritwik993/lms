
import type React from "react"

import {  useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpFromLine, Play } from "lucide-react"



export default function VideoUploader({videoUrl,setVideoUrl}:{videoUrl:string,setVideoUrl:React.Dispatch<React.SetStateAction<string>>}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
//   const [videoUrl, setVideoUrl] = useState("")
  const [embedUrl, setEmbedUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Convert YouTube URL to embed URL
    if (videoUrl) {
      let embedId = ""

      // Extract video ID from different YouTube URL formats
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = videoUrl.match(regExp)

      if (match && match[2].length === 11) {
        embedId = match[2]
        setEmbedUrl(`https://www.youtube.com/embed/${embedId}`)
        setIsDialogOpen(false)
      } else {
        alert("Please enter a valid YouTube URL")
      }
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="w-full md:w-1/2 relative bg-gray-100 aspect-video flex items-center justify-center">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            className="w-full h-full"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <div className="rounded-full bg-gray-300 p-8 flex items-center justify-center">
              <Play className="w-12 h-12 text-gray-500" />
            </div>
          </div>
        )}
      </div>

      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-2">
            Students who watch a well-made promo video are 5X more likely to enroll in your course.
          </h2>
          <p className="text-gray-700">We've seen that statistic go up to 10X for exceptionally awesome videos.</p>
        </div>

        <Button
          className="bg-blue-100 hover:bg-blue-200 text-blue-700 flex items-center gap-2 w-full md:w-auto"
          variant="secondary"
          onClick={(e) =>{ e.preventDefault();
            setIsDialogOpen(true)}}
        >
          Upload Video <ArrowUpFromLine className="h-4 w-4" />
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload YouTube Video</DialogTitle>
            <DialogDescription>Enter the URL of the YouTube video you want to embed</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full"
            />
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Embed Video</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

