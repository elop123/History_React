import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import ByDate from './pages/ByDate'
import About from './pages/About';
import NoPage from './pages/NoPage';
import MainLayout from './layout/MainLayout';


function App() {
  
 

  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route index element={<Home />} />
      <Route path="/bydate" element={<ByDate />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoPage />} />
     </Routes>
    </Router>
  )
}

export default App
