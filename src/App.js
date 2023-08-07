import React, { Component } from 'react';
import {HashRouter , Routes , Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Collection from './Components/Collection';
import Contact from './Components/Contact';
import './App.css';



export default class App extends Component {

  render() {
    
    return (
      <HashRouter basename='/Ultra'>
        <Navbar />

        <Routes>
            <Route path='/Ultra' element={<Collection />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      
      </HashRouter>
    )
  }
}
