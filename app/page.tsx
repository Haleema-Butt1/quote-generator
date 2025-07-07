"use client";

import { QuoteForm } from "@/components/custom/QuoteForm"
import { QuoteDisplay } from "@/components/custom/QuoteDisplay"
import quotesData from "@/data/quotes.json"
import { useState } from "react"

export default function Home() {
  const [quotes, setQuotes] = useState<string[]>([])

  const handleSubmit = (topic: string) => {
    const topicData = quotesData.quotes.find(item => item.topic === topic)
    setQuotes(topicData?.quotes || ["No quotes found for this topic!"])
  }

  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Quote Generator</h1>
      <QuoteForm onSubmit={handleSubmit} />
      <QuoteDisplay quotes={quotes} />
    </main>
  )
}