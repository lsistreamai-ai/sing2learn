import Link from 'next/link'

export default function Home() {
  const stats = [
    { number: '500+', label: 'Students' },
    { number: '50+', label: 'Songs' },
    { number: '10K', label: 'Points Earned' },
    { number: '96%', label: 'Fun Factor' }
  ]

  const steps = [
    { icon: '🎤', title: 'Choose a Song', desc: 'Pick from our library of fun, educational songs' },
    { icon: '🎵', title: 'Sing & Record', desc: 'Record your performance with real-time scoring' },
    { icon: '⭐', title: 'Earn Points', desc: 'Get points for accuracy, expression, and creativity' },
    { icon: '🏆', title: 'Win Prizes', desc: 'Climb the leaderboard and win awesome rewards' }
  ]

  const featuredSongs = [
    { title: 'ABC Song', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '🔤' },
    { title: 'Twinkle Twinkle Little Star', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '⭐' },
    { title: 'Happy Birthday', artist: 'Traditional', difficulty: 'Easy', points: 120, emoji: '🎂' },
    { title: 'Do Re Mi', artist: 'Sound of Music', difficulty: 'Medium', points: 200, emoji: '🎼' },
    { title: 'Let It Go', artist: 'Frozen', difficulty: 'Medium', points: 250, emoji: '❄️' },
    { title: 'We Are the World', artist: 'USA for Africa', difficulty: 'Hard', points: 350, emoji: '🌍' }
  ]

  const leaderboard = [
    { rank: 1, name: 'Emma S.', songs: 12, score: 2450, avatar: '👧' },
    { rank: 2, name: 'Lucas T.', songs: 10, score: 2180, avatar: '👦' },
    { rank: 3, name: 'Sophie L.', songs: 11, score: 1950, avatar: '👧' },
    { rank: 4, name: 'Jayden W.', songs: 8, score: 1820, avatar: '👦' },
    { rank: 5, name: 'Chloe C.', songs: 9, score: 1750, avatar: '👧' }
  ]

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

      <section className="hero">
        <div className="hero-content">
          <h1>🎤 Sing2Learn</h1>
          <h2>School Singing Competition</h2>
          <p>Learn through music! Sing your heart out, earn points, and climb the leaderboard. Fun meets learning in this exciting competition.</p>
          <div className="cta-buttons">
            <Link href="/songs" className="btn btn-primary">
              🎶 Start Singing
            </Link>
            <Link href="/leaderboard" className="btn btn-secondary">
              🏆 View Leaderboard
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          {steps.map((step, i) => (
            <div key={i} className="step">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">Featured Songs</h2>
        <div className="songs-grid">
          {featuredSongs.map((song, i) => (
            <div key={i} className="song-card">
              <div className="song-cover">{song.emoji}</div>
              <div className="song-info">
                <div className="song-title">{song.title}</div>
                <div className="song-artist">{song.artist}</div>
                <div className="song-meta">
                  <span className={`difficulty ${song.difficulty.toLowerCase()}`}>
                    {song.difficulty}
                  </span>
                  <span className="points">⭐ {song.points} pts</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/songs" className="btn btn-primary">View All Songs</Link>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">🏆 Top Performers</h2>
        <div className="leaderboard">
          {leaderboard.map((player, i) => (
            <div key={i} className="leaderboard-item">
              <div className={`rank rank-${player.rank}`}>#{player.rank}</div>
              <div className="avatar">{player.avatar}</div>
              <div className="player-info">
                <div className="player-name">{player.name}</div>
                <div className="player-stats">{player.songs} songs completed</div>
              </div>
              <div className="player-score">{player.score} pts</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link href="/leaderboard" className="btn btn-secondary">View Full Leaderboard</Link>
        </div>
      </section>

      <footer>
        <p>© 2026 Sing2Learn — A School Singing Competition</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Powered by Language Services International (PET) Ltd.</p>
      </footer>
    </div>
  )
}
