import { useState, useEffect } from 'react'
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
  const [balance, setBalance] = useState(500)
  const [isSinging, setIsSinging] = useState(false)
  const [liveViewers, setLiveViewers] = useState(124)
  
  const [livePerformers] = useState([
    { id: 1, name: 'Emma S.', school: 'A Plus Education', song: 'Let It Go', emoji: '❄️', viewers: 124 },
    { id: 2, name: 'Lucas T.', school: 'DEF International', song: 'Do Re Mi', emoji: '🎼', viewers: 89 }
  ])

  const [currentLive, setCurrentLive] = useState(livePerformers[0])

  const locations = [
    { id: 1, name: 'A Plus Education Centre', icon: '🏫', students: 45, distance: '0.5 km' },
    { id: 2, name: 'ABC Primary School', icon: '🎓', students: 52, distance: '1.2 km' },
    { id: 3, name: 'DEF International School', icon: '🌐', students: 38, distance: '2.1 km' },
    { id: 4, name: 'GHI Kindergarten', icon: '🌈', students: 28, distance: '3.5 km' },
    { id: 5, name: 'JKL Learning Centre', icon: '📚', students: 30, distance: '4.0 km' }
  ]

  const songs = [
    { id: 1, title: 'ABC Song', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '🔤', duration: '1:30' },
    { id: 2, title: 'Twinkle Twinkle Little Star', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '⭐', duration: '1:45' },
    { id: 3, title: 'Do Re Mi', artist: 'Sound of Music', difficulty: 'Medium', points: 200, emoji: '🎼', duration: '2:30' },
    { id: 4, title: 'Let It Go', artist: 'Frozen', difficulty: 'Medium', points: 250, emoji: '❄️', duration: '3:45' },
    { id: 5, title: 'Under the Sea', artist: 'Little Mermaid', difficulty: 'Medium', points: 220, emoji: '🐠', duration: '3:15' },
    { id: 6, title: 'Circle of Life', artist: 'Lion King', difficulty: 'Hard', points: 300, emoji: '🦁', duration: '4:00' },
    { id: 7, title: 'A Whole New World', artist: 'Aladdin', difficulty: 'Hard', points: 320, emoji: '🕌', duration: '3:30' },
    { id: 8, title: 'We Are the World', artist: 'USA for Africa', difficulty: 'Hard', points: 350, emoji: '🌍', duration: '4:15' }
  ]

  const gifts = [
    { name: 'Star', icon: '⭐', cost: 10, popular: false },
    { name: 'Heart', icon: '❤️', cost: 20, popular: false },
    { name: 'Rose', icon: '🌹', cost: 30, popular: true },
    { name: 'Flower', icon: '🌸', cost: 40, popular: false },
    { name: 'Crown', icon: '👑', cost: 50, popular: true },
    { name: 'Trophy', icon: '🏆', cost: 80, popular: false },
    { name: 'Rocket', icon: '🚀', cost: 100, popular: true },
    { name: 'Fireworks', icon: '🎆', cost: 150, popular: false },
    { name: 'Diamond', icon: '💎', cost: 200, popular: true }
  ]

  const leaderboard = [
    { rank: 1, name: 'Emma S.', school: 'A Plus', score: 2450, songs: 12, gifts: 87 },
    { rank: 2, name: 'Lucas T.', school: 'DEF Int\'l', score: 2180, songs: 10, gifts: 64 },
    { rank: 3, name: 'Sophie L.', school: 'A Plus', score: 1950, songs: 11, gifts: 52 },
    { rank: 4, name: 'Jayden W.', school: 'ABC Pri', score: 1820, songs: 8, gifts: 48 },
    { rank: 5, name: 'Chloe C.', school: 'JKL', score: 1750, songs: 9, gifts: 41 }
  ]

  // Simulate live viewer fluctuation
  useEffect(() => {
    if (activeTab === 'live') {
      const interval = setInterval(() => {
        setLiveViewers(prev => {
          const change = Math.floor(Math.random() * 5) - 2
          return Math.max(50, prev + change)
        })
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [activeTab])

  const sendGift = (gift) => {
    if (balance >= gift.cost) {
      setBalance(prev => prev - gift.cost)
      setFlyingGift(gift)
      setGiftsSent(prev => [...prev, gift])
      setTimeout(() => setFlyingGift(null), 2000)
      setShowGifts(false)
    } else {
      alert('Not enough points! Earn more by singing.')
    }
  }

  const startSinging = () => {
    if (!selectedLocation) {
      setShowSongModal(false)
      setShowCheckin(true)
      return
    }
    setIsSinging(true)
    setActiveTab('live')
    setCurrentLive({
      id: 'me',
      name: 'You',
      school: selectedLocation.name,
      song: selectedSong.title,
      emoji: selectedSong.emoji,
      viewers: 0
    })
    setShowSongModal(false)
  }

  const renderHome = () => (
    <div>
      {/* Header */}
      <div style={{ 
        padding: '20px 16px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(255,75,110,0.1) 0%, transparent 100%)'
      }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, margin: 0, color: '#fff' }}>Sing2Learn</h1>
          <p style={{ fontSize: '12px', color: '#8892A4', margin: '2px 0 0 0' }}>School Singing Competition</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button 
            onClick={() => setShowCheckin(true)}
            style={{
              background: selectedLocation ? 'linear-gradient(135deg, #00D9FF, #00A8CC)' : 'rgba(255,75,110,0.2)',
              border: 'none',
              padding: '8px 14px',
              borderRadius: '20px',
              color: '#fff',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            📍 {selectedLocation?.name.split(' ')[0] || 'Check In'}
          </button>
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.3), rgba(255,165,0,0.2))',
            padding: '8px 14px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '14px',
            fontWeight: 700,
            color: '#FFD700'
          }}>
            ⭐ {balance}
          </div>
        </div>
      </div>

      {/* Live Now Section */}
      <div style={{ padding: '0 16px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#FF0000',
              borderRadius: '50%',
              animation: 'pulse 1.5s infinite'
            }} />
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#FF4B6E' }}>Live Now</span>
          </div>
          <button onClick={() => setActiveTab('live')} style={{ background: 'none', border: 'none', color: '#00D9FF', fontSize: '13px', cursor: 'pointer' }}>
            See All →
          </button>
        </div>

        <div 
          onClick={() => setActiveTab('live')}
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'linear-gradient(145deg, #1a1a2e, #0f1419)',
            aspectRatio: '16/9',
            border: '1px solid rgba(255,75,110,0.3)',
            cursor: 'pointer'
          }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,75,110,0.25), rgba(0,217,255,0.15))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '42px', marginBottom: '8px' }}>{currentLive.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: '16px' }}>🎤 {currentLive.song}</div>
              <div style={{ color: '#8892A4', fontSize: '13px', marginTop: '4px' }}>{currentLive.name} • {currentLive.school}</div>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: '#FF0000',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '11px',
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
            background: 'rgba(0,0,0,0.7)',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '11px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            👁 {currentLive.viewers}
          </div>

          <div style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
            padding: '6px 14px',
            borderRadius: '16px',
            fontSize: '12px',
            fontWeight: 700
          }}>
            🎁 Send Gift
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'flex', gap: '12px', padding: '0 16px', marginBottom: '24px' }}>
        <button
          onClick={() => setActiveTab('songs')}
          style={{
            flex: 1,
            background: 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
            border: 'none',
            padding: '14px',
            borderRadius: '14px',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 15px rgba(255,75,110,0.3)'
          }}
        >
          🎤 Start Singing
        </button>
        <button
          onClick={() => setActiveTab('leaderboard')}
          style={{
            flex: 1,
            background: 'rgba(0,217,255,0.15)',
            border: '1px solid rgba(0,217,255,0.3)',
            padding: '14px',
            borderRadius: '14px',
            color: '#00D9FF',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          🏆 Leaderboard
        </button>
      </div>

      {/* Popular Songs */}
      <div style={{ padding: '0 16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>🎵 Popular Songs</h3>
        {songs.slice(0, 4).map(song => (
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
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              marginBottom: '8px',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              background: song.difficulty === 'Easy' 
                ? 'linear-gradient(135deg, #00D9FF, #00A8CC)'
                : song.difficulty === 'Medium'
                ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                : 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              flexShrink: 0
            }}>
              {song.emoji}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '2px' }}>{song.title}</div>
              <div style={{ color: '#8892A4', fontSize: '12px' }}>{song.artist}</div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '6px', alignItems: 'center' }}>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '8px',
                  fontSize: '10px',
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
                <span style={{ color: '#FFD700', fontSize: '11px', fontWeight: 600 }}>⭐{song.points}</span>
                <span style={{ color: '#8892A4', fontSize: '11px' }}>{song.duration}</span>
              </div>
            </div>
            <div style={{ color: '#8892A4', fontSize: '18px' }}>›</div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSongs = () => (
    <div>
      <div style={{ padding: '20px 16px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>🎵 Pick a Song</h2>
        
        {!selectedLocation && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,75,110,0.15), rgba(255,107,138,0.1))',
            border: '1px solid rgba(255,75,110,0.3)',
            padding: '14px',
            borderRadius: '12px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '20px' }}>📍</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#FF4B6E' }}>Check in required</div>
              <div style={{ fontSize: '12px', color: '#8892A4' }}>Select your school to start singing</div>
            </div>
            <button
              onClick={() => setShowCheckin(true)}
              style={{
                background: '#FF4B6E',
                border: 'none',
                padding: '8px 16px',
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

        {selectedLocation && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,217,255,0.15), rgba(0,168,204,0.1))',
            border: '1px solid rgba(0,217,255,0.3)',
            padding: '12px',
            borderRadius: '12px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '20px' }}>✓</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#00D9FF' }}>Checked in at {selectedLocation.name}</div>
            </div>
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
              padding: '14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              marginBottom: '10px',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '12px',
              background: song.difficulty === 'Easy' 
                ? 'linear-gradient(135deg, #00D9FF, #00A8CC)'
                : song.difficulty === 'Medium'
                ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                : 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '26px'
            }}>
              {song.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: '2px' }}>{song.title}</div>
              <div style={{ color: '#8892A4', fontSize: '13px' }}>{song.artist}</div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px', alignItems: 'center' }}>
                <span style={{
                  padding: '3px 10px',
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
                <span style={{ color: '#8892A4', fontSize: '11px' }}>{song.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderLive = () => (
    <div style={{ height: 'calc(100vh - 140px)', display: 'flex', flexDirection: 'column' }}>
      {/* Live Header */}
      <div style={{ 
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '16px', cursor: 'pointer' }}>
          ← Back
        </button>
        <div style={{
          background: '#FF0000',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          🔴 LIVE
        </div>
        <div style={{ fontSize: '13px', color: '#8892A4' }}>
          👁 {liveViewers + giftsSent.length}
        </div>
      </div>

      {/* Live Video Area */}
      <div style={{
        flex: 1,
        position: 'relative',
        margin: '0 16px',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #1a1a2e, #0f1419)',
        border: '2px solid rgba(255,75,110,0.4)'
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
            <div style={{ fontSize: '72px', marginBottom: '12px' }}>{currentLive.emoji}</div>
            <div style={{ fontWeight: 700, fontSize: '24px' }}>🎤 {currentLive.song}</div>
            <div style={{ color: '#8892A4', fontSize: '16px', marginTop: '8px' }}>{currentLive.name}</div>
            <div style={{ color: '#00D9FF', fontSize: '14px', marginTop: '4px' }}>🏫 {currentLive.school}</div>
          </div>
        </div>

        {/* Flying Gifts Animation */}
        {flyingGift && (
          <div style={{
            position: 'absolute',
            bottom: '120px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '56px',
            animation: 'giftFly 2s ease-out forwards',
            zIndex: 10
          }}>
            {flyingGift.icon}
          </div>
        )}

        {/* Gifts Display */}
        {giftsSent.length > 0 && (
          <div style={{
            position: 'absolute',
            bottom: '120px',
            left: '16px',
            display: 'flex',
            gap: '4px'
          }}>
            {giftsSent.slice(-8).map((g, i) => (
              <span key={i} style={{ fontSize: '24px' }}>{g.icon}</span>
            ))}
          </div>
        )}
      </div>

      {/* Gift Button */}
      <div style={{ padding: '16px' }}>
        <button
          onClick={() => setShowGifts(true)}
          style={{
            width: '100%',
            padding: '16px',
            background: 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
            border: 'none',
            borderRadius: '30px',
            color: 'white',
            fontSize: '16px',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(255,75,110,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          🎁 Send Gift
        </button>
      </div>
    </div>
  )

  const renderLeaderboard = () => (
    <div>
      <div style={{ padding: '20px 16px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>🏆 Leaderboard</h2>
        <p style={{ fontSize: '13px', color: '#8892A4', marginBottom: '20px' }}>Top performers this week</p>
        
        {leaderboard.map((player, i) => (
          <div
            key={player.rank}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px',
              background: i === 0 
                ? 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,165,0,0.1))'
                : i === 1 
                ? 'linear-gradient(135deg, rgba(192,192,192,0.15), rgba(169,169,169,0.08))'
                : i === 2
                ? 'linear-gradient(135deg, rgba(205,127,50,0.15), rgba(184,115,51,0.08))'
                : 'rgba(255,255,255,0.04)',
              border: i <= 2 
                ? `1px solid ${i === 0 ? 'rgba(255,215,0,0.4)' : i === 1 ? 'rgba(192,192,192,0.3)' : 'rgba(205,127,50,0.3)'}`
                : '1px solid rgba(255,255,255,0.06)',
              borderRadius: '16px',
              marginBottom: '8px'
            }}
          >
            <div style={{
              width: '32px',
              textAlign: 'center',
              fontSize: i < 3 ? '24px' : '16px',
              fontWeight: i < 3 ? 400 : 700,
              color: i < 3 ? 'inherit' : '#8892A4'
            }}>
              {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${player.rank}`}
            </div>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF4B6E, #FF6B8A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px'
            }}>
              {i % 2 === 0 ? '👧' : '👦'}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>{player.name}</div>
              <div style={{ color: '#8892A4', fontSize: '11px' }}>{player.school} • {player.songs} songs</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#FFD700', fontWeight: 700, fontSize: '15px' }}>{player.score}</div>
              <div style={{ color: '#FF4B6E', fontSize: '10px' }}>🎁 {player.gifts}</div>
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
        <meta name="theme-color" content="#050510" />
      </Head>

      <div style={{
        maxWidth: '430px',
        margin: '0 auto',
        minHeight: '100vh',
        background: 'radial-gradient(circle at 50% 0%, rgba(255,75,110,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 100%, rgba(0,217,255,0.1) 0%, transparent 40%), #050510',
        position: 'relative',
        paddingBottom: '90px'
      }}>
        {/* Main Content */}
        <div>
          {activeTab === 'home' && renderHome()}
          {activeTab === 'songs' && renderSongs()}
          {activeTab === 'live' && renderLive()}
          {activeTab === 'leaderboard' && renderLeaderboard()}
        </div>

        {/* Bottom Navigation */}
        <nav style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(13,13,26,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,75,110,0.2)',
          padding: '8px 0 28px',
          display: 'flex',
          justifyContent: 'space-around',
          maxWidth: '430px',
          margin: '0 auto'
        }}>
          {[
            { id: 'home', icon: '🏠', label: 'Home' },
            { id: 'songs', icon: '🎵', label: 'Songs' },
            { id: 'live', icon: '📺', label: 'Live' },
            { id: 'leaderboard', icon: '🏆', label: 'Ranks' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                padding: '8px 16px',
                background: 'none',
                border: 'none',
                color: activeTab === tab.id ? '#FF4B6E' : '#8892A4',
                fontSize: '10px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <span style={{ 
                fontSize: '22px',
                filter: activeTab === tab.id ? 'drop-shadow(0 0 8px rgba(255,75,110,0.6))' : 'none',
                transform: activeTab === tab.id ? 'scale(1.1)' : 'scale(1)'
              }}>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Check-in Modal */}
        <Modal show={showCheckin} onClose={() => setShowCheckin(false)}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>📍 Check In</h3>
          <p style={{ color: '#8892A4', fontSize: '13px', marginBottom: '16px' }}>Select your school to participate</p>
          
          {locations.map(loc => (
            <div
              key={loc.id}
              onClick={() => {
                setSelectedLocation(loc)
                setShowCheckin(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px',
                background: selectedLocation?.id === loc.id 
                  ? 'rgba(255,75,110,0.15)' 
                  : 'rgba(255,255,255,0.04)',
                border: `1px solid ${selectedLocation?.id === loc.id ? 'rgba(255,75,110,0.4)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '12px',
                marginBottom: '8px',
                cursor: 'pointer'
              }}
            >
              <span style={{ fontSize: '24px' }}>{loc.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: '14px' }}>{loc.name}</div>
                <div style={{ color: '#8892A4', fontSize: '11px' }}>{loc.students} students • {loc.distance}</div>
              </div>
              {selectedLocation?.id === loc.id && <span style={{ color: '#FF4B6E' }}>✓</span>}
            </div>
          ))}
        </Modal>

        {/* Gift Modal */}
        <Modal show={showGifts} onClose={() => setShowGifts(false)}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>🎁 Send a Gift</h3>
          <p style={{ color: '#FFD700', fontSize: '13px', marginBottom: '16px' }}>Balance: ⭐ {balance}</p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px'
          }}>
            {gifts.map(gift => (
              <button
                key={gift.name}
                onClick={() => sendGift(gift)}
                disabled={balance < gift.cost}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '12px 8px',
                  background: gift.popular 
                    ? 'rgba(255,75,110,0.15)' 
                    : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${gift.popular ? 'rgba(255,75,110,0.3)' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '12px',
                  cursor: balance >= gift.cost ? 'pointer' : 'not-allowed',
                  opacity: balance >= gift.cost ? 1 : 0.4,
                  position: 'relative'
                }}
              >
                {gift.popular && (
                  <span style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    background: '#FF4B6E',
                    color: 'white',
                    fontSize: '8px',
                    padding: '2px 6px',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}>
                    HOT
                  </span>
                )}
                <span style={{ fontSize: '28px' }}>{gift.icon}</span>
                <span style={{ fontSize: '11px', color: '#fff', fontWeight: 500 }}>{gift.name}</span>
                <span style={{ fontSize: '12px', color: '#FFD700', fontWeight: 600 }}>⭐{gift.cost}</span>
              </button>
            ))}
          </div>
        </Modal>

        {/* Song Detail Modal */}
        <Modal show={showSongModal} onClose={() => setShowSongModal(false)}>
          {selectedSong && (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '90px',
                height: '90px',
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
                fontSize: '42px'
              }}>
                {selectedSong.emoji}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>{selectedSong.title}</h3>
              <p style={{ color: '#8892A4', fontSize: '14px', marginBottom: '20px' }}>{selectedSong.artist}</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: '#8892A4', marginBottom: '2px' }}>Difficulty</div>
                  <div style={{ 
                    fontWeight: 600,
                    color: selectedSong.difficulty === 'Easy' ? '#00D9FF' : selectedSong.difficulty === 'Medium' ? '#FFD700' : '#FF4B6E'
                  }}>
                    {selectedSong.difficulty}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: '#8892A4', marginBottom: '2px' }}>Points</div>
                  <div style={{ fontWeight: 600, color: '#FFD700' }}>⭐ {selectedSong.points}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: '#8892A4', marginBottom: '2px' }}>Duration</div>
                  <div style={{ fontWeight: 600 }}>{selectedSong.duration}</div>
                </div>
              </div>

              <button
                onClick={startSinging}
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
        </Modal>
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
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  )
}

// Modal Component
function Modal({ show, onClose, children }) {
  return (
    <>
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 2000,
          opacity: show ? 1 : 0,
          visibility: show ? 'visible' : 'hidden',
          transition: 'all 0.3s'
        }}
      />
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#0D0D1A',
        borderRadius: '24px 24px 0 0',
        padding: '12px 20px 40px',
        zIndex: 2001,
        transform: show ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)',
        maxHeight: '85vh',
        overflowY: 'auto',
        maxWidth: '430px',
        margin: '0 auto'
      }}>
        <div style={{
          width: '36px',
          height: '4px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '2px',
          margin: '0 auto 20px'
        }} />
        {children}
      </div>
    </>
  )
}
