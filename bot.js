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
socket.emit("user joined", "←", "red")
socket.emit("messafe", "leavebot")
socket.on('user left', function (data) {
    //  if (data.toString().toLowerCase() == "?bot, hey") {
      socket.emit("message",data.nick + "has left teh trollbox"))
    //  }
      }
socket.on('message', function (data) {
     if (data.toString().toLowerCase() == "?&*(&secret") {
      socket.emit("message","shit and piss basically. made by sah (speedyplane2247#6969 on diksord, homevar: YTJ)")
     }
      }
 socket.on('message', function (data) {
     if (data.toString().toLowerCase() == "peace is dedicated") {
      socket.emit("message","shoutouts to guys : darkok, nutshoe, domenic, alexapps, franx1024, 1024x2, speedyplane (me). also noxx is fucking cringe, can u 93fags fuck off, & dfu for ownership!")
     }
      }

})
