import React from 'react';
import './Style/App.css';
import Navbar from './Components/navbar';
import LeftTable from './Components/LeftTable';
class App extends React.Component{
      render(){
        return(
          <div className="mainDiv">
            <div className="container-fluid">
              <div className="row">
                  <div className="col-xs-12">
                    <Navbar/>
                  </div>
                  <div className="col-xs-12 col-md-6 col-sm-6 col-lg-6">
                    <LeftTable/>
                    </div>
              </div>
          </div>
          </div>
        )
      }
}

export default App;
