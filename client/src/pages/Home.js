import React, { Component } from "react";
import  Navbar from './components/nav'


class Home extends Component {

  render() {
    return ( 
    <div className="home">
    <Navbar/> 
    <h1>Hello Habitrons</h1>
    
    </div>
      
    );
    }
}

export default Home;
