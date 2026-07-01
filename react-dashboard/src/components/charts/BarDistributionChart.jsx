function BarDistributionChart({ items, maxValue }) {
  const computedMax = maxValue ?? Math.max(...items.map((item) => item.value), 1)

  return (
    <div className="bar-chart">
      {items.map((item) => {
        const width = `${(item.value / computedMax) * 100}%`

        return (
          <div className="bar-item" key={item.label}>
            <div className="bar-labels">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <div className="bar-track">
              <div className="bar-fill" style={{ width }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BarDistributionChart
