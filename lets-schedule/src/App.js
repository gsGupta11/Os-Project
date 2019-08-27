import React from 'react';
import './Style/App.css';
import Navbar from './Components/navbar';
class App extends React.Component{
      render(){
        return(
          <div className="mainDiv">
            <div className="container">
                <Navbar/>
          </div>
          </div>
        )
      }
}

export default App;
