import './App.scss'
import React from 'react'
import Home from './pages/home/Home'
import Anime from './pages/anime/Anime'
import Movies from './pages/movies/Movies'
import KillTheAds from './pages/kill_the_ads/KillTheAds'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/anime" element={<Anime/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/kill_the_ads" element={<KillTheAds/>} />
      </Routes>
    </div>
  )
}

export default App
