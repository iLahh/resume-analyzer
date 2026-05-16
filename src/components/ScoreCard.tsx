export default function ScoreCard({ score }: { score: number }) {
  const color = score >= 80 ? '#22C55E' : score >= 50 ? '#F59E0B' : '#EF4444'
  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
      <h3 className="text-[#888888] text-sm font-medium mb-4">CV Score</h3>
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="text-4xl font-bold" style={{ color }}>{score}<span className="text-lg text-[#888888]">/100</span></div>
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle cx="64" cy="64" r="60" stroke="#2A2A2A" strokeWidth="8" fill="none" />
          <circle cx="64" cy="64" r="60" stroke={color} strokeWidth="8" fill="none" strokeDasharray="377" strokeDashoffset={377 - (377 * score) / 100} className="transition-all duration-1000" />
        </svg>
      </div>
    </div>
  )
}
