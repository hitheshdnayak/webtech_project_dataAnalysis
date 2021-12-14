import React, { Component } from 'react'
import "./csss.css"
import axios from "axios"
import { Link } from 'react-router-dom';


class Movie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rate1: 0,
            feedb1: "",
            rate2: 0,
            feedb2: "",
            rate3: 0,
            feedb3: "",
            rate4: 0,
            feedb4: "",
            rate5: 0,
            feedb5: "",
            arr: [],
            t: false,
        }
    }

    handelrd1 = (e) => {
        this.setState({ rate1: e.target.value })
    }
    handelrd2 = (e) => {
        this.setState({ rate2: e.target.value })
    }
    handelrd3 = (e) => {
        this.setState({ rate3: e.target.value })
    }
    handelrd4 = (e) => {
        this.setState({ rate4: e.target.value })
    }
    handelrd5 = (e) => {
        this.setState({ rate5: e.target.value })
    }

    handeltxt1 = (e) => {
        this.setState({ feedb1: e.target.value })
    }
    handeltxt2 = (e) => {
        this.setState({ feedb2: e.target.value })
    }
    handeltxt3 = (e) => {
        this.setState({ feedb3: e.target.value })
    }
    handeltxt4 = (e) => {
        this.setState({ feedb4: e.target.value })
    }
    handeltxt5 = (e) => {
        this.setState({ feedb5: e.target.value })
    }

    submitt = () => {

        this.setState({ t: true })
        axios.post("http://localhost:9002/movie", { rate1: this.state.rate1, feedb1: this.state.feedb1, rate2: this.state.rate2, feedb2: this.state.feedb2, rate3: this.state.rate3, feedb3: this.state.feedb3, rate4: this.state.rate4, feedb4: this.state.feedb4, rate5: this.state.rate5, feedb5: this.state.feedb5 })
            .then(res => {
                alert(res.data.message)
            })
        axios.get("http://localhost:9002/movie")
            .then(res => {
                this.setState({ arr: res.data, t: true })
                // console.log(this.state.arr)
                alert(this.state.arr)
            })

    }


    render() {
        const array = this.state.arr

        return (
            <div>
            <Link to="/options" style={{float:"left"}} className="right">Options</Link><br/><br/><br/>
                <i>
                    <h1 className="header">
                        MOVIE RATINGS</h1>
                </i>
                <br /><br />
                <div id="movie_opts" style={{ fontSize: "larger", marginLeft: "80px" }}>
                    <button id="movie_1" className="btn" style={{ backgroundColor: "rgb(190, 228, 24)" }}>Movie 1</button>
                    <p id="task_1" className="task">IMDB</p>
                    <form>
                        <div onChange={this.handelrd1}>
                            <label id='op1' for="rate1" required >RATE:</label>
                            <input type='radio' style={{ margin: "2px" }} name='rate1' id='a1' value="1" />
                            <input type='radio' style={{ margin: "2px" }} name='rate1' id='a2' value="2" />
                            <input type='radio' style={{ margin: "2px" }} name='rate1' id='a3' value="3" />
                            <input type='radio' style={{ margin: "2px" }} name='rate1' id='a4' value="4" />
                            <input type='radio' style={{ margin: "2px" }} name='rate1' id='a5' value="5" />
                        </div>
                        <input type='text' name="feedb1" id='1' className="txtara" placeholder='Enter your opinion regarding this page' style={{ height: '20%', width: '80%' }} value={this.state.feedb1} onChange={this.handeltxt1} /><br />
                    </form>
                    <div id="m1_div"></div><br />
                    <button id="movie_2" className="btn" style={{ backgroundColor: "rgb(26, 194, 26)" }}>Movie 2</button>
                    <p id="task_2" className="task">IMDB</p>
                    <form>
                        <div onChange={this.handelrd2}>
                            <label id='op2'  >RATE :</label>
                            <input type='radio' style={{ margin: "2px" }} name='rate2' id='a1' value="1" />
                            <input type='radio' style={{ margin: "2px" }} name='rate2' id='a2' value="2" />
                            <input type='radio' style={{ margin: "2px" }} name='rate2' id='a3' value="3" />
                            <input type='radio' style={{ margin: "2px" }} name='rate2' id='a4' value="4" />
                            <input type='radio' style={{ margin: "2px" }} name='rate2' id='a5' value="5" />
                        </div>
                        <input type='text' name="feedb2" id='1' className="txtara" placeholder='Enter your opinion regarding this page' style={{ height: '20%', width: '80%' }} value={this.state.feedb2} onChange={this.handeltxt2} /><br />

                    </form>        <div id="m2_div"></div><br />
                    <button id="movie_3" className="btn" style={{ backgroundColor: "rgb(26, 194, 172) " }}>Movie 3</button>
                    <p id="task_3" className="task">IMDB</p>
                    <form>
                        <div onChange={this.handelrd3}>
                            <label id='op3'  >RATE:</label>
                            <input type='radio' style={{ margin: "2px" }} name='rate3' id='a1' value="1" />
                            <input type='radio' style={{ margin: "2px" }} name='rate3' id='a2' value="2" />
                            <input type='radio' style={{ margin: "2px" }} name='rate3' id='a3' value="3" />
                            <input type='radio' style={{ margin: "2px" }} name='rate3' id='a4' value="4" />
                            <input type='radio' style={{ margin: "2px" }} name='rate3' id='a5' value="5" />
                        </div>
                        <input type='text' name="feedb3" id='1' className="txtara" placeholder='Enter your opinion regarding this page' style={{ height: '20%', width: '80%' }} value={this.state.feedb3} onChange={this.handeltxt3} /><br />
                    </form>        <div id="m3_div"></div><br />
                    <button id="moive_4" className="btn" style={{ backgroundColor:"rgb(26, 194, 172)"}}>Movie 4</button>
                    <p id="task_4" className="task">IMDB</p>
                    <form>
                        <div onChange={this.handelrd4}>
                            <label id='op4' >RATE:</label>
                            <input type='radio' style={{ margin: "2px" }} name='rate4' id='a1' value="1" />
                            <input type='radio' style={{ margin: "2px" }} name='rate4' id='a2' value="2" />
                            <input type='radio' style={{ margin: "2px" }} name='rate4' id='a3' value="3" />
                            <input type='radio' style={{ margin: "2px" }} name='rate4' id='a4' value="4" />
                            <input type='radio' style={{ margin: "2px" }} name='rate4' id='a5' value="5" />
                        </div>
                        <input type='text' name="feedb1" id='1' className="txtara" placeholder='Enter your opinion regarding this page' style={{ height: '20%', width: '80%' }} value={this.state.feedb4} onChange={this.handeltxt4} /><br />
                    </form>        <div id="m4_div"></div><br />
                    <form>
                        <button id="moive_5" className="btn" style={{ backgroundColor: "rgb(195, 20, 15) " }}>Movie 5</button>
                        <p id="task_5" className="task">IMDB</p>
                        <div onChange={this.handelrd5}>
                            <label id='op5' >RATE:</label>
                            <input type='radio' style={{ margin: "2px" }} name='rate5' id='a1' value="1" />
                            <input type='radio' style={{ margin: "2px" }} name='rate5' id='a2' value="2" />
                            <input type='radio' style={{ margin: "2px" }} name='rate5' id='a3' value="3" />
                            <input type='radio' style={{ margin: "2px" }} name='rate5' id='a4' value="4" />
                            <input type='radio' style={{ margin: "2px" }} name='rate5' id='a5' value="5" />
                        </div>
                        <input type='text' name="feedb5" id='1' className="txtara" placeholder='Enter your opinion regarding this page' style={{ height: '20%', width: '80%' }} value={this.state.feedb5} onChange={this.handeltxt5} /><br />
                        <input type="submit" id="btn" value="submit" onClick={this.submitt} />
                        {/* {this.state.t ? <div ><Graph/></div> : null} */}
                        {/* <canvas><Graph/></canvas> */}

                    </form>

                </div>
            </div>
        )
    }
}

export default Movie