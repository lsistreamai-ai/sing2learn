import { useState } from 'react'
import Link from 'next/link'

export default function Songs() {
  const [filter, setFilter] = useState('all')
  
  const songs = [
    { id: 1, title: 'ABC Song', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '🔤', category: 'educational' },
    { id: 2, title: 'Twinkle Twinkle Little Star', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '⭐', category: 'nursery' },
    { id: 3, title: 'Happy Birthday', artist: 'Traditional', difficulty: 'Easy', points: 120, emoji: '🎂', category: 'celebration' },
    { id: 4, title: 'Do Re Mi', artist: 'Sound of Music', difficulty: 'Medium', points: 200, emoji: '🎼', category: 'musical' },
    { id: 5, title: 'Let It Go', artist: 'Frozen', difficulty: 'Medium', points: 250, emoji: '❄️', category: 'disney' },
    { id: 6, title: 'We Are the World', artist: 'USA for Africa', difficulty: 'Hard', points: 350, emoji: '🌍', category: 'inspirational' },
    { id: 7, title: 'Head, Shoulders, Knees and Toes', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '🎭', category: 'educational' },
    { id: 8, title: 'The Wheels on the Bus', artist: 'Traditional', difficulty: 'Easy', points: 100, emoji: '🚌', category: 'nursery' },
    { id: 9, title: 'Under the Sea', artist: 'Little Mermaid', difficulty: 'Medium', points: 220, emoji: '🐠', category: 'disney' },
    { id: 10, title: 'Tomorrow', artist: 'Annie', difficulty: 'Medium', points: 230, emoji: '☀️', category: 'musical' },
    { id: 11, title: 'Circle of Life', artist: 'Lion King', difficulty: 'Hard', points: 300, emoji: '🦁', category: 'disney' },
    { id: 12, title: 'A Whole New World', artist: 'Aladdin', difficulty: 'Hard', points: 320, emoji: '🕌', category: 'disney' }
  ]

  const filteredSongs = filter === 'all' 
    ? songs 
    : songs.filter(s => s.difficulty.toLowerCase() === filter)

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

      <section style={{ paddingTop: '100px' }}>
        <h2 className="section-title">🎤 Choose Your Song</h2>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button onClick={() => setFilter('all')} 
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ marginRight: '0.5rem' }}>
            All Songs
          </button>
          <button onClick={() => setFilter('easy')} 
            className={`btn ${filter === 'easy' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ marginRight: '0.5rem' }}>
            Easy
          </button>
          <button onClick={() => setFilter('medium')} 
            className={`btn ${filter === 'medium' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ marginRight: '0.5rem' }}>
            Medium
          </button>
          <button onClick={() => setFilter('hard')} 
            className={`btn ${filter === 'hard' ? 'btn-primary' : 'btn-secondary'}`}>
            Hard
          </button>
        </div>

        <div className="songs-grid">
          {filteredSongs.map((song) => (
            <div key={song.id} className="song-card">
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
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '0.8rem' }}>
                  🎤 Start Singing
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Sing2Learn — A School Singing Competition</p>
      </footer>
    </div>
  )
}
