import './App.css'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
