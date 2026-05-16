const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

export async function analyzeResume(file: File) {
  const form = new FormData()
  form.append('file', file)
  const res = await fetch(`${API_URL}/api/analyze`, {
    method: 'POST',
    body: form,
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(errText || 'Failed to analyze resume')
  }
  return res.json()
}
