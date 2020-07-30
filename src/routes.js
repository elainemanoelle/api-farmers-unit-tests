const routes = require("express").Router();
const FarmerController = require('./app/controllers/FarmerController');

routes.get("/farmers/:param", FarmerController.findFarmersByNameOrDoc);

module.exports = routes;
