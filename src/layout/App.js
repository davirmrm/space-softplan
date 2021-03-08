import React, { useEffect, useState } from 'react'
import Header from './header'
import SidebarLeft from './sidebarLeft'
import SidebarRight from './sidebarRight'
import Footer from './footer'
import LogOut from './logout'
import { Alert } from '../component'
import './App.css'
import './app-color.css'

export default ({ children }) => {
  const [heigthHeader, setHeigthHeader] = useState(0)
  useEffect(() => {
    setHeigthHeader(document.getElementById('box-header').offsetHeight)
  }, [])
  const heightApp = { height: `calc(100vh - ${heigthHeader}px)` }
  return (
    <>
      <Alert />
      <Header />
      <div id='box-app' style={heightApp}>
        <SidebarLeft style={heightApp} />
        <section id='box-container' style={heightApp}>
          {children}
          <Footer />
        </section>
        <SidebarRight style={heigthHeader} />
        <LogOut />
      </div>
    </>
  )
}
