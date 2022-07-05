const express = require('express');
const  proxy = require('express-http-proxy');
const app = express();
app.use(express.static('dist'));
app.use('/roxe-merchant-cbdc', proxy("http://roxe-gateway-sandbox.roxe.pro",{
  proxyReqPathResolver:(req) => {
    return '/roxe-merchant-cbdc' + req.path;
  }
}));
app.all("*",(req,res) => {
  console.log(`path:${req.path}`)
  res.status(404).send("not found");
})
app.listen(3000);