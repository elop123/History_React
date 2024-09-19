import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import ByDate from './pages/ByDate'
import About from './pages/About';


function App() {
 

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bydate" element={<ByDate />} />
      <Route path="/about" element={<About />} />
     </Routes>
    </Router>
  )
}

export default App
