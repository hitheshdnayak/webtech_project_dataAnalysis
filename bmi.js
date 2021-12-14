import React from "react"
import "./register.css"
import axios from "axios"
import "./csss.css"
import { Link } from 'react-router-dom';
import Image from "./bmi_image.jpg"

var t = false

class Bmi extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            gender: "",
            height: 0,
            weight: 0,
            arr: [],
            t: false,
        }
    }

    handlerd = (e) => {
        this.setState({ gender: e.target.value })
    }
    handeltxt1 = (e) => {
        this.setState({ name: e.target.value })
    }
    handeltxt2 = (e) => {
        this.setState({ height: e.target.value })
    }
    handeltxt3 = (e) => {
        this.setState({ weight: e.target.value })
    }

    submitt = () => {
        var bmi = this.state.weight / (this.state.height * this.state.height)
        bmi = Math.round((bmi + Number.EPSILON) * 100) / 100
        alert("Your bmi " + bmi)
        axios.post("http://localhost:9002/bmi", { name: this.state.name, gender: this.state.gender, height: this.state.height, weight: this.state.weight })
            .then(res => {
                alert(res.data.message)
            })
        axios.get("http://localhost:9002/bmi")
            .then(res => {
                this.setState({ arr: res.data, t: true })
                alert("Avg bmi " + res.data)
            })

    }

    render() {
        var st = {
            fontStyle: "oblique"
        }
        return (
            <div>
                <Link to="/options" style={{ float: "left" }} className="right">Options</Link><br /><br /><br />

                <h2>BMI STATISTICS</h2>
                <table>
                    <tr>
                        <td>
                            <div style={{ margin: "150px" }}>
                                <img src={Image} height="450" width="450" />
                            </div>
                        </td>
                        <td>
                            <div style={{ borderStyle:"double",borderRadius: "5px",backgroundColor: "aqua",padding: "20px"}}>
                            <form style={{ AlignContent: "center" }}>
                                <lable style={st} for="bmi_name" >Name : </lable>
                                <input type="text" style={{display: "inline-block"}} placeholder="Enter name..." value={this.state.name} onChange={this.handeltxt1} required></input>
                                <div onChange={this.handlerd}>GENDER :<br />
                                    <lable style={st} for="male" >Male : </lable>
                                    <input type="radio" id="male" name="gender" classname="gender" value="male" required /><br />
                                    <lable style={st} for="male" >Female : </lable>
                                    <input type="radio" id="female" name="gender" classname="gender" value="Female" /><br />
                                    <lable style={st} for="male" >Other : </lable>
                                    <input type="radio" id="other" name="gender" classname="gender" value="Other" /><br /><br />
                                </div>
                                <lable style={st} for="height">Height : </lable>
                                <input type="number" name="height" id="hei" value={this.state.height} onChange={this.handeltxt2} />
                                <select name="height_type" id="height_type">
                                    <option value="meter" selected>Meter</option>
                                </select>
                                <lable style={st} for="weight">Weight : </lable>
                                <input type="number" name="weight" id="wei" value={this.state.weight} onChange={this.handeltxt3} />
                                <select name="weight_type" id="weight_type">
                                    <option value="Kg">Kg</option>
                                </select>
                                <button type="submit" style={{ margin: "35px", padding: "10px" }} id="bmi_submit" onClick={this.submitt} >Submit</button>
                                {/* {t && <DATA/>} */}
                            </form>
                            </div>
                        </td>
                    </tr>
                </table>

            </div>
        )
    }
}

export default Bmi