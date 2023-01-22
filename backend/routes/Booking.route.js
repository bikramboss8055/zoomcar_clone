const { Router } = require("express");
const { VarifyToken } = require("../middleware/VarifyToken");
const { BalanceModel } = require("../model/Balace.model");
const { BookingModel } = require("../model/Booking.model");
const { CarModel } = require("../model/Car.model");
const bookingRouter = Router();

bookingRouter.post("/bookcar/:id", VarifyToken, async (req, res) => {
  try {
    let carId = req.params.id;
    let userId = req.authId;
    let bookingRate = req.body.bookingRate;

    let isBook = await BookingModel.findOne({ _id: carId, userId: userId });

    if (isBook) {
      res.status(400).send({ msg: "You booked this car already" });
    }

    let AccountBalance = await BalanceModel.findOne({ authId: userId });
    console.log('AccountBalance: ', AccountBalance.balance);
    console.log('bookingRate: ', bookingRate);

    if (Number(AccountBalance.balance) < Number(bookingRate)) {
        
      res.send({ msg: "you don't have sufficient balance" });
    }
    let newBalance = Number(AccountBalance.balance) - Number(bookingRate);

    await BalanceModel.findByIdAndUpdate(
      { _id: AccountBalance._id },
      { balance: newBalance }
    );

    let car = await CarModel.findOne({ _id: carId });
    await BookingModel.create({ sellerId: car.sellerId, userId, carId });
    res.send({ msg: "car booking success" });
  } catch (error) {
    res.status(500).send({ msg: "Somthing Went Wrong In booking cars", error });
  }
});

bookingRouter.get("/getuserbookedcar", VarifyToken, async (req, res) => {
  try {
    let userId = req.authId;

    let bookingDetails = await BookingModel.find({ userId }).populate([
      "carId",
    ]);

    res.send(bookingDetails);
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Somthing Went Wrong In get booking cars", error });
  }
});

bookingRouter.get("/getsellerbookedcar", VarifyToken, async (req, res) => {
  try {
    let sellerId = req.authId;

    let bookingDetails = await BookingModel.find({ sellerId }).populate([
      "carId",
      "userId",
    ]);

    res.send(bookingDetails);
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Somthing Went Wrong In get booked cars", error });
  }
});

module.exports = { bookingRouter };
