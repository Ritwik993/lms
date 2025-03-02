
// import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

interface LoadingSpinnerProps {
  isLoading: boolean
}

export function LoadingSpinner({ isLoading }: LoadingSpinnerProps) {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    </div>
  )
}