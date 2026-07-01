function DonutBreakdownChart({ segments }) {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0)
  const gradientStops = []
  let offset = 0

  segments.forEach((segment) => {
    const start = (offset / total) * 100
    offset += segment.value
    const end = (offset / total) * 100
    gradientStops.push(`${segment.color} ${start}% ${end}%`)
  })

  return (
    <div className="donut-layout">
      <div className="donut" style={{ background: `conic-gradient(${gradientStops.join(', ')})` }}>
        <div className="donut-hole">
          <span>{total}%</span>
          <small>coverage</small>
        </div>
      </div>
      <ul className="donut-legend">
        {segments.map((segment) => (
          <li key={segment.label}>
            <span className="legend-dot" style={{ backgroundColor: segment.color }} />
            <span>{segment.label}</span>
            <strong>{segment.value}%</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DonutBreakdownChart
