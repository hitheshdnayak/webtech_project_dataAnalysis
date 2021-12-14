var http = require('http');
var url = require('url');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//database creation
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('assgndb');
    var myobj = [{ _id: 01, "hsp_name": "KIMS", "hsp_dept": "Dental", "hsp_timings": "7-10" },
    { _id: 02, "hsp_name": "AIIMS ", "hsp_dept": "Neurology", "hsp_timings": "8-9" },
    { _id: 03, "hsp_name": "Citizen Hospital", "hsp_dept": "General", "hsp_timings": "9-11" }];
    dbo.collection('hospital').insertMany(myobj, function (err, res) {
        dbo.collection("hospital").find({})
            // db.close();
        });
    });

//server creation
http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end(data.toString());
    response.end("hello");
}).listen(8081,() => {
    console.log("BE started at port 8081")
})
