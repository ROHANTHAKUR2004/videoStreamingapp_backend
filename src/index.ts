import express from 'express';
import ServerConfig from "./config/serverconfig";
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors'

const app = express();

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors : {
        origin : "*",
        methods : ["GET", "POST"]
    }
});

io.on("connection", (socket) =>{
    console.log("New user connected");

    socket.on("disconnect" , () =>{
        console.log("User discoonected")
    })
})



server.listen(ServerConfig.PORT , ()=>{
    console.log(`server started at port ${ServerConfig.PORT}`);
})