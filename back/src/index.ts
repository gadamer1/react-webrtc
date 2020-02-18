import { Socket } from "socket.io";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

const io = require("socket.io")({ path: "/webrtc" });

const server = app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});

io.listen(server);

const peers = io.of("/webrtcPeer");

let connectedPeers = new Map();

peers.on("connection", (socket: Socket) => {
  console.log(socket.id);

  socket.emit("connection-success", socket.id);

  connectedPeers.set(socket.id, socket);

  socket.on("disconnect", () => {
    console.log("disconnected");
    connectedPeers.delete(socket.id);
  });

  socket.on("offerOrAnswer", data => {
    for (const [socketID, socket] of connectedPeers.entries()) {
      if (socketID !== data.socketID) {
        console.log("offerOrAnswer");
        console.log(socketID, data.payload.type);
        socket.emit("offerOrAnswer", data.payload);
      }
    }
  });
  socket.on("candidate", data => {
    for (const [socketID, socket] of connectedPeers.entries()) {
      if (socketID !== data.socketID) {
        console.log("candidate", socketID);
        socket.emit("candidate", data.payload);
      }
    }
  });
});
