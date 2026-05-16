'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ScoreCard from '@/components/ScoreCard'
import SummaryCard from '@/components/SummaryCard'
import FeedbackList from '@/components/FeedbackList'
import StructureFeedback from '@/components/StructureFeedback'
import { AnalysisResult } from '@/types/resume'

export default function ResultPage() {
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const router = useRouter()

  useEffect(() => {
    const raw = localStorage.getItem('resume_result')
    if (!raw) { router.push('/'); return }
    setResult(JSON.parse(raw))
  }, [router])

  if (!result) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-[#888888]">Loading...</div>
    </div>
  )

  return (
    <main className="min-h-screen max-w-4xl mx-auto p-4 sm:p-8 py-8 md:py-16">
      <button onClick={() => router.push('/')} className="text-xs text-[#888888] hover:text-white mb-6 md:mb-8 flex items-center gap-1">
        ← Back
      </button>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Analysis Result</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <ScoreCard score={result.score} />
          <SummaryCard summary={result.summary} />
        </div>
        <div className="md:col-span-2 space-y-6">
          <FeedbackList items={result.feedback} />
          <StructureFeedback note={result.structure_notes} skills={result.skill_recommendations} />
        </div>
      </div>
    </main>
  )
}
