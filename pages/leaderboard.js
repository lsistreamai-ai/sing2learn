import { useState } from 'react'
import Link from 'next/link'

export default function Leaderboard() {
  const [viewMode, setViewMode] = useState('students') // 'students' or 'schools'

  const topStudents = [
    { rank: 1, name: 'Emma S.', school: 'A Plus Education', songs: 12, avgScore: 95, score: 2450, avatar: '👧', gifts: 87 },
    { rank: 2, name: 'Lucas T.', school: 'DEF International', songs: 10, avgScore: 92, score: 2180, avatar: '👦', gifts: 64 },
    { rank: 3, name: 'Sophie L.', school: 'A Plus Education', songs: 11, avgScore: 88, score: 1950, avatar: '👧', gifts: 52 },
    { rank: 4, name: 'Jayden W.', school: 'ABC Primary', songs: 8, avgScore: 91, score: 1820, avatar: '👦', gifts: 48 },
    { rank: 5, name: 'Chloe C.', school: 'JKL Learning', songs: 9, avgScore: 87, score: 1750, avatar: '👧', gifts: 41 },
    { rank: 6, name: 'Oscar M.', school: 'DEF International', songs: 7, avgScore: 90, score: 1680, avatar: '👦', gifts: 38 },
    { rank: 7, name: 'Mia K.', school: 'A Plus Education', songs: 8, avgScore: 86, score: 1590, avatar: '👧', gifts: 35 },
    { rank: 8, name: 'Ethan P.', school: 'ABC Primary', songs: 6, avgScore: 89, score: 1450, avatar: '👦', gifts: 29 },
    { rank: 9, name: 'Ava R.', school: 'JKL Learning', songs: 7, avgScore: 85, score: 1320, avatar: '👧', gifts: 25 },
    { rank: 10, name: 'Noah H.', school: 'DEF International', songs: 5, avgScore: 88, score: 1180, avatar: '👦', gifts: 22 }
  ]

  const topSchools = [
    { rank: 1, name: 'A Plus Education', students: 45, totalScore: 15000, badges: 12 },
    { rank: 2, name: 'DEF International', students: 38, totalScore: 12500, badges: 9 },
    { rank: 3, name: 'ABC Primary', students: 52, totalScore: 11200, badges: 7 },
    { rank: 4, name: 'JKL Learning Centre', students: 30, totalScore: 8900, badges: 5 },
    { rank: 5, name: 'GHI Kindergarten', students: 28, totalScore: 7500, badges: 4 }
  ]

  const getRankStyle = (rank) => {
    if (rank === 1) return { color: '#FFD700', background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,215,0,0.1))' }
    if (rank === 2) return { color: '#C0C0C0', background: 'linear-gradient(135deg, rgba(192,192,192,0.2), rgba(192,192,192,0.1))' }
    if (rank === 3) return { color: '#CD7F32', background: 'linear-gradient(135deg, rgba(205,127,50,0.2), rgba(205,127,50,0.1))' }
    return {}
  }

  return (
    <div style={{ background: '#0F0F1A', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(15, 15, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255, 107, 107, 0.2)'
      }}>
        <div style={{ fontSize: '1.8rem', fontWeight: 800, background: 'linear-gradient(135deg, #FF6B6B 0%, #FFC857 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Sing2Learn
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/" style={{ color: '#c8d2dc', textDecoration: 'none' }}>Home</Link>
          <Link href="/songs" style={{ color: '#c8d2dc', textDecoration: 'none' }}>Songs</Link>
          <Link href="/live" style={{ color: '#c8d2dc', textDecoration: 'none' }}>Live</Link>
          <Link href="/leaderboard" style={{ color: '#fff', textDecoration: 'none' }}>Leaderboard</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ paddingTop: '100px', padding: '100px 2rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #FFC857, #FF6B6B)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🏆 Leaderboard
        </h1>
        <p style={{ textAlign: 'center', color: '#a6b2bf', marginBottom: '2rem' }}>
          See who's on top!
        </p>

        {/* Toggle View */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <button
            onClick={() => setViewMode('students')}
            style={{
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              background: viewMode === 'students' 
                ? 'linear-gradient(135deg, #FF6B6B, #FFC857)' 
                : 'rgba(255,255,255,0.1)',
              color: '#fff'
            }}
          >
            👤 Top Students
          </button>
          <button
            onClick={() => setViewMode('schools')}
            style={{
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              background: viewMode === 'schools' 
                ? 'linear-gradient(135deg, #4ECDC4, #44A08D)' 
                : 'rgba(255,255,255,0.1)',
              color: '#fff'
            }}
          >
            🏫 Top Schools
          </button>
        </div>

        {/* Leaderboard List */}
        {viewMode === 'students' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {topStudents.map((player) => (
              <div
                key={player.rank}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  background: '#1a1a2e',
                  padding: '1.2rem 1.5rem',
                  borderRadius: '15px',
                  ...getRankStyle(player.rank)
                }}
              >
                {/* Rank */}
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  width: '50px',
                  textAlign: 'center',
                  color: player.rank <= 3 ? getRankStyle(player.rank).color : '#a6b2bf'
                }}>
                  {player.rank <= 3 ? ['🥇', '🥈', '🥉'][player.rank - 1] : `#${player.rank}`}
                </div>

                {/* Avatar */}
                <div style={{
                  width: '55px',
                  height: '55px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF6B6B, #FFC857)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem'
                }}>
                  {player.avatar}
                </div>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem' }}>{player.name}</div>
                  <div style={{ color: '#a6b2bf', fontSize: '0.85rem' }}>
                    🏫 {player.school} • {player.songs} songs • Avg: {player.avgScore}%
                  </div>
                </div>

                {/* Score & Gifts */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#FFC857', fontWeight: 700, fontSize: '1.2rem' }}>{player.score} pts</div>
                  <div style={{ color: '#FF6B6B', fontSize: '0.85rem' }}>🎁 {player.gifts} gifts</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {topSchools.map((school) => (
              <div
                key={school.rank}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  background: '#1a1a2e',
                  padding: '1.2rem 1.5rem',
                  borderRadius: '15px',
                  ...getRankStyle(school.rank)
                }}
              >
                {/* Rank */}
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  width: '50px',
                  textAlign: 'center',
                  color: school.rank <= 3 ? getRankStyle(school.rank).color : '#a6b2bf'
                }}>
                  {school.rank <= 3 ? ['🥇', '🥈', '🥉'][school.rank - 1] : `#${school.rank}`}
                </div>

                {/* School Icon */}
                <div style={{
                  width: '55px',
                  height: '55px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #4ECDC4, #44A08D)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem'
                }}>
                  🏫
                </div>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem' }}>{school.name}</div>
                  <div style={{ color: '#a6b2bf', fontSize: '0.85rem' }}>
                    👥 {school.students} students • 🏅 {school.badges} badges
                  </div>
                </div>

                {/* Total Score */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#4ECDC4', fontWeight: 700, fontSize: '1.2rem' }}>{school.totalScore.toLocaleString()} pts</div>
                  <div style={{ color: '#a6b2bf', fontSize: '0.85rem' }}>total points</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            href="/songs"
            style={{
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #FF6B6B, #FFC857)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            🎤 Start Singing to Climb the Charts!
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: '#09091c',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 107, 107, 0.2)'
      }}>
        <p style={{ color: '#a6b2bf' }}>© 2026 Sing2Learn — School Singing Competition</p>
      </footer>
    </div>
  )
}
