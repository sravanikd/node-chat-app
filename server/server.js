const path=require('path');
const socketIO=require('socket.io');
const express=require('express');
const http=require('http');

const publicPath=path.join(__dirname,'../public');
const port=process.env.PORT || 3000;
const app=express();
var server=http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket) =>{
    console.log("NEW USER CONNECTED");

socket.on('disconnect',()=>{
    console.log("new user disconnected");
});
});
server.listen(port, ()=>{
    console.log(`app is now ready on port ${port}`);
});