import React from 'react';
import '../Style/LeftTable.css'
class LeftTable extends React.Component{
    handleClick=(e)=>{
        if(e.target.id="none"){
            e.target.id="clicked";
        }
    }
    render(){
        return(        
            <div className="left">
                    <div className="row lef">
                        <div className="col-xs-12">
                            <div className="Algos">
                                <p class="lefttag">Choose from wide range of Algorithms - </p><hr></hr>
                                <button className="btn btn-default algobt first" onClick={this.handleClick} id="none">First Come First Serve (FCFS)</button>
                                <button className="btn btn-default algobt" onClick={this.handleClick} id="none">Round Robin Algorithm (RRA)</button>
                                <button className="btn btn-default algobt" onClick={this.handleClick} id="none">Shortest Job First (SJF)</button>
                                <button className="btn btn-default algobt" onClick={this.handleClick} id="none">Priority Scheduling</button>
                                <button className="btn btn-default algobt" onClick={this.handleClick} id="none">Lottery Scheduling Algorithm</button>
                                <button className="btn btn-default algobt" onClick={this.handleClick} id="none">Gang Scheduling Algorithm</button>
                                <button className="btn btn-default algobt" onClick={this.handleClick} id="none">Fair Share Scheduling</button>
                                <button className="btn btn-default algobt" onClick={this.handleClick} id="none">Earliest Deadline First</button>
                                <button className="btn btn-default algobt" onClick={this.handleClick} id="none  ">Stride Scheduling Algorithm</button>
                        </div>
                        </div>
                </div>
            </div>
            )
    }
}

export default LeftTable;