import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [selectedSchool, setSelectedSchool] = useState('Select Your School')
  const [showGiftPanel, setShowGiftPanel] = useState(false)

  const schools = [
    'A Plus Education Centre',
    'ABC Primary School',
    'DEF International School',
    'GHI Kindergarten',
    'JKL Learning Centre'
  ]

  const liveNow = [
    { name: 'Emma S.', school: 'A Plus Education', song: 'Let It Go', viewers: 24, avatar: '👧' },
    { name: 'Lucas T.', school: 'DEF International', song: 'Do Re Mi', viewers: 18, avatar: '👦' }
  ]

  const gifts = [
    { name: 'Star', icon: '⭐', cost: 10 },
    { name: 'Heart', icon: '❤️', cost: 20 },
    { name: 'Flower', icon: '🌸', cost: 30 },
    { name: 'Trophy', icon: '🏆', cost: 50 },
    { name: 'Crown', icon: '👑', cost: 100 },
    { name: 'Fireworks', icon: '🎆', cost: 200 }
  ]

  const featuredSongs = [
    { title: 'ABC Song', difficulty: 'Easy', points: 100, emoji: '🔤' },
    { title: 'Twinkle Twinkle', difficulty: 'Easy', points: 100, emoji: '⭐' },
    { title: 'Do Re Mi', difficulty: 'Medium', points: 200, emoji: '🎼' },
    { title: 'Let It Go', difficulty: 'Medium', points: 250, emoji: '❄️' }
  ]

  const topPerformers = [
    { rank: 1, name: 'Emma S.', score: 2450, avatar: '👧' },
    { rank: 2, name: 'Lucas T.', score: 2180, avatar: '👦' },
    { rank: 3, name: 'Sophie L.', score: 1950, avatar: '👧' }
  ]

  return (
    <div>
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
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {/* Location Button */}
          <button 
            onClick={() => setShowLocationModal(true)}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '20px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem'
            }}
          >
            📍 {selectedSchool}
          </button>
          
          <div style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <Link href="/songs" style={{ color: '#c8d2dc', textDecoration: 'none' }}>Songs</Link>
            <Link href="/live" style={{ color: '#c8d2dc', textDecoration: 'none' }}>Live</Link>
            <Link href="/leaderboard" style={{ color: '#c8d2dc', textDecoration: 'none' }}>Leaderboard</Link>
          </div>
        </div>
      </nav>

      {/* Location Modal */}
      {showLocationModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            background: '#1a1a2e',
            padding: '2rem',
            borderRadius: '20px',
            width: '400px',
            maxWidth: '90vw'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ color: '#fff' }}>📍 Check In</h3>
              <button onClick={() => setShowLocationModal(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
            </div>
            <p style={{ color: '#a6b2bf', marginBottom: '1.5rem' }}>Select your school to check in</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {schools.map((school, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedSchool(school)
                    setShowLocationModal(false)
                  }}
                  style={{
                    background: selectedSchool === school ? 'linear-gradient(135deg, #FF6B6B, #FFC857)' : 'rgba(255,255,255,0.1)',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: '12px',
                    color: '#fff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s'
                  }}
                >
                  🏫 {school}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0F0F1A 0%, #1a1a2e 100%)'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle at 30% 50%, rgba(255, 107, 107, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(78, 205, 196, 0.15) 0%, transparent 50%)',
          animation: 'float 20s ease-in-out infinite'
        }} 
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 800,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #FF6B6B 0%, #FFC857 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🎤 Sing2Learn
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#a6b2bf', marginBottom: '2rem' }}>
            School Singing Competition
          </p>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', color: '#fff' }}>
            Sing, earn points, receive gifts from your fans! Check in at your school and compete with students across Hong Kong.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/songs" className="btn btn-primary" style={{
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #FF6B6B 0%, #FFC857 100%)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              boxShadow: '0 4px 20px rgba(255, 107, 107, 0.4)'
            }}>
              🎶 Pick a Song
            </Link>
            <Link href="/live" className="btn btn-secondary" style={{
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              background: 'transparent',
              color: '#4ECDC4',
              border: '2px solid #4ECDC4',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              📺 Watch Live
            </Link>
          </div>
        </div>
      </section>

      {/* Live Now Section */}
      <section style={{ padding: '4rem 2rem', background: '#0F0F1A' }}>
        <h2 style={{
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: '3px',
          color: '#FF6B6B',
          marginBottom: '2rem',
          textTransform: 'uppercase'
        }}>
          🔴 Live Now
        </h2>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {liveNow.map((performer, i) => (
            <div key={i} style={{
              background: 'linear-gradient(145deg, #1a1a2e, #0f1419)',
              borderRadius: '20px',
              padding: '1.5rem',
              flex: '1 1 300px',
              maxWidth: '400px',
              border: '2px solid rgba(255, 107, 107, 0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF6B6B, #FFC857)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem'
                }}>
                  {performer.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{performer.name}</div>
                  <div style={{ color: '#a6b2bf', fontSize: '0.9rem' }}>{performer.school}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#FF6B6B' }}>
                  🔴 LIVE
                </div>
              </div>

              <div style={{
                background: '#000',
                borderRadius: '12px',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                fontSize: '3rem',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                🎵 {performer.song}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#a6b2bf' }}>👀 {performer.viewers} watching</span>
                <button
                  onClick={() => setShowGiftPanel(true)}
                  style={{
                    background: 'linear-gradient(135deg, #FF6B6B, #FFC857)',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  🎁 Send Gift
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gift Panel Modal */}
      {showGiftPanel && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.9)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            background: '#1a1a2e',
            padding: '2rem',
            borderRadius: '20px 20px 0 0',
            width: '100%',
            maxWidth: '500px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#fff' }}>🎁 Send a Gift</h3>
              <button onClick={() => setShowGiftPanel(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}>
              {gifts.map((gift, i) => (
                <button
                  key={i}
                  onClick={() => {
                    alert(`Sent ${gift.icon} ${gift.name}!`)
                    setShowGiftPanel(false)
                  }}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '2px solid rgba(255,107,107,0.3)',
                    borderRadius: '15px',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{gift.icon}</div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>{gift.name}</div>
                  <div style={{ color: '#FFC857', fontSize: '0.9rem' }}>⭐ {gift.cost}</div>
                </button>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#a6b2bf' }}>
              Your balance: ⭐ 500 points
            </div>
          </div>
        </div>
      )}

      {/* Songs Section */}
      <section style={{ padding: '4rem 2rem', background: '#09091c' }}>
        <h2 style={{
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: '3px',
          color: '#4ECDC4',
          marginBottom: '2rem',
          textTransform: 'uppercase'
        }}>
          🎵 Featured Songs
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {featuredSongs.map((song, i) => (
            <div key={i} style={{
              background: 'linear-gradient(145deg, #1a1a2e, #0f1419)',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid rgba(78, 205, 196, 0.3)',
              transition: 'transform 0.3s'
            }}>
              <div style={{
                height: '120px',
                background: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                {song.emoji}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{song.title}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <span style={{
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    background: song.difficulty === 'Easy' ? '#4ECDC4' : '#FFE66D',
                    color: '#000'
                  }}>
                    {song.difficulty}
                  </span>
                  <span style={{ color: '#FFC857' }}>⭐ {song.points}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/songs" style={{
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600
          }}>
            View All Songs →
          </Link>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section style={{ padding: '4rem 2rem', background: '#0F0F1A' }}>
        <h2 style={{
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: '3px',
          color: '#FFC857',
          marginBottom: '2rem',
          textTransform: 'uppercase'
        }}>
          🏆 Top Performers
        </h2>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {topPerformers.map((player, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              background: '#1a1a2e',
              padding: '1rem 1.5rem',
              borderRadius: '15px',
              marginBottom: '1rem',
              border: '2px solid transparent'
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                width: '50px',
                color: i === 0 ? '#FFD700' : i === 1 ? '#C0C0C0' : '#CD7F32'
              }}>
                #{player.rank}
              </div>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF6B6B, #FFC857)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                {player.avatar}
              </div>
              <div style={{ flex: 1, fontWeight: 600 }}>{player.name}</div>
              <div style={{ color: '#FFC857', fontWeight: 700 }}>{player.score} pts</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/leaderboard" style={{
            color: '#FFC857',
            textDecoration: 'none',
            fontWeight: 600
          }}>
            View Full Leaderboard →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#09091c',
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 107, 107, 0.2)'
      }}>
        <p style={{ color: '#a6b2bf' }}>© 2026 Sing2Learn — School Singing Competition</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
          Powered by Language Services International (PET) Ltd.
        </p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-5%, 5%) rotate(5deg); }
        }
      `}</style>
    </div>
  )
}
