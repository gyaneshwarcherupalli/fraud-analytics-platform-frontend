function DashboardCard({ title, value, change, trend = 'neutral' }) {
  const trendClass = trend === 'up' ? 'trend-up' : trend === 'down' ? 'trend-down' : ''

  return (
    <article className="metric-card dashboard-card">
      <p>{title}</p>
      <h3>{value}</h3>
      <span className={trendClass}>{change}</span>
    </article>
  )
}

export default DashboardCard
