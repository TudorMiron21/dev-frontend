import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Auth } from './pages/auth';

function App() {
  return (
  <div className="App">

    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
    </Router>
  </div>
  );
}

export default App;
