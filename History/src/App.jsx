import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import ByDate from './pages/ByDate'
import Since from './pages/Since'


function App() {
 

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bydate" element={<ByDate />} />
      <Route path="/since" element={<Since />} />
     </Routes>
    </Router>
  )
}

export default App
