const stats = [
  { value: '12', label: 'Seats per Circle' },
  { value: 'INR 2500', label: 'All-Inclusive' },
  { value: '7+', label: 'Curated Themes' },
  { value: '100%', label: 'Intentional' },
]

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 bg-[#5f1f2e]">
      {stats.map((s, i) => (
        <div className="flex flex-col items-center justify-center py-10 px-6 border-b lg:border-b-0 lg:border-r md:border-b md:even:border-r-0 border-white/10 text-center last:border-0 md:last:border-b-0 group" key={i}>
          <span className="font-display text-[32px] md:text-[38px] font-light text-white leading-none mb-2 group-hover:scale-110 transition-transform duration-300">{s.value}</span>
          <span className="text-[11px] md:text-[12px] tracking-[2px] uppercase text-white/70 group-hover:text-white transition-colors duration-300">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
