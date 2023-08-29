import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './i18n'
import React, { Suspense } from 'react';
import i18n from './i18n'
import i18next from 'i18next'




export default function App() {

  return (
    <>
      <Suspense fallback={null}>

        <Navbar />

        <Home name="Home" />

        <div className='flex items-center justify-center flex-wrap'>
          <About name="About" />




          <Contact name="Contact" />
        </div>



      </Suspense>
    </>
  )
}

