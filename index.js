const express = require('express');
const bodyparser = require('body-parser');
const hbs = require('hbs');
const path = require('path');
const nodemailer = require('nodemailer');





const app = express()


app.use(bodyparser.urlencoded({ extended: true }));
// app.use(express.static('assets'))
// app.set('view engine', 'hbs');
// app.set("views", "views")
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(__dirname +'/assets'))
hbs.registerPartials("views/partials")







app.get("/", async (req, res) => {

  res.render("index");
});

app.post("/", async (req, res) => {
  const am = req.body.kemail;
  // console.log(am)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'engineerak569@gmail.com',
      pass: 'krpehbhucbqodnbu',

    },
    tls: {
      rejectUnauthorized: false // Add this option to ignore SSL certificate errors
    }
   
  })
 const mailoption = {
    from: "engineerak569@gmail.com",
    to: req.body.kemail,
    subject: "Rhosigma Engineering & Automations Pvt. Ltd ",
    text:
      "I'm Saeed Lanjekar, the founder of Rhosigma Engineering & Automations Pvt. Ltd. and I'd like to personally thank you for subscribing up to our newsletter. We established Rhosigma in order to provide Best IT & Industrial Solution providing accurate measuring & design, in the overall industrial sector.I'd love to hear what you think of Electronic & IT Technology  and if there is anything we can improve.If you have any questions, please reply to this email.I'm always happy to help! "
  };
  transporter.sendMail(mailoption, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/');
      // console.log('email send' + info.response)
    }
  })

});



app.get("/about", async (req, res) => {
  res.render("about");
});

app.get("/services", async (req, res) => {
  res.render("services");
});

app.get("/blog", async (req, res) => {
  res.render("blog");
});

app.get("/career", async (req, res) => {
  res.render("career");
});

app.get("/project", async (req, res) => {
  res.render("project");
});



app.get("/contact", async (req, res) => {
  res.render("contact");
});

app.get("/service", async (req, res) => {
  res.render("contact");
});


app.get("/Service/embedded-firmware-development", async (req, res) => {

  res.render("firmware");
});

app.get("/Service/embedded-hardware-development", async (req, res) => {
  res.render("hardware");
});

app.get("/Service/mobile-application-development", async (req, res) => {
  res.render("mobileapp");
});

app.get("/Service/web-application-development", async (req, res) => {
  res.render("webapp");
});





app.get("/Service/desktop-application-development", async (req, res) => {
  res.render("desktop");
});

app.get("/Service/end-to-end-solution", async (req, res) => {
  res.render("e2e");
});

app.get("/Service/EDD-Developoment-for-Device-Manufacturers", async (req, res) => {
  res.render("EDD");
});

app.get("/Service/EDD-Analysis-and-Verification", async (req, res) => {
  res.render("EddAnalysis");
});

app.get("/Service/FDI-Development-for-Device-Manufacturers", async (req, res) => {
  res.render("Fdi");
});

app.get("/Service/DTM-Development-for-Device-Manufacturers", async (req, res) => {
  res.render("dtm");
});

app.get("/Service/hart-portocol-implementation", async (req, res) => {
  res.render("hart");
});

app.get("/blogs/Remote-Troubleshoot", async (req, res) => {
  res.render("Remote");
});

app.get("/blogs/Bluetooth-Low-Energy", async (req, res) => {
  res.render("ble");
});

app.get("/blogs/Industrial-Wi-Fi", async (req, res) => {
  res.render("Wifi");
});

app.get("/blogs/Firmware-over-the-air", async (req, res) => {
  res.render("fota");
});

app.get("/blogs/Internet-of-Things", async (req, res) => {
  res.render("Iot");
});

app.get("/blogs/Human-Machine-Interface", async (req, res) => {
  res.render("HMI");
});

app.get("/blogs/RS485-to-USB-Converter", async (req, res) => {
  res.render("RS485");
});

app.get("/blogs/Long-Range-Radio", async (req, res) => {
  res.render("lora");
});

app.get("/blogs/Industrial-IoT", async (req, res) => {
  res.render("IIOT");
});












app.listen(3000, function () {
  console.log("Server started on port 3000.");
});

