const express = require('express')
const app = express()

require('./router')(app)


// app.get('/', function (req, res) {
//   res.send('Hello World')
//   console.log("req.params.id")
// })

// app.get('/employee/:id',function(req, res){
//    res.send(req.params.id)
//    console.log(req.params.id)
// })

// app.post('/employee/',function(req, res){
//   let input = req.query
//   console.log(input)
//   res.send(input)
// })

// app.post('/employee/',function(req, res){
//   let input = req.query
//   console.log(input)
//   res.send(input)
// })

// app.post('/header/',function(req, res){
//   const input = req.header;
//   console.log(input);
//   res.send(input);
// })



app.listen(9998,function(){
console.log("srver is running port no :9998")
})