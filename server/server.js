const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);

let chatHistory = [];


io.on('connection', socket => {

  console.log('Connected', socket.id);

  socket.on('text', (payload) => {
    console.log('broadcasting', payload);
    chatHistory.push(payload);
    io.sockets.emit('incoming', payload);
  });

  socket.on('history', () => {
    io.sockets.emit('history', chatHistory);
  })

});