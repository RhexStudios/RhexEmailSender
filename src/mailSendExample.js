/*var transporter = nodemailer.createTransport({
  port:465,
  service: 'gmail',
  auth: {
      user: 'henriquegs002@gmail.com',
      pass: 'nezlmrvivdnpvggl'
  },
  secure: true
});

route.post('/text-mail', (req,res)=>{

  var mailOptions = {
      from: 'henriquegs002@gmail.com',
      to: 'ickbola@gmail.com',
      subject: 'teste',
      text: 'mais facil que parece',
      html: ''
  };
  
  transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
          console.log(err)
      } else {
          console.log(info.response)
      }
  })
  */
