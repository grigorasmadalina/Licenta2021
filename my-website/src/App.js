import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import DashboardPage from './Pages/DashboardPage';
// import Title from './components/Title/Title';

class App extends React.Component {
    
 
  render() {
   
    return (
  <Router>
    <Route path="/login" component = {LoginPage}/>
    <Route path="/register" component = {RegisterPage}/>
    <Route path="/dashboard" component = {DashboardPage}/>

    </Router>
    )
};
}
export default App;