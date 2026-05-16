export default function ProgressBar({ value }: { value: number }) {
  return (
    <div>
      <div>{value}%</div>
    </div>
  )
}
