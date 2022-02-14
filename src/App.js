// import ReactDOM from "react-dom";
import React from "react";

// import CartContainer from "./containers/CartContainer";
// import MessageContainer from "./containers/MessageContainer";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";




export default function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('user_profile')
      .then(res => {
        const state = {
          user: res.data
        }
        setUser(state)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  return (

    <Router>
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div> */}
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login user={user} />} />
      </Routes>
    </Router>
  )
}
// ReactDOM.render(<App />, document.getElementById("root"));