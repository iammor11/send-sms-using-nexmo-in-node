const Nexmo = require('nexmo');

// Init Nexmo
const nexmo = new Nexmo({
  apiKey: '******',
  apiSecret: '*******'
}, { debug: true });


// Catch form submit
exports.noVerify = (req, res, next) => {
  // res.send(req.body);
  // console.log(req.body);
 
  nexmo.message.sendSms(
    'contactname', '**********mblno', 'hi from ...',
    (err, responseData) => {
      if(err) {
        console.log('error',err);
      } else {
        console.log('data',responseData);
      }
    }
  );
};
