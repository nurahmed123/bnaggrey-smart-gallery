import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import './App.css';
// import LoadingBar from 'react-top-loading-bar';
import ImageShop from './components/imageShop/ImageShop';
import Imagedriver from './components/imageDriver/Imagedriver';
import Login from './components/LoginSystem/login/Login';
import SignUp from './components/LoginSystem/signup/Signup';
import Nav from './components/Nav';

function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0)
  const pageItems = 20;
  const apiKey = progress.env.IMAGE_SOURCE_API;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 200);
  }, [])
  return (
    <>
      {loading ?
        <div className="text-center flex justify-center items-center" style={{ height: "100vh" }}>
          <ScaleLoader
            color={"#36D7B7"}
            size={50}
          />
        </div>

        :
        <Router>
          <Route exact path="/">
            <Nav />
            <ImageShop setProgress={setProgress} pageItems = {pageItems} apiKey = {apiKey} />
          </Route>
          <Route exact path="/image/drive">
            <Nav />
            <Imagedriver />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Router>
      }

    </>
  );
}

export default App;
