// const express = require("express");
// const { CarModel } = require("../model/Car.model");

// const carRouter = express.Router();

// //Get Data

// carRouter.get("/", async (req, res) => {
//   let sortByPrice = req.query.sortByPrice;
//   let sortByRating = req.query.sortByRating;
//   let queryData = req.query;

//   try {
//     if (sortByPrice === "price_low") {
//       //sorting low to high
//       const data = await CarModel.find({}).sort({ price: 1 });
//       res.send(data);
//     } else if (sortByPrice === "price_high") {
//       //sorting high to low
//       const data = await CarModel.find({}).sort({ price: -1 });
//       res.send(data);
//     } else if (sortByRating === "rating_low") {
//       //sorting low to high
//       const data = await CarModel.find({}).sort({ rating: 1 });
//       res.send(data);
//     } else if (sortByRating === "rating_high") {
//       //sorting high to low
//       const data = await CarModel.find({}).sort({ rating: -1 });
//       res.send(data);
//     } else {
//       const car = await CarModel.find(queryData);
//       res.send(car);
//     }
//   } catch (err) {
//     console.log(err);
//     console.log({ Error: "Error While Get Data" });
//     res.status(404).send(err.message);
//   }
// });

// // Get by Id

// carRouter.get("/:id", async (req, res) => {
//   let ID = req.params.id;

//   try {
//     const car = await CarModel.findById({ _id: ID });
//     res.send(car);
//   } catch (err) {
//     console.log(err);
//     res.send({ Error: "Error Coming While GET BY ID Request" });
//     res.status(404).send(err.message);
//   }
// });

// // Post Data

// carRouter.post("/create", async (req, res) => {
//   let data = req.body;

//   try {
//     //For adding Data in database
//     const new_car = new CarModel(data);
//     await new_car.save();
//     console.log(new_car);
//     res.send("New Data is added Successfully");
//   } catch (err) {
//     console.log(err);
//     res.send({ Error: "Error Coming While Adding data into Database" });
//     res.status(404).send(err.message);
//   }
// });

// //PUT and Patch Request

// carRouter.patch("/:id", async (req, res) => {
//   const ID = req.params.id;
//   const payload = req.body;

//   try {
//     await CarModel.findByIdAndUpdate({ _id: ID }, payload);
//     res.send(`The document with id:${ID} has been updated`);
//   } catch (err) {
//     console.log(err);
//     console.log({ Error: "Error coming While Put Request" });
//     res.status(404).send(err.message);
//   }
// });

// // DELETE REQUEST

// carRouter.delete("/:id", async (req, res) => {
//   const ID = req.params.id;

//   try {
//     await CarModel.findByIdAndDelete({ _id: ID });
//     res.send(`The document with id:${ID} has been deleted`);
//   } catch (err) {
//     console.log(err);
//     console.log({ Error: "Error coming While DELETE Request" });
//     res.status(404).send(err.message);
//   }
// });

// module.exports = {
//   carRouter,
// };

const express = require("express");
const carRouter = express.Router();

const { body, validationResult } = require("express-validator");
const { VarifyToken } = require("../middleware/VarifyToken");
const { AuthModel } = require("../model/Auth.model");
const { CarModel } = require("../model/Car.model");

// Add to the product into the database (Only admin can add Product)
carRouter.post(
  "/add",
  [
    body("image", "Enter an image").not().isEmpty(),
    body("title", "Enter a title").not().isEmpty(),
    body("price", "Enter the price").not().isEmpty(),
    body("offprice", "Enter the offprice").not().isEmpty(),
    body("transmission", "Enter the transmission").not().isEmpty(),
    body("fueltype", "Enter car fuel type").not().isEmpty(),
    body("seat", "Enter seat quantity").not().isEmpty(),
    body("cartype", "Enter the cartype").not().isEmpty(),
    body("rating", "Enter the rating").not().isEmpty(),
    body("km", "Enter km driven").not().isEmpty(),
    body("location", "Select location").not().isEmpty(),
  ],
  VarifyToken,
  async (req, res) => {
    try {
      // If Any Error Exists throw Error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let id = req.authId;
      let isAuth = await AuthModel.findOne({ _id: id });
      if (!isAuth.isSeller) {
        res.status(401).send({ msg: "you dont have permission to add cars" });
      }

      let {
        title,
        image,
        price,
        transmission,
        offprice,
        fueltype,
        seat,
        cartype,
        rating,
        km,
        location,
      } = req.body;

      // any filed are empty throw Error

      let createCar = await CarModel.create({
        title,
        image,
        price,
        transmission,
        offprice,
        fueltype,
        seat,
        cartype,
        rating,
        km,
        location,
        sellerId: id,
        owner: `${isAuth.first_name} ${isAuth.last_name}`,
      });

      if (createCar) {
        res.status(200).send({ msg: "Car Added Successfully!" });
      }
    } catch (error) {
      res.status(500).send({ msg: "Somthing Went Wrong In Car add", error });
    }
  }
);
// user can see all the cars
carRouter.get("/allcars", async (req, res) => {
  try {
    let {
      page = 1,
      price,
      km,
      rating,
      seat,
      transmission,
      fueltype,
    } = req.query;

    let limit = 10;
    let sortcondition = {};
    if (price == "asc") {
      sortcondition.price = 1;
    } else if (price == "desc") {
      sortcondition.price = -1;
    }

    if (rating == "asc") {
      sortcondition.rating = 1;
    } else if (rating == "desc") {
      sortcondition.rating = -1;
    }

    let sortKm = {};
    if (km) {
      sortKm = { km: { $lte: km } };
    }
    if (seat) {
      sortKm.seat = seat;
    }
    if (transmission) {
      sortKm.transmission = transmission;
    }
    if (fueltype) {
      sortKm.fueltype = fueltype;
    }

    let allcars = await CarModel.find(sortKm)
      .limit(limit)
      .skip(limit * (page - 1))
      .sort(sortcondition);
    res.send(allcars);
  } catch (error) {
    res.status(500).send({ msg: "Somthing Went Wrong In getting cars", error });
  }
});

// seller can see only his cars

carRouter.get("/seller/addedcars", VarifyToken, async (req, res) => {
  try {
    let isAuth = await AuthModel.findOne({ _id: req.authId });
    if (!isAuth.isSeller) {
      res.status(401).send({ msg: "you are not authorized to see" });
    }

    let { page = 1 } = req.query;
    let limit = 10;
    let allcars = await CarModel.find({ _id: isAuth._id })
      .limit(limit)
      .skip(limit * (page - 1));
    res.send(allcars);
  } catch (error) {
    res.status(500).send({ msg: "Somthing Went Wrong In getting cars", error });
  }
});

carRouter.patch("/seller/updatecar/:id", async (req, res) => {
  try {
    let carid = req.params.id;

    let payload = req.body;
    await CarModel.findByIdAndUpdate({ _id: carid }, payload);
    res.send({ msg: "car updated successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Somthing Went Wrong In updating cars", error });
  }
});

carRouter.delete("/seller/deletecar/:id", VarifyToken, async (req, res) => {
  try {
    let carid = req.params.id;
    let sellerId = req.authId;
    await CarModel.findByIdAndDelete({ _id: carid, sellerId });
    res.send({ msg: "car deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Somthing Went Wrong In deleting cars", error });
  }
});

module.exports = {
  carRouter,
};
