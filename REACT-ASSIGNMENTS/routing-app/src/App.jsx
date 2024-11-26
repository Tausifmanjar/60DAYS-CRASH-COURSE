import Home from "./home"
import Login from "./login"
import Users from "./users"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <nav>
              <Link to="/">Home</Link>
              <br />
              <br />
           
              <Link to="/login">Login</Link>
              <br />
              <br />
              <Link to="/users">User</Link>
        </nav>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users/>} />
      </Routes>
      </div>
    </Router>
  );
}


export default App
