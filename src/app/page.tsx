'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import UploadZone from '@/components/UploadZone'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-24">
      <div className="w-full max-w-2xl text-center space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-[#6366F1]">AI Powered</span><br />
            Resume Analyzer
          </h1>
          <p className="text-[#888888] text-base md:text-lg px-2">
            Upload your CV and get instant AI feedback on score, skills, and structure.
          </p>
        </div>

        <UploadZone loading={loading} setLoading={setLoading} />
      </div>
    </main>
  )
}
