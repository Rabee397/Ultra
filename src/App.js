import React, { Component } from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Collection from './Components/Collection';
import Contact from './Components/Contact';
import './App.css';



export default class App extends Component {

  render() {
    
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />

        <Routes>
            <Route path='/Ultra' element={<Collection />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      
      </BrowserRouter>
    )
  }
}
