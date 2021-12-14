// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./csss.css"



function Carous() {
  return (
    <div>
      <table>
        <tr>
          <td>
            <h1  style={{fontFamily:"cursive",margin:"15px"}}>WELCOME</h1>
          </td>
          <td>
            <button style={{borderRadius:"5",backgroundColor:"darkgrey"}}><Link to="/home">..NEXT</Link></button>
          </td>
        </tr>
      </table>



    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ backgroundColor: "grey" }}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <p>The data is necessary as inputs to the analysis,which is specified based upon the requirements of those directing theanalysis (or customers, who will use the finished product of the analysis).The general type of entity upon which the data will be collected is referred to as an experimental unit (e.g., a person or population of people).Specific variables regarding a population (e.g., age and income) may be specified and obtained.Data may be numerical or categorical (i.e., a text label for numbers).</p>
        </div>
        <div className="carousel-item">
          <p>Data, when initially obtained, must be processed or organized for analysis. For instance,these may involve placing data into rows and columns in a table format (known as structured data) for further analysis, often through the use of spreadsheet
            or statistical software.</p>
        </div>
        <div className="carousel-item">
          <p> Once processed and organized, the data may be incomplete,contain duplicates, or contain errors.The need for data cleaning will arise from problems in the way that the datum are entered and stored.[21] Data cleaning is the process of preventing and correcting these errors. Common tasks include record matching, identifying inaccuracy of data, overall quality of existing data, deduplication, and column segmentation.</p>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
</div>
  )
};

class HOME extends React.Component {
  render() {

    return (<div>
      <Carous /><br/>
      <address>
        100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar,
        Banashankari, Bengaluru, Karnataka 560085
        <hr />
        <p>+91 9191919191</p>
        <hr />
        <p>pesu@gmail.com</p>
      </address>
    </div>
    )
  }
}

export default HOME