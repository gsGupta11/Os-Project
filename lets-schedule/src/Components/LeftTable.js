import React from 'react';
import '../Style/LeftTable.css'
class LeftTable extends React.Component{
    handleClick=(e)=>{
        if(this.props.status=="Single Algorithm"){
            if(e.target.className=="btn btn-default algobt none"){
                // var a= document.getElementsByClassName("btn btn-default algobt clicked");
                // for(var i=0;i<a.lenght;i++){
                //     a[i].className="btn btn-default algobt none";
                // }
                console.log("clicked")
                e.target.className="btn btn-default algobt clicked";
                console.log(e.target.className);
            }
            else{
                e.target.className="btn btn-default algobt none";
            }
        }
        else if(this.props.status=="Compare Multiple Algorithms"){
            var a= document.getElementsByClassName("algobt");
            a[0].className="btn btn-default algobt none";
            a[1].className="btn btn-default algobt none";
            a[2].className="btn btn-default algobt none";
            a[3].className="btn btn-default algobt none";
            a[4].className="btn btn-default algobt none";
            a[5].className="btn btn-default algobt none";
            a[6].className="btn btn-default algobt none";
            a[7].className="btn btn-default algobt none";
            a[8].className="btn btn-default algobt none";
            e.target.className="btn btn-default algobt clicked";
            // var i=0;
            // var len = a.length;
            // console.log(len);
            // for(i=0;i<len;i++){
            //     a[i].className="btn btn-default algobt none";
            //     console.log(a[i]);
            // }
        }

    }
    render(){
        return(        
            <div className="left">
                    <div className="row lef">
                        <div className="col-xs-12">
                            <div className="Algos">
                                <p className="lefttag">Choose from wide range of Algorithms - </p><hr></hr>
                                <button className="btn btn-default algobt none" onClick={this.handleClick} >First Come First Serve (FCFS)</button>
                                <button className="btn btn-default algobt none" onClick={this.handleClick} >Round Robin Algorithm (RRA)</button>
                                <button className="btn btn-default algobt none" onClick={this.handleClick} >Shortest Job First (SJF)</button>
                                <button className="btn btn-default algobt none" onClick={this.handleClick} >Priority Scheduling</button>
                                <button className="btn btn-default algobt none" onClick={this.handleClick} >Lottery Scheduling Algorithm</button>
                                <button className="btn btn-default algobt none" onClick={this.handleClick} >Gang Scheduling Algorithm</button>
                                <button className="btn btn-default algobt none" onClick={this.handleClick} >Fair Share Scheduling</button>
                                <button className="btn btn-default algobt none" onClick={this.handleClick} >Earliest Deadline First</button>
                                <button className="btn btn-default algobt none" onClick={this.handleClick} >Stride Scheduling Algorithm</button>
                        </div>
                        </div>
                </div>
            </div>
            )
    }
}

export default LeftTable;