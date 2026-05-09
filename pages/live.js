import { useState } from 'react'
import Link from 'next/link'

export default function Live() {
  const [selectedPerformer, setSelectedPerformer] = useState(null)
  const [showGiftPanel, setShowGiftPanel] = useState(false)
  const [sentGift, setSentGift] = useState(null)
  const [giftsReceived, setGiftsReceived] = useState([])

  const livePerformers = [
    { id: 1, name: 'Emma S.', school: 'A Plus Education', song: 'Let It Go', viewers: 24, avatar: '👧', songEmoji: '❄️' },
    { id: 2, name: 'Lucas T.', school: 'DEF International', song: 'Do Re Mi', viewers: 18, avatar: '👦', songEmoji: '🎼' },
    { id: 3, name: 'Sophie L.', school: 'ABC Primary', song: 'Twinkle Twinkle', viewers: 12, avatar: '👧', songEmoji: '⭐' }
  ]

  const gifts = [
    { name: 'Star', icon: '⭐', cost: 10 },
    { name: 'Heart', icon: '❤️', cost: 20 },
    { name: 'Flower', icon: '🌸', cost: 30 },
    { name: 'Trophy', icon: '🏆', cost: 50 },
    { name: 'Crown', icon: '👑', cost: 100 },
    { name: 'Fireworks', icon: '🎆', cost: 200 },
    { name: 'Rose', icon: '🌹', cost: 40 },
    { name: 'Clap', icon: '👏', cost: 15 },
    { name: 'Rocket', icon: '🚀', cost: 150 }
  ]

  const sendGift = (gift) => {
    setSentGift(gift)
    setGiftsReceived(prev => [...prev, gift])
    setTimeout(() => setSentGift(null), 2000)
    setShowGiftPanel(false)
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
          <Link href="/live" style={{ color: '#fff', textDecoration: 'none' }}>Live</Link>
          <Link href="/leaderboard" style={{ color: '#c8d2dc', textDecoration: 'none' }}>Leaderboard</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ paddingTop: '100px', padding: '100px 2rem 2rem' }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #FF6B6B, #FFC857)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🔴 Live Performances
        </h1>
        <p style={{ textAlign: 'center', color: '#a6b2bf', marginBottom: '3rem' }}>
          Watch students perform live and send them gifts!
        </p>

        {!selectedPerformer ? (
          /* Performer Selection Grid */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {livePerformers.map((performer) => (
              <div
                key={performer.id}
                onClick={() => setSelectedPerformer(performer)}
                style={{
                  background: 'linear-gradient(145deg, #1a1a2e, #0f1419)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 107, 107, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {/* Live Video Preview */}
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{ fontSize: '5rem' }}>{performer.songEmoji}</div>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#FF0000',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>
                    🔴 LIVE
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    background: 'rgba(0,0,0,0.6)',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    👀 {performer.viewers} watching
                  </div>
                </div>

                {/* Performer Info */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF6B6B, #FFC857)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem'
                    }}>
                      {performer.avatar}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{performer.name}</div>
                      <div style={{ color: '#a6b2bf', fontSize: '0.9rem' }}>🏫 {performer.school}</div>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      background: 'rgba(255,107,107,0.2)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      🎵 {performer.song}
                    </div>
                    <div style={{ color: '#4ECDC4', fontWeight: 600 }}>
                      Tap to watch →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Live Performance View */
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Back Button */}
            <button
              onClick={() => setSelectedPerformer(null)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                marginBottom: '1rem',
                fontSize: '1rem'
              }}
            >
              ← Back to all performances
            </button>

            {/* Live Video Area */}
            <div style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
              borderRadius: '20px',
              height: '450px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <div style={{ fontSize: '8rem' }}>{selectedPerformer.songEmoji}</div>
              
              {/* Live Badge */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: '#FF0000',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: 600
              }}>
                🔴 LIVE
              </div>

              {/* Viewer Count */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0,0,0,0.6)',
                padding: '8px 16px',
                borderRadius: '20px'
              }}>
                👀 {selectedPerformer.viewers + giftsReceived.length}
              </div>

              {/* Gift Animation */}
              {sentGift && (
                <div style={{
                  position: 'absolute',
                  bottom: '100px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '4rem',
                  animation: 'floatUp 2s ease-out forwards'
                }}>
                  {sentGift.icon}
                </div>
              )}

              {/* Gifts Floating */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                display: 'flex',
                gap: '5px'
              }}>
                {giftsReceived.slice(-5).map((g, i) => (
                  <span key={i} style={{ fontSize: '1.5rem' }}>{g.icon}</span>
                ))}
              </div>
            </div>

            {/* Performer Info */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem',
              background: '#1a1a2e',
              borderRadius: '15px',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                  {selectedPerformer.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.3rem' }}>{selectedPerformer.name}</div>
                  <div style={{ color: '#a6b2bf' }}>🏫 {selectedPerformer.school}</div>
                  <div style={{ color: '#4ECDC4', marginTop: '0.3rem' }}>🎵 {selectedPerformer.song}</div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#FFC857', fontSize: '1.2rem', fontWeight: 700 }}>
                  ⭐ {giftsReceived.reduce((sum, g) => sum + g.cost, 0)} points earned
                </div>
                <div style={{ color: '#a6b2bf', fontSize: '0.9rem' }}>
                  {giftsReceived.length} gifts received
                </div>
              </div>
            </div>

            {/* Gift Button */}
            <button
              onClick={() => setShowGiftPanel(true)}
              style={{
                width: '100%',
                padding: '1.2rem',
                background: 'linear-gradient(135deg, #FF6B6B, #FFC857)',
                border: 'none',
                borderRadius: '15px',
                color: '#fff',
                fontSize: '1.2rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              🎁 Send Gift
            </button>
          </div>
        )}
      </div>

      {/* Gift Panel */}
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
              <h3 style={{ color: '#fff', fontSize: '1.3rem' }}>🎁 Send a Gift</h3>
              <button 
                onClick={() => setShowGiftPanel(false)} 
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
              >
                ×
              </button>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}>
              {gifts.map((gift, i) => (
                <button
                  key={i}
                  onClick={() => sendGift(gift)}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '2px solid rgba(255,107,107,0.3)',
                    borderRadius: '15px',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.3rem' }}>{gift.icon}</div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{gift.name}</div>
                  <div style={{ color: '#FFC857', fontSize: '0.85rem' }}>⭐ {gift.cost}</div>
                </button>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#a6b2bf' }}>
              Your balance: ⭐ 500 points
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes floatUp {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-150px); }
        }
      `}</style>
    </div>
  )
}
