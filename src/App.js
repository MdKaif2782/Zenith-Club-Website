import React, { Component } from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import Portfolio from './components/Portfolio';
import PastPortfolio from './components/PastPortfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import webData from './webData';
import Photos from './components/Photos'
import Alumni from './components/Alumni'
import AdvisorPhotos from './components/AdvisorPhotos'
import NewPortfolio from './components/NewPortfolio'
import NewPastPortfolio from './components/NewPastPortfolio'
import Cooperation from './components/Cooperation'
import Timeline from './components/Timeline'
import Blogs from "./components/Blogs";


import { BrowserRouter ,Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
import * as path from "path";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/blogs/:id' element={<Blog/>} />
          </Routes>
        </BrowserRouter>


    );
  }
}

export default App;