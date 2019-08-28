import React from 'react';
import '../Style/navbar.css'
class Navbar extends React.Component{
    handleClick=(e)=>{
        if (e.target.id==="button-1"){
            e.target.id="none";
            var a=document.getElementById("none");
            a.id="button-1";

        }
        else{
            var a=document.getElementById("button-1");
            a.id="none";
            e.target.id="button-1";
        }
    }
      render(){
        return(
          <div className="MyNav">
              <nav className="navbar navbar-inverse navbar-fixed-top">
                  <div className="container">
                      <div className="navbar-header">
                          <a href="#" className="navbar-brand top">Let's Schedule</a>
                          <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                      </div>
                      
                      <div className="collapse navbar-collapse" id="menu">
                          <ul className="nav navbar-nav tag">
                              <li><a href="#" className="platform">A platform to Compare Multiple Algorithms</a></li>      
                          </ul>
                          <button className="btn btn-default btn-md navbar-btn navbar-right nbt" id="button-1" onClick={this.handleClick}>Single Algorithm</button>
                        <button className="btn btn-default btn-md navbar-btn navbar-right nbt" id="none" onClick={this.handleClick}>Compare Multiple Algorithms</button>
                      </div>
                  </div>
              </nav>                     
          </div>
        )
      }
}

export default Navbar;