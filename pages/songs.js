import { useState } from 'react'
import Link from 'next/link'

export default function Songs() {
  const [filter, setFilter] = useState('all')
  const [selectedSong, setSelectedSong] = useState(null)
  const [checkedIn, setCheckedIn] = useState(false)

  const songs = [
    { id: 1, title: 'ABC Song', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '🔤', category: 'educational', duration: '1:30' },
    { id: 2, title: 'Twinkle Twinkle Little Star', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '⭐', category: 'nursery', duration: '1:45' },
    { id: 3, title: 'Happy Birthday', artist: 'Traditional', difficulty: 'Easy', points: 120, emoji: '🎂', category: 'celebration', duration: '0:45' },
    { id: 4, title: 'Do Re Mi', artist: 'Sound of Music', difficulty: 'Medium', points: 200, emoji: '🎼', category: 'musical', duration: '2:30' },
    { id: 5, title: 'Let It Go', artist: 'Frozen', difficulty: 'Medium', points: 250, emoji: '❄️', category: 'disney', duration: '3:45' },
    { id: 6, title: 'We Are the World', artist: 'USA for Africa', difficulty: 'Hard', points: 350, emoji: '🌍', category: 'inspirational', duration: '4:15' },
    { id: 7, title: 'Head, Shoulders, Knees', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '🎭', category: 'educational', duration: '1:20' },
    { id: 8, title: 'The Wheels on the Bus', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '🚌', category: 'nursery', duration: '2:00' },
    { id: 9, title: 'Under the Sea', artist: 'Little Mermaid', difficulty: 'Medium', points: 220, emoji: '🐠', category: 'disney', duration: '3:15' },
    { id: 10, title: 'Tomorrow', artist: 'Annie', difficulty: 'Medium', points: 230, emoji: '☀️', category: 'musical', duration: '2:50' },
    { id: 11, title: 'Circle of Life', artist: 'Lion King', difficulty: 'Hard', points: 300, emoji: '🦁', category: 'disney', duration: '4:00' },
    { id: 12, title: 'A Whole New World', artist: 'Aladdin', difficulty: 'Hard', points: 320, emoji: '🕌', category: 'disney', duration: '3:30' }
  ]

  const filteredSongs = filter === 'all' 
    ? songs 
    : songs.filter(s => s.difficulty.toLowerCase() === filter)

  const startSinging = () => {
    alert(`🎤 Now singing: ${selectedSong.title}\n\nPoints will be awarded based on your performance!\n\nFeature coming soon...`)
    setSelectedSong(null)
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
          <Link href="/songs" style={{ color: '#fff', textDecoration: 'none' }}>Songs</Link>
          <Link href="/live" style={{ color: '#c8d2dc', textDecoration: 'none' }}>Live</Link>
          <Link href="/leaderboard" style={{ color: '#c8d2dc', textDecoration: 'none' }}>Leaderboard</Link>
        </div>
      </nav>

      {/* Check-in Prompt */}
      {!checkedIn && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, #FF6B6B, #FFC857)',
          padding: '1rem 2rem',
          borderRadius: '50px',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: '0 4px 20px rgba(255, 107, 107, 0.4)'
        }}>
          <span>📍 Please check in at your school to start singing</span>
          <button
            onClick={() => setCheckedIn(true)}
            style={{
              background: '#fff',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Check In
          </button>
        </div>
      )}

      {/* Main Content */}
      <div style={{ paddingTop: checkedIn ? '140px' : '80px', padding: checkedIn ? '140px 2rem 2rem' : '80px 2rem 2rem' }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #4ECDC4, #44A08D)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🎵 Song Library
        </h1>
        <p style={{ textAlign: 'center', color: '#a6b2bf', marginBottom: '2rem' }}>
          Choose a song to sing and earn points!
        </p>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['all', 'easy', 'medium', 'hard'].map((diff) => (
            <button
              key={diff}
              onClick={() => setFilter(diff)}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                background: filter === diff 
                  ? 'linear-gradient(135deg, #FF6B6B, #FFC857)' 
                  : 'rgba(255,255,255,0.1)',
                color: '#fff',
                transition: 'all 0.3s'
              }}
            >
              {diff.charAt(0).toUpperCase() + diff.slice(1)}
            </button>
          ))}
        </div>

        {/* Songs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {filteredSongs.map((song) => (
            <div
              key={song.id}
              onClick={() => setSelectedSong(song)}
              style={{
                background: 'linear-gradient(145deg, #1a1a2e, #0f1419)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: `2px solid ${selectedSong?.id === song.id ? '#FF6B6B' : 'rgba(78, 205, 196, 0.3)'}`,
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {/* Song Cover */}
              <div style={{
                height: '150px',
                background: song.difficulty === 'Easy' 
                  ? 'linear-gradient(135deg, #4ECDC4, #44A08D)'
                  : song.difficulty === 'Medium'
                  ? 'linear-gradient(135deg, #FFE66D, #FFA500)'
                  : 'linear-gradient(135deg, #FF6B6B, #FF4757)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{ fontSize: '4rem' }}>{song.emoji}</div>
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(0,0,0,0.5)',
                  padding: '5px 10px',
                  borderRadius: '10px',
                  fontSize: '0.8rem'
                }}>
                  {song.duration}
                </div>
              </div>

              {/* Song Info */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.3rem' }}>{song.title}</div>
                <div style={{ color: '#a6b2bf', fontSize: '0.9rem', marginBottom: '1rem' }}>{song.artist}</div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    background: song.difficulty === 'Easy' 
                      ? '#4ECDC4'
                      : song.difficulty === 'Medium'
                      ? '#FFE66D'
                      : '#FF6B6B',
                    color: song.difficulty === 'Hard' ? '#fff' : '#000'
                  }}>
                    {song.difficulty}
                  </span>
                  <span style={{ color: '#FFC857', fontWeight: 700 }}>⭐ {song.points}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Song Detail Modal */}
      {selectedSong && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '1rem'
        }}>
          <div style={{
            background: '#1a1a2e',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '500px',
            overflow: 'hidden'
          }}>
            {/* Song Header */}
            <div style={{
              height: '200px',
              background: selectedSong.difficulty === 'Easy' 
                ? 'linear-gradient(135deg, #4ECDC4, #44A08D)'
                : selectedSong.difficulty === 'Medium'
                ? 'linear-gradient(135deg, #FFE66D, #FFA500)'
                : 'linear-gradient(135deg, #FF6B6B, #FF4757)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{ fontSize: '6rem' }}>{selectedSong.emoji}</div>
              <button
                onClick={() => setSelectedSong(null)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  color: '#fff',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            </div>

            {/* Song Details */}
            <div style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.3rem' }}>{selectedSong.title}</h2>
              <p style={{ color: '#a6b2bf', marginBottom: '1.5rem' }}>{selectedSong.artist}</p>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '1rem',
                  borderRadius: '12px',
                  flex: 1,
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#a6b2bf' }}>Duration</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>{selectedSong.duration}</div>
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '1rem',
                  borderRadius: '12px',
                  flex: 1,
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#a6b2bf' }}>Difficulty</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>{selectedSong.difficulty}</div>
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '1rem',
                  borderRadius: '12px',
                  flex: 1,
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#a6b2bf' }}>Points</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#FFC857' }}>⭐ {selectedSong.points}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => setSelectedSong(null)}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: 'transparent',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={startSinging}
                  disabled={!checkedIn}
                  style={{
                    flex: 2,
                    padding: '1rem',
                    borderRadius: '12px',
                    border: 'none',
                    background: checkedIn 
                      ? 'linear-gradient(135deg, #FF6B6B, #FFC857)'
                      : 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    cursor: checkedIn ? 'pointer' : 'not-allowed',
                    fontWeight: 700,
                    fontSize: '1.1rem'
                  }}
                >
                  {checkedIn ? '🎤 Start Singing' : '📍 Check In First'}
                </button>
              </div>

              {!checkedIn && (
                <p style={{ textAlign: 'center', color: '#FF6B6B', marginTop: '1rem', fontSize: '0.9rem' }}>
                  You need to check in at your school before singing
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
