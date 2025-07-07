"use client";
export function QuoteDisplay({ quotes }: { quotes: string[] }) {
  return (
    <div className="mt-8 w-full max-w-md space-y-4">
      {quotes.map((quote, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded-lg">
          "{quote}"
        </div>
      ))}
    </div>
  )
}