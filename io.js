var io = require('socket.io')();

var ioSecteur = io;

ioSecteur.on('connection', function (socket) {
  console.log('Client connected !');
  ioSecteur.emit('position:get');
});

/*
setInterval(function() {
  ioSecteur.emit('position:get');
}, 10000);

setInterval(function() {
  ioSecteur.emit('position:set', {name: Math.round(Math.random()*30)});
}, 5000);
*/
ioSecteur.emit('position:get', { });
module.exports = io;
