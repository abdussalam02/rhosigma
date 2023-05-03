const express = require('express');
const routes = express.Router()
const nodemailer = require('nodemailer')



routes.get("/", async (req, res) => {
  res.render("index");
});

routes.get("/about", async (req, res) => {
  res.render("about");
});

routes.get("/services", async (req, res) => {
  res.render("services");
});

routes.get("/blog", async (req, res) => {
  res.render("blog");
});

routes.get("/career", async (req, res) => {
  res.render("career");
});

routes.get("/project", async (req, res) => {
  res.render("project");
});



routes.get("/contact", async (req, res) => {
  res.render("contact");
});



routes.get("/firmware", async (req, res) => {
  res.render("firmware");
});

routes.get("/hardware", async (req, res) => {
  res.render("hardware");
});

routes.get("/mobileapp", async (req, res) => {
  res.render("mobileapp");
});

routes.get("/webapp", async (req, res) => {
  res.render("webapp");
});

routes.get("/desktop", async (req, res) => {
  res.render("desktop");
});

routes.get("/e2e", async (req, res) => {
  res.render("e2e");
});

routes.get("/EDD", async (req, res) => {
  res.render("EDD");
});

routes.get("/EddAnalysis", async (req, res) => {
  res.render("EddAnalysis");
});

routes.get("/Fdi", async (req, res) => {
  res.render("Fdi");
});

routes.get("/dtm", async (req, res) => {
  res.render("dtm");
});

routes.get("/hart", async (req, res) => {
  res.render("hart");
});

routes.get("/Remote", async (req, res) => {
  res.render("Remote");
});

routes.get("/ble", async (req, res) => {
  res.render("ble");
});

routes.get("/wifi", async (req, res) => {
  res.render("Wifi");
});

routes.get("/fota", async (req, res) => {
  res.render("fota");
});

routes.get("/Iot", async (req, res) => {
  res.render("Iot");
});

routes.get("/HMI", async (req, res) => {
  res.render("HMI");
});

routes.get("/RS485", async (req, res) => {
  res.render("RS485");
});

routes.get("/lora", async (req, res) => {
  res.render("lora");
});

routes.get("/IIOT", async (req, res) => {
  res.render("IIOT");
});







module.exports = routes;