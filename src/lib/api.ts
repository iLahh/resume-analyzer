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
    if (errText.trim().startsWith('<')) {
      throw new Error(`Server returned an invalid response (${res.status}). Please check your NEXT_PUBLIC_API_URL.`)
    }
    throw new Error(errText || 'Failed to analyze resume')
  }
  return res.json()
}
