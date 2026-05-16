'use client'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { analyzeResume } from '@/lib/api'

interface Props {
  loading: boolean
  setLoading: (v: boolean) => void
}

export default function UploadZone({ loading, setLoading }: Props) {
  const [dragging, setDragging] = useState(false)
  const [fileName, setFileName] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleFile = useCallback(async (file: File) => {
    if (file.type !== 'application/pdf') {
      setError('Only PDF files are supported.')
      return
    }
    setFileName(file.name)
    setError('')
    setLoading(true)
    try {
      const result = await analyzeResume(file)
      localStorage.setItem('resume_result', JSON.stringify(result))
      router.push('/result')
    } catch (err: any) {
      setError(err.message || 'Failed to analyze. Make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }, [router, setLoading])

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  return (
    <div className="w-full">
      <label
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`flex flex-col items-center justify-center w-full h-52 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${dragging ? 'border-[#6366F1] bg-[#6366F1]/10' : 'border-[#2A2A2A] bg-[#1A1A1A] hover:border-[#6366F1]/50'}`}
      >
        <input type="file" accept="application/pdf" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]) }} />
        <div className="text-4xl mb-4">📄</div>
        <div className="text-base md:text-lg font-medium text-[#F5F5F5] mb-2 px-4 text-center break-all">
          {fileName || 'Drag & drop your PDF here, or click to browse'}
        </div>
        <div className="text-sm text-[#888888]">
          Supports PDF only · Max 10MB
        </div>
      </label>

      {error && <div className="mt-4 text-[#EF4444] text-sm">{error}</div>}

      {loading && (
        <div className="mt-6 space-y-3">
          <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
            <div className="h-full bg-[#6366F1] animate-pulse w-1/2"></div>
          </div>
          <div className="text-sm text-[#888888]">Analyzing your resume...</div>
        </div>
      )}
    </div>
  )
}
