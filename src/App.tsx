import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import CustomTable from './components/Table/CustomTable';
import Home from './components/Home/Home';

import './App.css';

function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/table" element={ <CustomTable />} />
    </Routes>
  </Router>
  );
}

export default App;
