var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var ACCOUNTS = require("./account_data.json");

app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  var token = req.query.token;
  var account = ACCOUNTS[token];

  if ( account ) {
    return res.status(200).json(account);
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
});

app.post("/:token/process", function(req, res) {
  var formData = req.body.formData;
      account  = ACCOUNTS[req.params.token];

  if (!account) return res.status(401).json({ error: "Unauthorized" });

  completedAccount = JSON.parse(JSON.stringify(account));
  completedAccount.completed = true;

  return res.status(201).json({ account: completedAccount, formData: formData });
})

app.listen(8081, function () {
  console.log('App is listening on port 8081!');
});
