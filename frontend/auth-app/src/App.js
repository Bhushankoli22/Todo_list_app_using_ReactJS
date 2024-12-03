import "./App.css"
// import { createBrowserRouter as route } from "react-router-dom"
import Signup from './signup/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login/Login';
import Home from './Home';
import ProtectedPage from './Protected'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App