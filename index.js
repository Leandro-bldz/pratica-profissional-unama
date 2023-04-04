const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/inicial.html'));
})

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
})

router.get('/cadastro',function(req,res){
  res.sendFile(path.join(__dirname+'/cadastro.html'));
})

app.use('/',router);
app.listen(process.env.port || 3000);

console.log("Server rodando!");