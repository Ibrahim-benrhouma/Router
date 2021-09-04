import React from "react";
import "./Filter.css";
const Filter = ({updateinput,updaterate}) => {
  
  return (
    <div className="search-header">
      <div className="search-content">
        <h1>Movie App</h1>
        <form className="search">
          <input type="text"  placeholder="Search Movies With Title" onChange={(e)=>updateinput(e.target.value)}/>
          <span style={{color:"white"}}>OR</span>
          <select className="search-rate" defaultValue={0} onChange={(e)=>updaterate(e.target.value)}>
          <option value ={0} >Search And Rate</option>
              <option >The Wolf Of Wall Street </option>
              <option>Kill Bill</option>
              <option>The American Sniper</option>
              <option>LUPIN</option>
              <option>Fast And Furious 9</option>
              <option>Mechanic</option>
              <option>The Platform</option>
              <option>Fist Fight</option>
              <option>Other...</option>

          </select>
        </form>
        
      </div>
    </div>
  );
};

export default Filter;