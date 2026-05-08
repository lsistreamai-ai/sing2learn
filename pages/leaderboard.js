import Link from 'next/link'

export default function Leaderboard() {
  const players = [
    { rank: 1, name: 'Emma S.', class: '5A', songs: 12, avgScore: 95, score: 2450, avatar: '👧' },
    { rank: 2, name: 'Lucas T.', class: '6B', songs: 10, avgScore: 92, score: 2180, avatar: '👦' },
    { rank: 3, name: 'Sophie L.', class: '5A', songs: 11, avgScore: 88, score: 1950, avatar: '👧' },
    { rank: 4, name: 'Jayden W.', class: '6A', songs: 8, avgScore: 91, score: 1820, avatar: '👦' },
    { rank: 5, name: 'Chloe C.', class: '5B', songs: 9, avgScore: 87, score: 1750, avatar: '👧' },
    { rank: 6, name: 'Oscar M.', class: '6B', songs: 7, avgScore: 90, score: 1680, avatar: '👦' },
    { rank: 7, name: 'Mia K.', class: '5A', songs: 8, avgScore: 86, score: 1590, avatar: '👧' },
    { rank: 8, name: 'Ethan P.', class: '6A', songs: 6, avgScore: 89, score: 1450, avatar: '👦' },
    { rank: 9, name: 'Ava R.', class: '5B', songs: 7, avgScore: 85, score: 1320, avatar: '👧' },
    { rank: 10, name: 'Noah H.', class: '6A', songs: 5, avgScore: 88, score: 1180, avatar: '👦' }
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

      <section style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
        <h2 className="section-title">🏆 Leaderboard</h2>
        
        <div className="leaderboard">
          {players.map((player) => (
            <div key={player.rank} className="leaderboard-item">
              <div className={`rank rank-${player.rank}`}>#{player.rank}</div>
              <div className="avatar">{player.avatar}</div>
              <div className="player-info">
                <div className="player-name">{player.name}</div>
                <div className="player-stats">
                  Class {player.class} • {player.songs} songs • Avg: {player.avgScore}%
                </div>
              </div>
              <div className="player-score">{player.score} pts</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/songs" className="btn btn-primary">
            🎤 Start Singing to Climb the Charts!
          </Link>
        </div>
      </section>

      <footer>
        <p>© 2026 Sing2Learn — A School Singing Competition</p>
      </footer>
    </div>
  )
}
