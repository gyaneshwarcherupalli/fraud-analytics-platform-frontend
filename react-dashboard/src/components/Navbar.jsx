function Navbar() {
  return (
    <header className="navbar">
      <div>
        <p className="navbar-eyebrow">Fraud Analytics Platform</p>
        <h1>Dashboard</h1>
      </div>
      <div className="navbar-actions">
        <input
          type="search"
          placeholder="Search alerts, merchants, or transactions"
          aria-label="Search"
        />
        <button type="button">New Alert Rule</button>
      </div>
    </header>
  )
}

export default Navbar