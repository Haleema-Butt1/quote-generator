"use client";
import { useState } from "react"

export function QuoteForm({ onSubmit }: { onSubmit: (topic: string) => void }) {
  const [topic, setTopic] = useState("")

  return (
    <div className="w-full max-w-md space-y-4">
      <input
        placeholder="Try 'motivation' or 'love'"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button 
        onClick={() => onSubmit(topic.toLowerCase())}
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Get Quotes
      </button>
    </div>
  )
}