import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Update from './components/Update';
import Transactions from './components/Transactions';
import Overview from './components/Overview';
import Login from './components/Login';
import React, { useState, useEffect, useRef } from 'react';


function App() {

  // take a state of which page user wants
  const [view, setView] = useState("Overview");
  const [username, setUsername] = useState(null);

  // check if logged in
  const storedUsername = localStorage.getItem("username");


  return (
    <>
      <Layout onChange = {(view) => setView(view)}></Layout>
      {(username != null || storedUsername != null) && 

        <div className = "mainSection">
        {view === "Overview" && <Overview />}
        {view === "Transactions" && <Transactions />}
        {view === "Update" && <Update />}
        </div>

      }
      {username == null && storedUsername == null &&
        <Login login = {setUsername}/>
      }
      
    </>
  );
}

export default App;
