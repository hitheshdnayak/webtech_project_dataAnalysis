import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import "./csss.css"

class Feedback extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = { 
            feed1:0,
            feeds1: "",
            feed2:0,
            feeds2:"",
            feed3:0,
            feeds3:"",
             feedlast:"",
        }
        this.handelrd1=this.handelrd1.bind(this);
        this.handelrd2=this.handelrd2.bind(this);
        this.handelrd3=this.handelrd3.bind(this);
    }

    handelrd1(e){
        this.setState({feed1:e.target.value})
    }
    handelrd2(e){
        this.setState({feed2:e.target.value})
    }
    handelrd3(e){
        this.setState({feed3:e.target.value})
    }
    
    handeltxt1=(e)=>{
        this.setState({feeds1:e.target.value})
    }
    handeltxt2=(e)=>{
        this.setState({feeds2:e.target.value})
    }
    handeltxt3=(e)=>{
        this.setState({feeds3:e.target.value})
    }
    handeltxtlst=(e)=>{
        this.setState({feedlast:e.target.value})
    }

    render(){
        var obj={feed1:this.state.feed1,feeds1:this.state.feeds1,feed2:this.state.feed2,feeds2:this.state.feeds2,feedlast:this.state.feedlast}
        const submitt = () => {
                // const {feed1,feeds1,feed2,feeds2,feed3,feeds3,feedlast} = obj
                axios.post("http://localhost:9002/feedback",obj)
                .then( res => {
                    alert(res.data.message)
                })
            }
        
        var gfd={
            border : '1px solid black',
            margin : '10%',
            height : '100%',
            width : '80%'
        }
        var djf ={
            height:'15%',
            border : '10px solid blue'
        }

        return(
            <div name="feed" style={gfd}>
                <h1>FEEDBACK</h1>
            <div name='nav' style={djf}>
            <Link to="/options" style={{float:"left"}} className="right">Options</Link><br/><br/><br/>                
            </div>
            <br></br>
            <form style={{border : '1px solid black'}}>
                <div onChange={this.handelrd1}>
                <label id='op1' for ="feed1" >OPTION 1:movies:</label>
                <input type='radio' name='feed1' id ='a1' value="1" />
                <input type='radio' name='feed1' id ='a2' value="2"/>
                <input type='radio' name='feed1' id ='a3' value="3"/>
                <input type='radio' name='feed1' id ='a4' value="4"/>
                <input type='radio' name='feed1' id ='a5' value="5"/>
                </div>
                <input type='text' name="feeds1"id='1' className="txtara" placeholder='Enter your opinion regarding movies page' style={{height : '20%',width : '80%'}} value={this.state.feeds1} onChange={this.handeltxt1}/><br/>
                <div onChange={this.handelrd2}>
                <label id='op2' for="feed2" >OPTION 2:BMI:</label>
                <input type='radio' name='feed2' id ='ba1' value='1' />
                <input type='radio' name='feed2' id ='ba2' value='2' />
                <input type='radio' name='feed2' id ='ba3' value='3' />
                <input type='radio' name='feed2' id ='ba4' value='4' />
                <input type='radio' name='feed2' id ='ba5' value='5' /><br/>
                </div>
                <input type='text' name="feeds2" id='2' className="txtara" placeholder='Enter your opinion regarding bmi page' style={{height : '20%',width : '80%'}} value={this.state.feeds2} onChange={this.handeltxt2}/><br/>
                <label>OVERALL COMMENT:</label>
                <input type='text' name="feedlast" id='5' className="txtara" placeholder='Enter your overall comment ' style={{height : '50%',width : '80%'}} value={this.state.feedlast} onChange={this.handeltxtlst}/>
                <br/><br/>
                <input type='submit' id='submit' value='SUBMIT' style={{marginLeft : '45%'}} onClick={submitt}/>
            </form>
        </div>)
    }
}

export default Feedback