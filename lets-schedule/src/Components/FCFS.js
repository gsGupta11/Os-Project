import React from 'react';
import '../Style/FCFS.css';
class Fcfs extends React.Component{

    handleMore=(e)=>{
        var newDiv = document.createElement("div");
        var fcf = document.getElementById("totalRight");
        var main =document.getElementById("mainForm");
        fcf.insertBefore(newDiv,document.getElementById("sub"));
        newDiv.className="container-fluid inside"
        newDiv.innerHTML=main.innerHTML;
        var p = document.getElementsByClassName("pro");
        p.onClick=this.handleMore;
        console.log(this)
    }
    render(){
        return(
            <div className="fcfs-right" id = "totalRight">
                <div className="container-fluid inside" id="mainForm">
                        <label>Enter Process Id - </label><br/>
                        <input type = "text" placeholder="Process ID"/><br/>
                        <label>Enter Arrival Time - </label><br/>
                        <input type = "text" placeholder="Arrival Time"/><br/>
                        <label>Enter Burst Time - </label><br/>
                        <input type="text" placeholder="Burst Time"/><br/>
                        <div className="row" className="rightButtons">
                     
                        <hr className="Rhori"/>  
                </div>
                </div>
                <button class="btn btn-success" type="submit" id="sub">Submit</button>
               <button class="btn btn-primary" type="process" onClick={this.handleMore} id="pro">Add More Processes</button>
            </div>
        )
    }
}


export default Fcfs;