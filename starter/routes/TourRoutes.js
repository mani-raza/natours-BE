
const express = require('express');
const tourController = require('./../controllers/TourController');



const tourRouter = express.Router();

tourRouter.param('id', tourController.checkTourId);

tourRouter
.route('/')
.get(tourController.getTours)
.post(tourController.createTour);

tourRouter
.route('/:id')
.get(tourController.getTourById)
.patch(tourController.updateTour)
.delete(tourController.deleteTour);

module.exports = tourRouter;