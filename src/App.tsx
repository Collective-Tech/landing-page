import React, { useEffect } from 'react'
import './App.css'
import { Navbar } from './components/nav/NavBar'
import { FooterDesktop } from './components/footer/FooterDesktop'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './components'
import Form from '../src/components/form/Form'
import TagManager, { TagManagerArgs } from 'react-gtm-module'

function App() {
    const location = useLocation()
    // Scroll to top if path changes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    const gtmId = process.env.REACT_APP_GTM_ID || ''
    const args: TagManagerArgs = { gtmId }
    useEffect(() => {
        TagManager.initialize(args)
    })
    return (
        <>
            <Navbar>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/estimate" element={<Form />} />
                </Routes>
            </Navbar>
            <FooterDesktop />
        </>
    )
}

export default App
