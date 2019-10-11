import React from 'react';
import './Style/App.css';
import Navbar from './Components/navbar';
import LeftTable1 from './Components/LeftTable1';
import Fcfs from './Components/FCFS';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';


class App extends React.Component{
      state={
        status:null,
        list:[]
      }
      addStatus=(type)=>{
        this.setState({
          status:type
        })
        console.log(this.state.status);
      }
      addData = (list)=>{
        this.setState({
          list:list
        })
        console.log(this.state.list);
      }
      render(){


        // Map Function ki maaa ki ankh ho rhi h
        // const final = this.state.list.map(function(value){
        //     return (
        //       <div className="TableData">
        //         <h1>jhsjfhdjfhdjfhd</h1>
        //       </div>
        //     )
        // })









        //   <ul>
        //    {this.state.list.map( item => (
        //      <li key={item.id}> Name : {item.name}</li>
        //    ))}
        //  </ul>





        return(

            <BrowserRouter>
          <div className="mainDiv">
            <div className="container-fluid">
              <div className="row">
                  <div className="col-xs-12">
                    <Navbar addStatus={this.addStatus}/>
                  </div>
                  <div className="col-xs-12 col-md-6 col-sm-6 col-lg-6">
                    <LeftTable1 status={this.state.status}/>
                    </div>
                    <div className="col-xs-12 col-md-6 col-sm-6 col-lg-6">
                      <div className="right">
                      
                      
                      {/* <Route exact path="/details/:id" >
                <DetailsPage />
            </Route> */}

                        {/* <Route exact path = "/fcfs">
                              <Fcfs/>
                        </Route> */}
                        <Route
                          path='/fcfs'
                          component={() => <Fcfs addData={this.addData}/>}
                        />
                      {/* <Fcfs/> */}
                      </div>
                      </div>
              </div>
          </div>

                    {/* {final} */}
                    {LeftTable1}
          </div>
          </BrowserRouter>
        )
      }
}

export default App;
