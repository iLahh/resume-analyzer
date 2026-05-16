export default function FeedbackList({ items }: { items: string[] }) {
  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
      <h3 className="text-lg font-medium mb-4">Feedback</h3>
      <ul className="space-y-3">
        {items?.map((item, i) => (
          <li key={i} className="flex gap-3 text-[#F5F5F5]">
            <span className="text-[#6366F1]">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
