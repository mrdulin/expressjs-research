var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword',
  },
});

var mailOptions1 = {
  from: 'company@gmail.com',
  to: 'customer@yahoo.com',
  subject: 'Sending Email to customers',
  html: '<h1>Email to Custmer</h1>',
};
var mailOptions2 = {
  from: 'company@gmail.com',
  to: 'sales@yahoo.com',
  subject: 'Sending Email to sales department',
  html: '<h1>New Sales Order</h1>',
};

Promise.all([mailOptions1, mailOptions2].map((opt) => transporter.sendMail(opt).catch(console.log))).then(
  ([sendMail1Res, sendMail2Res]) => {
    console.log('sendMail1Res: ', sendMail1Res);
    console.log('sendMail2Res: ', sendMail2Res);
  },
);
