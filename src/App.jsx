import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-dark text-light min-vh-100 min-vw-100 d-flex flex-column">
        <Nav />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



