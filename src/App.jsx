import React, { PureComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator/Calculator';
import Navbar from './components/header/navbar';
import Home from './components/pages/Home/home';
import Quote from './components/pages/Quotes/quotes';

class App extends PureComponent {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/Quotes" element={<Quote />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
