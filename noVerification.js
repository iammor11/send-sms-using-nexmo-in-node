const Nexmo = require('nexmo');
const socketio = require('socket.io');

// Init Nexmo
const nexmo = new Nexmo({
  apiKey: '16c9f4d9',
  apiSecret: 'hZvC5mRq2swVesj8'
}, { debug: true });


// Catch form submit
exports.noVerify = (req, res, next) => {
  // res.send(req.body);
  // console.log(req.body);
 
  nexmo.message.sendSms(
    'immor11', '923200206211', 'hi from immor11',
    (err, responseData) => {
      if(err) {
        console.log('error',err);
      } else {
        console.log('data',responseData);
      }
    }
  );
};


// Connect to socket.io
// const io = socketio(server);
// io.on('connection', (socket) => {
//   console.log('Connected');
//   io.on('disconnect', () => {
//     console.log('Disconnected');
//   })
// });
