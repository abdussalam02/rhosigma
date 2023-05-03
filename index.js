const express = require('express');
const bodyparser = require('body-parser');
const hbs = require('hbs');
const path = require('path')
// const routes = require('./routes/main')
const nodemailer = require('nodemailer')

const app = express()


app.use(bodyparser.urlencoded({ extended: true }));


// app.use(express.static('assets'))
// app.set('view engine', 'hbs');
// app.set("views", "views")

app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname+'/assets')));
hbs.registerPartials("views/partials")


app.get("/", async (req, res) => {
    res.render("index.hbs");
  });
  
  app.get("/services", async (req, res) => {
    res.render("services");
  });
  
  app.get("/product", async (req, res) => {
    res.render("product");
  });
  
  app.get("/solutionbuilt", async (req, res) => {
    res.render("solutionbuilt");
  });
  
  app.get("/project", async (req, res) => {
    res.render("project");
  });
  
  app.get("/about", async (req, res) => {
    res.render("about");
  });
  
  app.get("/contact", async (req, res) => {
    res.render("contact");
  });
  
  app.get("/firmware", async (req, res) => {
    res.render("firmware");
  });

  app.get("/blog", async (req, res) => {
    res.render("blog");
  });
  
  app.get("/hardware", async (req, res) => {
    res.render("hardware");
  });
  
  app.get("/mobileapp", async (req, res) => {
    res.render("mobileapp");
  });
  
  app.get("/webapp", async (req, res) => {
    res.render("webapp");
  });
  
  app.get("/desktop", async (req, res) => {
    res.render("desktop");
  });
  
  app.get("/e2e", async (req, res) => {
    res.render("e2e");
  });
  
  app.get("/EDD", async (req, res) => {
    res.render("EDD");
  });
  
  app.get("/EddAnalysis", async (req, res) => {
    res.render("EddAnalysis");
  });
  
  app.get("/Fdi", async (req, res) => {
    res.render("Fdi");
  });
  
  app.get("/dtm", async (req, res) => {
    res.render("dtm");
  });
  
  app.get("/hart", async (req, res) => {
    res.render("hart");
  });
  
  app.get("/Remote", async (req, res) => {
    res.render("Remote");
  });
  
  app.get("/ble", async (req, res) => {
    res.render("ble");
  });
  
  app.get("/wifi", async (req, res) => {
    res.render("Wifi");
  });
  
  app.get("/fota", async (req, res) => {
    res.render("fota");
  });
  
  app.get("/Iot", async (req, res) => {
    res.render("Iot");
  });
  
  app.get("/HMI", async (req, res) => {
    res.render("HMI");
  });
  
  app.get("/RS485", async (req, res) => {
    res.render("RS485");
  });
  
  app.get("/lora", async (req, res) => {
    res.render("lora");
  });
  
  app.get("/IIOT", async (req, res) => {
    res.render("IIOT");
  });
  
  


// app.get('/', (req, res) => res.send('Home Page Route'));

// app.get('/about', (req, res) => res.send('About Page Route'));

// app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

// app.get('/contact', (req, res) => res.send('Contact Page Route'));


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
