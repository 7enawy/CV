const express = require("express");
const bodyParser = require("body-parser");
 const request = require("request");
const https = require("https");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")

})

app.post("/", function (req, res) {

const firstname = req.body.aaa;
const email = req.body.aaaa;
const subject = req.body.aaaaa;
const message = req.body.aaaaaa;
 const data = {
   members: [
     {
       email_address: email,
       status: "subscribed",
       merge_fields: {
         FNAME: firstname,
         LNAME: subject,
       }
     }
   ]
 };

const jsonData = JSON.stringify(data);

const url = "https://us18.api.mailchimp.com/3.0/lists/16437decac";

const options = {
  method: "POST" ,
  auth: "abnaoub1:f08714f57073f264239f5c3df047c743-us18"
}

const request = https.request(url, options, function (response) {

  if (response.statuscode === 200) {
    res.send("yes");
  }else {
    res.send("no");
  }

  response.on("data", function (data) {
    console.log(JSON.parse(data));

  })

})

request.write(jsonData);
request.end();


});

app.listen(process.env.PORT || 3000, function functionName() {
  console.log("server run");

});






////f08714f57073f264239f5c3df047c743-us18
//listid   16437decac
