import React from 'react';
import '../Style/FCFS.css';

class Fcfs extends React.Component{

    state={
        list:[]
    }

    handleMore=(e)=>{
        var newDiv = document.createElement("div");
        var fcf = document.getElementById("totalRight");
        var main =document.getElementById("mainForm");
        fcf.insertBefore(newDiv,document.getElementById("sub"));
        newDiv.className="container-fluid inside"
        newDiv.innerHTML=main.innerHTML;
        var p = document.getElementsByClassName("pro");
    }



    handleSubmit=(e)=>{
        var ids = document.getElementsByClassName("id");
        var arr = document.getElementsByClassName("arrive");
        var bur = document.getElementsByClassName("burst");
        var valuesId=[];
        var valuesAr = [];
        var valuesBr = [];
        for(var i=0;i<ids.length;i++){
            valuesId[i]=ids[i].value*1;
            valuesAr[i]=arr[i].value*1;
            valuesBr[i]=bur[i].value*1;
        }
            let qu = 0;
            var FCFS = (arrivalTime, burstTime)=>{
            let output = 'PATBTCTTTWT\t',
                objCollection = [],
                AT = [],
                BT = [],
                completion,
                turnaround,
                waiting,
                att = [],
                awt = [];

            for(var x = 0; x < arrivalTime.length; x++)
                objCollection.push({ A: arrivalTime[x], B: burstTime[x] });

            objCollection.sort(function(a, b){
                return a.A - b.A;
            });


            for(var x = 0; x < objCollection.length; x++){

                AT.push(objCollection[x].A);
                BT.push(objCollection[x].B);

                completion = CT(BT[x]);
                turnaround = TT(completion,AT[x]);
                waiting = WT(turnaround,BT[x]);

                output += `${x+1}\t${AT[x]}\t${BT[x]}\t${completion}\t${turnaround}\t${waiting}`;

                att.push(turnaround);
                awt.push(waiting);
            }

            output += `Average Turnaround Time: ${averageTT(att, objCollection.length)}\nAverage Waiting Time: ${averageWT(awt, objCollection.length)}`
            return output;
            }

            function CT(bt){

            qu += bt;
            return qu;
            }

            function TT(ct, at){
            return ct - at;
            }

            function WT(tt,bt){
            return tt - bt;
            }

            function averageTT (ttValues, noOfValues) {
            return ttValues.reduce(function(total, num){
                return total + num;
            }) / noOfValues;
            }

            function averageWT (wtValues, noOfValues) {
            return wtValues.reduce(function(total, num){
                return total + num;
            }) / noOfValues;
            }

            var a = FCFS(valuesAr,valuesBr);
            this.setState({
                list: a
              });
            // for(var i=0 ; i<this.state.list.length;i++){
            //     console.log(this.state.list[i]);
            // }
            this.props.addData(a);
            // console.log(this.state.list[15]);
            //console.log(this.state.list[2]+this.state.list[3]);
    }

    render=()=>{
        return(
            <div className="fcfs-right" id = "totalRight">
                <div className="container-fluid inside" id="mainForm">
                        <label>Enter Process Id - </label><br/>
                        <input type = "text" placeholder="Process ID" className="id"/><br/>
                        <label>Enter Arrival Time - </label><br/>
                        <input type = "number" placeholder="Arrival Time" className="arrive"/><br/>
                        <label>Enter Burst Time - </label><br/>
                        <input type="number" placeholder="Burst Time" className="burst"/><br/>
                        <div className="row" className="rightButtons">
                        <hr className="Rhori"/>  
                </div>
                </div>
                <button className="btn btn-success" type="submit" id="sub" onClick={this.handleSubmit}>Submit</button>
               <button className="btn btn-primary" type="process" onClick={this.handleMore} id="pro">Add More Processes</button>
            </div>
            
        )
    }
}


export default Fcfs;