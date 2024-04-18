import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import Header from './components/Header';
import AboutUsPage from './components/AboutUsPage';
import PricingPage from './components/PricingPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App; 