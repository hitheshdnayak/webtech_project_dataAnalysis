import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Project", {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
function (err){
    if(err) throw err;
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const bmischema = new mongoose.Schema({
    name: String,
    gender: String,
    height:Number, 
    weight:Number 
})

const feedSchema = new mongoose.Schema({
    feed1: String,
    feeds1: String,
    feed2: String,
    feeds2: String,
    feedlast:String
})

const movieschema=new mongoose.Schema({
    rate1:Number,
    feedb1:String,
    rate2:Number,
    feedb2:String,
    rate3:Number,
    feedb3:String,
    rate4:Number,
    feedb4:String,
    rate5:Number,
    feedb5:String,
})

const Movieratng =new mongoose.model("Movieratng",movieschema)
const User = new mongoose.model("User", userSchema)
const Feedb =new mongoose.model("Feedb", feedSchema)
const Bmishm =new mongoose.model("Bmishm", bmischema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.post("/feedback",(req,res)=> {
    const feedsav= new Feedb(req.body);
    feedsav.save((err)=>{
    if(err){
        res.send({message:"Erro occurred"})
    }
    else{
        res.send({message : "Submitted feedback"});
    }
    });
});

app.post("/bmi",(req,res)=> {
    const bmisave= new Bmishm(req.body);
    console.log(req.body)
    bmisave.save((err)=>{
    if(err){
        res.send({message:"Erro occurred"})
    }
    else{
        res.send({message : "Submitted details"});
    }
    });
});


app.get("/bmi",async(req,res) => {
    var bmi_avg=[0]
    let db=mongoose.connection.db;
    db.collection('bmishms').find({},{ projection :{id : 0,"name" : 0,"gender" : 0,_v : 0}}).toArray((err,result)=>{
        console.log(result)
        for(let i=0;i<result.length;i++){
            bmi_avg[0]=bmi_avg[0] + (result[i].weight/(result[i].height*result[i].height))
        }
        bmi_avg[0]=bmi_avg[0]/result.length
        bmi_avg[0]=Math.round((bmi_avg[0]+Number.EPSILON)*100)/100
        console.log(bmi_avg)
        res.send(bmi_avg)
    })
})
       
app.get("/movie",async(req,res) => {
    var ave_arr=[];
    var t1=0,t2=0,t3=0,t4=0,t5=0;
    let db=mongoose.connection.db;
    db.collection('movieratngs').find({},{ projection :{_id : 0,"feedb1" : 0,"feedb2" : 0,"feedb3" : 0,"feedb4" : 0,"feedb5" : 0}}).toArray((err,result)=>{
        console.log(result)    
        for(let i =0;i < result.length ; i++){
                t1 = t1 + result[i].rate1;
                t2 = t2 + result[i].rate2;
                t3 = t3 + result[i].rate3;
                t4 = t4 + result[i].rate4;
                t5 = t5 + result[i].rate5;
            }
            ave_arr[0]=Math.round((t1/result.length+Number.EPSILON)*100)/100
            ave_arr[1]=Math.round((t2/result.length+Number.EPSILON)*100)/100
            ave_arr[2]=Math.round((t3/result.length+Number.EPSILON)*100)/100
            ave_arr[3]=Math.round((t4/result.length+Number.EPSILON)*100)/100
            ave_arr[4]=Math.round((t5/result.length+Number.EPSILON)*100)/100
            console.log(ave_arr)
            res.send(ave_arr);
        })
    })

app.post("/movie",(req,res)=>{
    const movier=new Movieratng(req.body);
    // console.log(req.body)
    movier.save((err)=>{
        if(err){
            res.send({message:"Erro occurred"})
        }
        else{
            res.send({message : "Submitted feedback"});
        }
        });
    });

app.listen(9002,() => {
    console.log("BE started at port 9002")
})