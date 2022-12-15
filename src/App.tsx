import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/nav/NavBar';
import { Header } from './components/header/Header';
import { Process } from './components/process/Process';
import { SectionWWD } from './components/WhatWeDo/WhatWeDo';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar>
        <Header />
        <Process />
        <SectionWWD/>
      </Navbar>
      <Footer />
      
    </>
  );
}

export default App;
