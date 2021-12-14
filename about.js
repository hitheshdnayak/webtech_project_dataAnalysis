// import './about_style.css';
import React from 'react';
import { Link } from "react-router-dom";
 // import Register from "./components/register"
import Image1 from "./img1.png"
import Image2 from "./img2.jpg"

class ABOUT extends React.Component {
    
    render() {
        return (
            <div>
                <header style={{borderStyle:"double"}}>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><p><i class="fas fa-analytics icon-4x"></i></p></a>
                    <Link to="/register">
                    <button id="si" className="right" style={{float:"right"}}>REGISTER</button>
                    </Link><Link to="/signup">
                    <button id="sign-in" className="right" style={{float:"right"}}>SIGN-IN</button>
                    </Link>
  </nav> 
                </header>
                <hr />
                <h1 style={{textDecoration: "underline"}}>DATA ANALYSIS INFO</h1>
                <TABLE />
                <footer>
                    <div id="clock">00:00:00</div>
                </footer>
            </div>
        )
    }
}

class IMG extends React.Component {
    render() {

        return (
            <div>
                <img src={this.props.source} id={this.props.identity} width="200" height="200" />
            </div>
        );
    }
}
class MINI_TABLE extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <td>
                        <IMG source={Image1} identity="img1" />
                    </td>
                    <td>
                        <IMG source={Image2} identity="img2" />
                    </td>
                </table>
            </div>
        );
    }
}

class ARTICLE extends React.Component {
    render() {

       
        return (
            <div>
                <article>
                    <a href="#whatisda">What is Data Analysis?      </a>
                    <a href="#process">The process of Data Analysis?</a><br />
                    <a href="#types">What are the types of DA?       </a>
                    <a href="#tools">tools used for Data Analysis?</a><br />
                    <hr />
                    <h3>What Is Data Analysis?</h3>
                    <div id="whatisda" >
                        Data analysis is a process of inspecting, cleansing, transforming, and modelling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.[1] Data analysis has multiple facets and approaches, encompassing diverse techniques under a variety of names, and is used in different business, science, and social science domains.[2] In today's business world, data analysis plays a role in making decisions more scientific and helping businesses operate more effectively.
                    </div>
                    <h3>What Is Data Analysis?</h3>
                    <div id="process" >
                        <ul>
                            <li><b>Data Requirement Gathering:</b> Ask yourself why you’re doing this analysis, what type of data analysis you want to use, and what data you are planning on analyzing.
                            </li>
                            <li><b>Data Collection:</b> Guided by the requirements you’ve identified, it’s time to collect the data from your sources. Sources include case studies, surveys, interviews, questionnaires, direct observation, and focus groups. Make sure to organize the collected data for analysis.
                            </li>
                            <li><b>Data Cleaning:</b> Not all of the data you collect will be useful, so it’s time to clean it up. This process is where you remove white spaces, duplicate records, and basic errors. Data cleaning is mandatory before sending the information on for analysis.
                            </li>
                            <li><b>Data Analysis.</b> Here is where you use data analysis software and other tools to help you interpret and understand the data and arrive at conclusions. Data analysis tools include Excel, Python, R, Looker, Rapid Miner, Chartio, Metabase, Redash, and Microsoft Power BI.
                            </li>
                            <li>
                                <b>Data Interpretation:</b> Now that you have your results, you need to interpret them and come up with the best courses of action, based on your findings.
                            </li>
                            <li>
                                <b>Data Visualization:</b> Data visualization is a fancy way of saying, “graphically show your information in a way that people can read and understand it.” You can use charts, graphs, maps, bullet points, or a host of other methods. Visualization helps you derive valuable insights by helping you compare datasets and observe relationships.
                            </li>
                        </ul>
                    </div>
                    <h3>What Is Data Analysis?</h3>
                    <div id="types" >
                        Data analysis is a process of inspecting, cleansing, transforming, and modelling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.[1] Data analysis has multiple facets and approaches, encompassing diverse techniques under a variety of names, and is used in different business, science, and social science domains.[2] In today's business world, data analysis plays a role in making decisions more scientific and helping businesses operate more effectively.
                    </div>
                    <h3>What Is Data Analysis?</h3>
                    <div id="tools" >
                        Data analysis is a process of inspecting, cleansing, transforming, and modelling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.[1] Data analysis has multiple facets and approaches, encompassing diverse techniques under a variety of names, and is used in different business, science, and social science domains.[2] In today's business world, data analysis plays a role in making decisions more scientific and helping businesses operate more effectively.
                    </div>
                </article>
            </div>
        );
    }
}
class TABLE extends React.Component {
    render() {
        return (
            <div>
                <aside id="aside_table" style={{ float: "right", width: "40%" }}>
                    <h2>Types of Data Analysis: </h2>
                    <ul>
                        <li>Text Analysis</li>
                        <li>Statistical Analysis</li>
                        <li>Diagnostic Analysis</li>
                        <li>Predictive Analysis</li>
                        <li>Prescriptive Analysis</li>
                    </ul>
                    <h2>Methods of Data Analysis: </h2>
                    <ul>
                        <li>Cluster Analysis</li>
                        <li>Cohort Analysis</li>
                        <li>Regression Analysis</li>
                        <li>Neural Networking</li>
                        <li>Factor Analysis</li>
                        <li>Data Mining</li>
                        <li>Text Analysis</li>
                    </ul>
                    <ul>
                        <li><b>Qualitative Data Analysis:</b> The qualitative data analysis method derives data via words, symbols, pictures, and observations. This method doesn’t use statistics. The most common qualitative methods include:
                            <ul>
                                <li><b>Content Analysis:</b> for analyzing behavioral and verbal data.</li>
                                <li><b>Narrative Analysis:</b> for working with data culled from interviews, diaries, surveys.</li>
                                <li><b>Grounded Theory:</b> for developing causal explanations of a given event by studying and extrapolating from one or more past cases.</li>
                            </ul>
                        </li>

                        <li><b>Quantitative Data Analysis:</b> Statistical data analysis methods collect raw data and process it into numerical data. Quantitative analysis methods include:
                            <ol>
                                <li><b>Hypothesis Testing:</b> for assessing the truth of a given hypothesis or theory for a data set or demographic.</li>
                                <li><b>Mean:</b> or average determines a subject’s overall trend by dividing the sum of a list of numbers by the number of items on the list.</li>
                                <li><b>Sample Size Determination:</b>uses a small sample taken from a larger group of people and analyzed. The results gained are considered representative of the entire body. </li>
                            </ol>
                        </li>
                    </ul>
                </aside>
                <table id="about_table" style={{ width: "60%" }}>
                    <tr>
                        <MINI_TABLE />
                    </tr>
                    <tr>
                        <ARTICLE />
                    </tr>
                </table>


            </div>
        )
    }
}
export default ABOUT;