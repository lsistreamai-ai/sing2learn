import Link from 'next/link'

export default function About() {
  return (
    <div>
      <nav>
        <div className="logo">Sing2<span>Learn</span></div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/songs">Songs</Link></li>
          <li><Link href="/leaderboard">Leaderboard</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>

      <section style={{ paddingTop: '100px', paddingBottom: '4rem', maxWidth: '800px', margin: '0 auto', padding: '100px 2rem 4rem' }}>
        <h2 className="section-title">About Sing2Learn</h2>
        
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>🎯 Our Mission</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Sing2Learn combines the joy of music with educational goals. Students practice language skills, 
            build confidence, and have fun while competing in a friendly singing competition.
          </p>

          <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>🎵 How Points Work</h3>
          <ul style={{ color: 'var(--text-muted)', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Base Points:</strong> Each song has a base point value</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Accuracy Bonus:</strong> Sing the right notes for extra points</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Expression Bonus:</strong> Show emotion and creativity</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Streak Bonus:</strong> Sing multiple days in a row</li>
          </ul>

          <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>🏆 Prizes</h3>
          <ul style={{ color: 'var(--text-muted)', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>🥇 1st Place: Trophy + Gift Voucher</li>
            <li style={{ marginBottom: '0.5rem' }}>🥈 2nd Place: Medal + Gift Voucher</li>
            <li style={{ marginBottom: '0.5rem' }}>🥉 3rd Place: Medal + Certificate</li>
            <li style={{ marginBottom: '0.5rem' }}>🎖️ Top 10: Certificate of Achievement</li>
          </ul>

          <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>📅 Competition Period</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            May 2026 — Details to be announced. Check back soon!
          </p>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/songs" className="btn btn-primary">
              🎤 Start Singing Now!
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Sing2Learn — A School Singing Competition</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Organized by Language Services International (PET) Ltd.</p>
      </footer>
    </div>
  )
}
