import './App.css'
import AboutPage from './pages/AboutPage';
import AnotherMessage from './pages/AnotherMessage';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage';
import HirePage from './pages/HirePage.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/message" element={<AnotherMessage />} />
        <Route path="/hire" element={<HirePage />} />
      </Routes>
    </>
  )
}

export default App
