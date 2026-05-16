export default function SummaryCard({ summary }: { summary?: string }) {
  if (!summary) return null

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
      <h3 className="text-lg font-medium mb-3">Summary</h3>
      <p className="text-[#F5F5F5] leading-relaxed text-sm">
        {summary}
      </p>
    </div>
  )
}
