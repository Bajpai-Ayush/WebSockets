//Making connection with server-side
var socket = io.connect('http://localhost:3000');

//Requiring message and user to show
var messsage = document.getElementById("message");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");

//Send message on server-side
btn.addEventListener('click', function() {

    socket.emit('chat', {

        message : message.value,
        handle : handle.value

    });

});

message.addEventListener('change', function() {

    socket.emit('typing', handle.value);

});

//Response from server to all clients
socket.on('chat', function(data) {

    feedback.innerHTML = "";
    output.innerHTML += '<p><b>' + data.handle + ' :</b> ' + data.message + '</p>';

});

socket.on('typing', function(data) {

    feedback.innerHTML += "<p><em>" + data + " is typing a message...</em></p>";

});