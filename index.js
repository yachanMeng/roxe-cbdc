const express = require('express');
const  proxy = require('express-http-proxy');
const fs = require('fs');
const path = require('path');
const app = express();
// const html = fs.readFileSync(path.join(__dirname,'./dist/index.html'));
app.use(express.static('dist'));
app.use('/roxe-merchant-cbdc', proxy("http://roxe-gateway-sandbox.roxe.pro",{
  proxyReqPathResolver:(req) => {
    return '/roxe-merchant-cbdc' + req.url;
  }
}));
app.all("*",(req,res) => {
  console.log(`path:${req.path}`)
  res.sendFile(path.join(__dirname,'./dist/index.html'))
})
app.listen(4200);