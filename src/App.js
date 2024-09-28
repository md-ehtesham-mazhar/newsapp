import './App.css';

import NavBar from './components/NavBar';
import News from './components/News';
import React, { Component } from 'react';
//import Alert from './components/Alert';
//import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
 
export default class App extends Component {
  render(){
    return (
        <Router>
          <NavBar />
          <div className="container" >
            <Routes>
              <Route exact path="/" element={
                <News key="general" pageSize={5} country="us" category="general" />} />
              <Route exact path="/business" element={
                <News key="business" pageSize={5} country="us" Routescategory="business" />} />
              <Route exact path="/entertainment" element={
                <News key="entertainment" pageSize={5} country="us" category="entertainment" />} />
              <Route exact path="/health" element={
                <News key="health" pageSize={5} country="us" category="health" />} />
              <Route exact path="/science" element={
                <News key="science" pageSize={5} country="us" category="science" />} />
              <Route exact path="/sports" element={
                <News key="sports" pageSize={5} country="us" category="sports" />} />
              <Route exact path="/technology" element={
                <News key="technology" pageSize={5} country="us" category="technology" />} />
            </Routes>
          </div>
        </Router>
    )
             
  }    
}  

