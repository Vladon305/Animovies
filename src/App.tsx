import React from 'react'
import HomeDesktop from './pages/home/Home'

function App() {
  const buttons = ['Home', 'Anime', 'Movies', 'Kill the Ads']

  return (
    <div className="App">
      <HomeDesktop buttons={buttons} />
    </div>
  )
}

export default App
