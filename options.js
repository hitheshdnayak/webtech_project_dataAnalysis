// import i4 from './images/feedback_image.jpg'
import "./csss.css"
import { Link } from 'react-router-dom';
import React from 'react'

class Options extends React.Component {
    render() {
        return (
            <div>
                <Link to="/signup" style={{ float: "left" }} className="right">About</Link>
                <Link to="/" style={{ float: "left" }} className="right">Home</Link><br /><br /><br />
                <h1 style={{ fontFamily: "fantasy", fontStyle: "oblique" }}>OPTIONS</h1>

                <Link to="/movie"><button style={{ float: "left" }} className="right" >MOVIE</button></Link>

                <Link to="/bmi"><button className="right" style={{ float: "left", height: "50px", width: "100" }}>BMI</button></Link>


                <Link to="/feedback"><button className="right" style={{ float: "left" }}>FEEDBACK</button></Link>


            </div>
        )
    }
}
export default Options