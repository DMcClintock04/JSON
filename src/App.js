import React from 'react';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import USD from './pages/USD';
import GBP from './pages/GBP';
import EUR from './pages/EUR';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/USD' element={<USD/>} />
        <Route path='/GBP' element={<GBP/>} />
        <Route path='/EUR' element={<EUR/>} />
    </Routes>
    </Router>
);
}
  
export default App;