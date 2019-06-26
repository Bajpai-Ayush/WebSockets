//Requiring the required packages
const express = require('express');
const socket = require('socket.io');

//Setting up the App
const app = express();
const PORT = 3000;
const server = app.listen( PORT, function () {

    console.log(`Server is listening on PORT ${PORT}`);

});

//Displaying the web page
app.use(express.static(__dirname + '/public'));

//Socket Setup
var io = socket(server);
io.on('connection', function(socket) {

    console.log(`Connection Established`, socket.id);

    socket.on('chat', function(data) {

        io.sockets.emit('chat', data);

    });

    socket.on('typing', function(data) {

        socket.broadcast.emit('typing', data);

    });

});