import React from 'react'
import './App.css'
import { Navbar } from './components/nav/NavBar'
import { Header } from './components/header/Header'
import { Process } from './components/process/Process'
import { SectionWWD } from './components/WhatWeDo/WhatWeDo'
import { FooterDesktop } from './components/footer/FooterDesktop'

function App() {
    return (
        <>
            <Navbar>
                <Header />
                <Process />
                <SectionWWD />
            </Navbar>
            <FooterDesktop />
        </>
    )
}

export default App
