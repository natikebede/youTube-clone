import React, { Component } from "react";
import Navigation from './components/navigation.js';
import Sidebar from './components/sidebar.js';
import Recommendation from './components/recommendation.js';
import './App.css';
import './css/default_css.css';

class App extends  Component
{
  render()
  {

    return (
    <div className="bodys">
       <Navigation className="navs" />

     <div className="row">
       <div className="col-lg-3 col-md-3 app-sidebar"> 
       <Sidebar/>

      </div>
        <div className="col-lg-9 col-md-9 app-reccomm"> 
        <Recommendation/>
        </div>
         
         </div>
     
      
    </div>
    );
  }
}
export default App;