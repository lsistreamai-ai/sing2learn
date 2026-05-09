import { useState } from 'react'
import Head from 'next/head'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [showCheckin, setShowCheckin] = useState(false)
  const [showGifts, setShowGifts] = useState(false)
  const [showSongModal, setShowSongModal] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedSong, setSelectedSong] = useState(null)
  const [flyingGift, setFlyingGift] = useState(null)
  const [giftsSent, setGiftsSent] = useState([])
  const [balance] = useState(500)
  
  const [currentLive, setCurrentLive] = useState({
    name: 'Emma S.',
    school: 'A Plus Education',
    song: 'Let It Go',
    emoji: '❄️',
    viewers: 124
  })

  const locations = [
    { id: 1, name: 'A Plus Education Centre', icon: '🏫', students: 45 },
    { id: 2, name: 'ABC Primary School', icon: '🎓', students: 52 },
    { id: 3, name: 'DEF International School', icon: '🌐', students: 38 },
    { id: 4, name: 'GHI Kindergarten', icon: '🌈', students: 28 },
    { id: 5, name: 'JKL Learning Centre', icon: '📚', students: 30 }
  ]

  const songs = [
    { id: 1, title: 'ABC Song', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '🔤' },
    { id: 2, title: 'Twinkle Twinkle', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '⭐' },
    { id: 3, title: 'Do Re Mi', artist: 'Sound of Music', difficulty: 'Medium', points: 200, emoji: '🎼' },
    { id: 4, title: 'Let It Go', artist: 'Frozen', difficulty: 'Medium', points: 250, emoji: '❄️' },
    { id: 5, title: 'Under the Sea', artist: 'Little Mermaid', difficulty: 'Medium', points: 220, emoji: '🐠' },
    { id: 6, title: 'Circle of Life', artist: 'Lion King', difficulty: 'Hard', points: 300, emoji: '🦁' }
  ]

  const gifts = [
    { name: 'Star', icon: '⭐', cost: 10 },
    { name: 'Heart', icon: '❤️', cost: 20 },
    { name: 'Rose', icon: '🌹', cost: 30 },
    { name: 'Crown', icon: '👑', cost: 50 },
    { name: 'Rocket', icon: '🚀', cost: 100 },
    { name: 'Fire', icon: '🔥', cost: 150 },
    { name: 'Rainbow', icon: '🌈', cost: 80 },
    { name: 'Trophy', icon: '🏆', cost: 200 }
  ]

  const leaderboard = [
    { rank: 1, name: 'Emma S.', score: 2450, avatar: '👧' },
    { rank: 2, name: 'Lucas T.', score: 2180, avatar: '👦' },
    { rank: 3, name: 'Sophie L.', score: 1950, avatar: '👧' },
    { rank: 4, name: 'Jayden W.', score: 1820, avatar: '👦' },
    { rank: 5, name: 'Chloe C.', score: 1750, avatar: '👧' }
  ]

  const sendGift = (gift) => {
    if (balance >= gift.cost) {
      setFlyingGift(gift)
      setGiftsSent(prev => [...prev, gift])
      setTimeout(() => setFlyingGift(null), 2000)
      setShowGifts(false)
    } else {
      alert('Not enough points!')
    }
  }

  const renderHome = () => (
    <div>
      {/* Header */}
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, background: 'linear-gradient(135deg, #FF4B6E, #FF6B8A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Sing2Learn
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            onClick={() => setShowCheckin(true)}
            style={{
              background: selectedLocation ? 'rgba(0,217,255,0.2)' : 'rgba(255,75,110,0.2)',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              color: selectedLocation ? '#00D9FF' : '#FF4B6E',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            📍 {selectedLocation?.name.split(' ')[0] || 'Check In'}
          </button>
          <div style={{
            background: 'rgba(255,215,0,0.2)',
            padding: '6px 12px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#FFD700'
          }}>
            ⭐ {balance}
          </div>
        </div>
      </div>

      {/* Live Now Section */}
      <div style={{ padding: '0 20px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{
            width: '8px',
            height: '8px',
            background: '#FF0000',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }} />
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#FF4B6E' }}>LIVE NOW</span>
        </div>

        <div style={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, #1a1a2e, #0f1419)',
          aspectRatio: '16/9',
          border: '1px solid rgba(255,75,110,0.3)'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,75,110,0.3), rgba(0,217,255,0.2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '8px' }}>{currentLive.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: '18px' }}>{currentLive.song}</div>
              <div style={{ color: '#8892A4', fontSize: '14px' }}>by {currentLive.name}</div>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: '#FF0000',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            🔴 LIVE
          </div>

          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(0,0,0,0.6)',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px'
          }}>
            👀 {currentLive.viewers + giftsSent.length}
          </div>

          {/* Flying Gift */}
          {flyingGift && (
            <div style={{
              position: 'absolute',
              bottom: '60px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '48px',
              animation: 'giftFly 2s ease-out forwards'
            }}>
              {flyingGift.icon}
            </div>
          )}

          {/* Gifts Display */}
          {giftsSent.length > 0 && (
            <div style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              display: 'flex',
              gap: '4px'
            }}>
              {giftsSent.slice(-5).map((g, i) => (
                <span key={i} style={{ fontSize: '20px' }}>{g.icon}</span>
              ))}
            </div>
          )}

          <button
            onClick={() => setShowGifts(true)}
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              background: 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '24px',
              color: 'white',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(255,75,110,0.4)'
            }}
          >
            🎁 Send Gift
          </button>
        </div>
      </div>

      {/* Songs Section */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600 }}>🎵 Songs</h2>
          <button 
            onClick={() => setActiveTab('songs')}
            style={{ background: 'none', border: 'none', color: '#00D9FF', fontSize: '14px', cursor: 'pointer' }}
          >
            See All →
          </button>
        </div>

        {songs.slice(0, 3).map(song => (
          <div
            key={song.id}
            onClick={() => {
              setSelectedSong(song)
              setShowSongModal(true)
            }}
            style={{
              display: 'flex',
              gap: '12px',
              padding: '12px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              marginBottom: '8px',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '12px',
              background: song.difficulty === 'Easy' 
                ? 'linear-gradient(135deg, #00D9FF, #00A8CC)'
                : song.difficulty === 'Medium'
                ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                : 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              {song.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, marginBottom: '2px' }}>{song.title}</div>
              <div style={{ color: '#8892A4', fontSize: '13px' }}>{song.artist}</div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '10px',
                  fontSize: '11px',
                  fontWeight: 600,
                  background: song.difficulty === 'Easy' 
                    ? 'rgba(0,217,255,0.2)'
                    : song.difficulty === 'Medium'
                    ? 'rgba(255,215,0,0.2)'
                    : 'rgba(255,75,110,0.2)',
                  color: song.difficulty === 'Easy' 
                    ? '#00D9FF'
                    : song.difficulty === 'Medium'
                    ? '#FFD700'
                    : '#FF4B6E'
                }}>
                  {song.difficulty}
                </span>
                <span style={{ color: '#FFD700', fontSize: '12px', fontWeight: 600 }}>⭐ {song.points}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSongs = () => (
    <div>
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>🎵 Choose a Song</h2>
        
        {!selectedLocation && (
          <div style={{
            background: 'rgba(255,75,110,0.2)',
            padding: '12px',
            borderRadius: '12px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span>📍</span>
            <span style={{ fontSize: '14px' }}>Check in at your school to start singing</span>
            <button
              onClick={() => setShowCheckin(true)}
              style={{
                marginLeft: 'auto',
                background: '#FF4B6E',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '16px',
                color: 'white',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Check In
            </button>
          </div>
        )}

        {songs.map(song => (
          <div
            key={song.id}
            onClick={() => {
              setSelectedSong(song)
              setShowSongModal(true)
            }}
            style={{
              display: 'flex',
              gap: '12px',
              padding: '12px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              marginBottom: '8px',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: song.difficulty === 'Easy' 
                ? 'linear-gradient(135deg, #00D9FF, #00A8CC)'
                : song.difficulty === 'Medium'
                ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                : 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px'
            }}>
              {song.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, marginBottom: '2px', fontSize: '16px' }}>{song.title}</div>
              <div style={{ color: '#8892A4', fontSize: '13px' }}>{song.artist}</div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '10px',
                  fontSize: '11px',
                  fontWeight: 600,
                  background: song.difficulty === 'Easy' 
                    ? 'rgba(0,217,255,0.2)'
                    : song.difficulty === 'Medium'
                    ? 'rgba(255,215,0,0.2)'
                    : 'rgba(255,75,110,0.2)',
                  color: song.difficulty === 'Easy' 
                    ? '#00D9FF'
                    : song.difficulty === 'Medium'
                    ? '#FFD700'
                    : '#FF4B6E'
                }}>
                  {song.difficulty}
                </span>
                <span style={{ color: '#FFD700', fontSize: '12px', fontWeight: 600 }}>⭐ {song.points} pts</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderLive = () => (
    <div>
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>🔴 Live Performances</h2>
      </div>
      
      <div style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        margin: '0 20px',
        background: 'linear-gradient(145deg, #1a1a2e, #0f1419)',
        aspectRatio: '9/16',
        maxHeight: '500px',
        border: '2px solid rgba(255,75,110,0.4)'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255,75,110,0.4), rgba(0,217,255,0.3))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '12px' }}>{currentLive.emoji}</div>
            <div style={{ fontWeight: 700, fontSize: '24px' }}>{currentLive.song}</div>
            <div style={{ color: '#8892A4', fontSize: '16px', marginTop: '4px' }}>by {currentLive.name}</div>
            <div style={{ color: '#00D9FF', fontSize: '14px', marginTop: '4px' }}>🏫 {currentLive.school}</div>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          background: '#FF0000',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 700
        }}>
          🔴 LIVE
        </div>

        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'rgba(0,0,0,0.6)',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '13px'
        }}>
          👀 {currentLive.viewers + giftsSent.length}
        </div>

        {flyingGift && (
          <div style={{
            position: 'absolute',
            bottom: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '64px',
            animation: 'giftFly 2s ease-out forwards'
          }}>
            {flyingGift.icon}
          </div>
        )}

        {giftsSent.length > 0 && (
          <div style={{
            position: 'absolute',
            bottom: '100px',
            left: '16px',
            display: 'flex',
            gap: '4px'
          }}>
            {giftsSent.slice(-6).map((g, i) => (
              <span key={i} style={{ fontSize: '28px' }}>{g.icon}</span>
            ))}
          </div>
        )}

        <button
          onClick={() => setShowGifts(true)}
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            background: 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
            border: 'none',
            padding: '14px 28px',
            borderRadius: '30px',
            color: 'white',
            fontWeight: 700,
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(255,75,110,0.5)'
          }}
        >
          🎁 Send Gift
        </button>
      </div>
    </div>
  )

  const renderLeaderboard = () => (
    <div>
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>🏆 Leaderboard</h2>
        
        {leaderboard.map(player => (
          <div
            key={player.rank}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px',
              background: player.rank <= 3 
                ? 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05))'
                : 'rgba(255,255,255,0.05)',
              border: player.rank <= 3 
                ? '1px solid rgba(255,215,0,0.3)'
                : '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              marginBottom: '8px'
            }}
          >
            <div style={{
              fontSize: '20px',
              fontWeight: 800,
              width: '32px',
              textAlign: 'center',
              color: player.rank === 1 ? '#FFD700' : player.rank === 2 ? '#C0C0C0' : player.rank === 3 ? '#CD7F32' : '#8892A4'
            }}>
              {player.rank <= 3 ? ['🥇', '🥈', '🥉'][player.rank - 1] : `#${player.rank}`}
            </div>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              {player.avatar}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '15px' }}>{player.name}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#FFD700', fontWeight: 700 }}>{player.score} pts</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <Head>
        <title>Sing2Learn - School Singing Competition</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>

      <div className="app-container">
        <div className="main-content">
          {activeTab === 'home' && renderHome()}
          {activeTab === 'songs' && renderSongs()}
          {activeTab === 'live' && renderLive()}
          {activeTab === 'leaderboard' && renderLeaderboard()}
        </div>

        {/* Bottom Navigation */}
        <nav className="bottom-nav">
          <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
            <span className="icon">🏠</span>
            <span>Home</span>
          </button>
          <button className={`nav-item ${activeTab === 'songs' ? 'active' : ''}`} onClick={() => setActiveTab('songs')}>
            <span className="icon">🎵</span>
            <span>Songs</span>
          </button>
          <button className={`nav-item ${activeTab === 'live' ? 'active' : ''}`} onClick={() => setActiveTab('live')}>
            <span className="icon">📺</span>
            <span>Live</span>
          </button>
          <button className={`nav-item ${activeTab === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveTab('leaderboard')}>
            <span className="icon">🏆</span>
            <span>Ranks</span>
          </button>
        </nav>

        {/* Check-in Modal */}
        <div 
          className={`modal-overlay ${showCheckin ? 'visible' : ''}`}
          onClick={() => setShowCheckin(false)}
        />
        <div className={`bottom-sheet ${showCheckin ? 'visible' : ''}`}>
          <div className="sheet-handle" />
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>📍 Check In</h3>
          <p style={{ color: '#8892A4', fontSize: '14px', marginBottom: '16px' }}>Select your school</p>
          
          {locations.map(loc => (
            <div
              key={loc.id}
              className={`location-item ${selectedLocation?.id === loc.id ? 'selected' : ''}`}
              onClick={() => {
                setSelectedLocation(loc)
                setShowCheckin(false)
              }}
            >
              <span style={{ fontSize: '24px' }}>{loc.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>{loc.name}</div>
                <div style={{ color: '#8892A4', fontSize: '12px' }}>{loc.students} students</div>
              </div>
            </div>
          ))}
        </div>

        {/* Gift Modal */}
        <div 
          className={`modal-overlay ${showGifts ? 'visible' : ''}`}
          onClick={() => setShowGifts(false)}
        />
        <div className={`bottom-sheet ${showGifts ? 'visible' : ''}`}>
          <div className="sheet-handle" />
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>🎁 Send a Gift</h3>
          <p style={{ color: '#FFD700', fontSize: '14px', marginBottom: '16px' }}>Balance: ⭐ {balance}</p>
          
          <div className="gift-grid">
            {gifts.map(gift => (
              <div
                key={gift.name}
                className="gift-item"
                onClick={() => sendGift(gift)}
              >
                <span className="gift-icon">{gift.icon}</span>
                <span className="gift-name">{gift.name}</span>
                <span className="gift-cost">⭐ {gift.cost}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Song Detail Modal */}
        <div 
          className={`modal-overlay ${showSongModal ? 'visible' : ''}`}
          onClick={() => setShowSongModal(false)}
        />
        <div className={`bottom-sheet ${showSongModal ? 'visible' : ''}`}>
          <div className="sheet-handle" />
          {selectedSong && (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '100px',
                height: '100px',
                margin: '0 auto 16px',
                borderRadius: '20px',
                background: selectedSong.difficulty === 'Easy' 
                  ? 'linear-gradient(135deg, #00D9FF, #00A8CC)'
                  : selectedSong.difficulty === 'Medium'
                  ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                  : 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px'
              }}>
                {selectedSong.emoji}
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700 }}>{selectedSong.title}</h3>
              <p style={{ color: '#8892A4' }}>{selectedSong.artist}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '20px 0' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', color: '#8892A4' }}>Difficulty</div>
                  <div style={{ fontWeight: 600, color: selectedSong.difficulty === 'Easy' ? '#00D9FF' : selectedSong.difficulty === 'Medium' ? '#FFD700' : '#FF4B6E' }}>
                    {selectedSong.difficulty}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', color: '#8892A4' }}>Points</div>
                  <div style={{ fontWeight: 600, color: '#FFD700' }}>⭐ {selectedSong.points}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  if (selectedLocation) {
                    alert('🎤 Starting performance...\n\nFeature coming soon!')
                  } else {
                    setShowSongModal(false)
                    setShowCheckin(true)
                  }
                }}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: selectedLocation 
                    ? 'linear-gradient(135deg, #FF4B6E, #FF6B8A)'
                    : 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '30px',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: selectedLocation ? '0 4px 20px rgba(255,75,110,0.4)' : 'none'
                }}
              >
                {selectedLocation ? '🎤 Start Singing' : '📍 Check In First'}
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes giftFly {
          0% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-200px) scale(1.5); }
        }
      `}</style>
    </>
  )
}
