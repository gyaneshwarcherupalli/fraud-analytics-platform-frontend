function buildPoints(values, width, height, padding) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const span = Math.max(max - min, 1)
  const stepX = (width - padding * 2) / Math.max(values.length - 1, 1)

  return values.map((value, index) => {
    const x = padding + index * stepX
    const y = height - padding - ((value - min) / span) * (height - padding * 2)
    return { x, y, value }
  })
}

function LineTrendChart({ values, labels, height = 180 }) {
  const width = 620
  const padding = 24
  const points = buildPoints(values, width, height, padding)
  const path = points.map((point) => `${point.x},${point.y}`).join(' ')

  return (
    <div className="line-chart-wrap">
      <svg className="line-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Risk trend chart">
        <polyline points={path} fill="none" stroke="#1f7a5c" strokeWidth="3" strokeLinecap="round" />
        {points.map((point) => (
          <circle key={`${point.x}-${point.y}`} cx={point.x} cy={point.y} r="3.5" fill="#f8fbff" stroke="#1f7a5c" strokeWidth="2" />
        ))}
      </svg>
      <div className="chart-label-row">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  )
}

export default LineTrendChart
