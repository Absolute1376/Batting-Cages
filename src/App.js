import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import Header from './components/Header';
import AboutUsPage from './components/AboutUsPage';

function App() {
  return (
    <Router>
      <Header />
         <Routes>
          <Route path="/" exact component={<HomePage />} />
          <Route path="/booking" component={<BookingPage />} />
          <Route path="/AboutUsPage" component={<AboutUsPage />} />
        </Routes>
    </Router>
  );
}

export default App;
