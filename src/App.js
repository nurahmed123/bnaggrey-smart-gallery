import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import './App.css';
import LoadingBar from 'react-top-loading-bar';
import ImageShop from './components/imageShop/ImageShop';
import Imagedriver from './components/imageDriver/Imagedriver';
import Login from './components/LoginSystem/login/Login';
import SignUp from './components/LoginSystem/signup/Signup';
import Nav from './components/Nav';
import { createApi } from 'unsplash-js'
import BnaggreyDrive from './components/BnaggreyDrive/BnaggreyDrive';

function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(6)
  const [searchQuery, setSearchQuery] = useState("programming");
  const pageItems = 10;
  // const apiKey = process.env.IMAGE_SOURCE_API;
  const apiKey = "ygY0HOat_SsomrADJTiIPYFZg2Y2ZusVs8uInS7snQk";
  // const apiKey = "C42vwYR0OCghnPXz9idOxvvS-z4K6SNKzgb9z75jjX0";
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 200);
  }, [])

  const unsplash = createApi({
    accessKey: apiKey
  })

  return (
    <>
      <LoadingBar
        color='#28b485'
        progress={progress}
      />
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
            <ImageShop setProgress={setProgress} pageItems={pageItems} apiKey={apiKey} setPage = {setPage} page = {page} perPage = {perPage} setPerPage = {setPerPage} searchQuery={searchQuery} setSearchQuery={setSearchQuery} unsplash={unsplash} />
          </Route>
          <Route exact path="/image/drive">
            <Nav />
            <Imagedriver />
          </Route>
          <Route exact path="/bnaggrey/drive">
            <Nav />
            <BnaggreyDrive/>
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
