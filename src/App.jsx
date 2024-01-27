// import { useState } from 'react'

// SCSS
import './css/App.css'

// Components
import ThreeBlocks from './Components/ThreeBlocks/ThreeBlocks'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Trailers from './Components/Trailers/Trailers'
import RecentlyViewed from './Components/RecentlyViewed/RecentlyViewed'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Trailers/>
      <ThreeBlocks/>
      <RecentlyViewed/>
      <Footer/>
    </>
  )
}

export default App
