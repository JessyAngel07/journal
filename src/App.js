import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Journal from "./container/Journal";
import NavHeader from './component/NavHeader';
import Details from './container/Details';
import Dashboard from './container/Dashboard';
import Login from './container/Login';
import Test from './container/Test';
import JournalsList from './container/JournalsList';
import Resume from './container/Resume';
const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/journal' Component={Journal} />
        <Route path='/details' Component={Details} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/test' Component={Test} />
        <Route path='/journalsList' Component={JournalsList} />
        <Route path='/resume' Component={Resume} />
      </Routes>
    </Router>
  );
};

export default App;
