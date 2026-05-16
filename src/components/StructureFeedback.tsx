export default function StructureFeedback({ note, skills }: { note: string; skills: string[] }) {
  return (
    <div className="space-y-6">
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
        <h3 className="text-lg font-medium mb-4">Structure Notes</h3>
        <p className="text-[#888888] leading-relaxed">{note}</p>
      </div>

      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
        <h3 className="text-lg font-medium mb-4">Skill Recommendations</h3>
        <div className="flex flex-wrap gap-2">
          {skills?.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-[#2A2A2A] text-sm rounded-full text-[#F5F5F5]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
