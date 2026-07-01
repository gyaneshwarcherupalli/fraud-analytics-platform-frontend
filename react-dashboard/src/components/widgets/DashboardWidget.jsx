function DashboardWidget({ title, subtitle, children, className = '' }) {
  const widgetClass = className ? `panel widget ${className}` : 'panel widget'

  return (
    <article className={widgetClass}>
      <div className="widget-header">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      <div className="widget-body">{children}</div>
    </article>
  )
}

export default DashboardWidget
