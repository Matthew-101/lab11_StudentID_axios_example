import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import { Routes, Route, BrowserRouter, NavLink, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import UserDetails from './components/UserDetails';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    <div>
      <h1>User List</h1>
      {/* <UserList /> */}
      
    <div>
      <p>Username:  bigladybug274</p>
      <p>Gender:  FEMALE</p>
      <p>Time Zone: Abu Dhabi, Muscat, Baku</p>
      <p>Address: 4638 North Street, Truro, South Glamorgan, UK, Lp5 6QN</p>
      <p>Email: eliza.moore@example.com</p>
    </div>
    </div>
  )}
}