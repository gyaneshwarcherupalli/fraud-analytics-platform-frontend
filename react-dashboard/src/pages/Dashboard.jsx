const metrics = [
  { label: 'Total Transactions', value: '152,304', change: '+8.4%' },
  { label: 'Flagged Alerts', value: '2,946', change: '+2.1%' },
  { label: 'Fraud Loss Prevented', value: '$428,900', change: '+11.7%' },
  { label: 'Average Risk Score', value: '67 / 100', change: '-1.3%' },
]

function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="metric-grid">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <p>{metric.label}</p>
            <h3>{metric.value}</h3>
            <span>{metric.change} vs last week</span>
          </article>
        ))}
      </div>

      <div className="dashboard-grid">
        <article className="panel panel-large">
          <h2>Risk Trend</h2>
          <p>Chart area placeholder for transaction risk over time.</p>
        </article>

        <article className="panel">
          <h2>Top Risk Regions</h2>
          <p>Map or region chart placeholder.</p>
        </article>

        <article className="panel">
          <h2>Merchant Risk Distribution</h2>
          <p>Category chart placeholder.</p>
        </article>
      </div>

      <article className="panel">
        <h2>Recent Suspicious Transactions</h2>
        <div className="table-placeholder">
          <p>Table component placeholder with sorting and pagination.</p>
        </div>
      </article>
    </section>
  )
}

export default Dashboard