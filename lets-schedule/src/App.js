import React from 'react';
import './Style/App.css';
import Navbar from './Components/navbar';
import LeftTable from './Components/LeftTable';
import Fcfs from './Components/FCFS';
class App extends React.Component{
      state={
        status:null
      }
      addStatus=(type)=>{
        this.setState({
          status:type
        })
        console.log(this.state.status);
      }
      render(){
        return(
          <div className="mainDiv">
            <div className="container-fluid">
              <div className="row">
                  <div className="col-xs-12">
                    <Navbar addStatus={this.addStatus}/>
                  </div>
                  <div className="col-xs-12 col-md-6 col-sm-6 col-lg-6">
                    <LeftTable status={this.state.status}/>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 col-lg-6">
                      <div className="right">
                      <Fcfs/>
                      </div>
                      </div>
              </div>
          </div>
          </div>
        )
      }
}

export default App;
