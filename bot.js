const io = require('socket.io-client');
 
let client = 1

let char = ''
 
const sock = io("http://www.windows93.net:8081", {
  path: '/socket.io',
  transportOptions: {
    polling: {
      extraHeaders: {
        "Origin": "http://www.windows93.net",
        "Referer": "http://www.windows93.net/trollbox/index.php"
      }
    }
  }
})
 
sock.on("connect", () => {
socket.on('message', function (data) {
      if (data.toString().toLowerCase() == "?bot, hey") {
      socket.emit("message","heyo"+Math.floor(Math.random() * 200);)
      }
      }
})
