const express = require("express")
const { CarModel } = require("../model/Car.model")




const carRouter = express.Router()


//Get Data

carRouter.get("/", async (req, res) => {
    let sortByPrice = req.query.sortByPrice
    let sortByRating = req.query.sortByRating
    let queryData = req.query

    try {

        if (sortByPrice === "price_low") {
            //sorting low to high
            const data = await CarModel.find({}).sort({ price: 1 })
            res.send(data)

        } else if (sortByPrice === "price_high") {
            //sorting high to low
            const data = await CarModel.find({}).sort({ price: -1 })
            res.send(data)

        } else if (sortByRating === "rating_low") {
            //sorting low to high
            const data = await CarModel.find({}).sort({ rating: 1 })
            res.send(data)

        } else if (sortByRating === "rating_high") {
            //sorting high to low
            const data = await CarModel.find({}).sort({ rating: -1 })
            res.send(data)

        }

        else {
            const car = await CarModel.find(queryData)
            res.send(car)

        }



    } catch (err) {
        console.log(err)
        console.log({ "Error": "Error While Get Data" })
        res.status(404).send(err.message)

    }



})



// Get by Id

carRouter.get("/:id", async (req, res) => {
    let ID = req.params.id

    try {
        const car = await CarModel.findById({ _id: ID })
        res.send(car)


    } catch (err) {
        console.log(err)
        res.send({ "Error": "Error Coming While GET BY ID Request" })
        res.status(404).send(err.message)

    }


})



// Post Data

carRouter.post("/create", async (req, res) => {

    let data = req.body

    try {
        //For adding Data in database
        const new_car = new CarModel(data)
        await new_car.save()
        console.log(new_car)
        res.send("New Data is added Successfully")


    } catch (err) {
        console.log(err)
        res.send({ "Error": "Error Coming While Adding data into Database" })
        res.status(404).send(err.message)

    }
})



//PUT and Patch Request

carRouter.patch("/:id", async (req, res) => {
    const ID = req.params.id
    const payload = req.body;


    try {
        await CarModel.findByIdAndUpdate({ _id: ID }, payload)
        res.send(`The document with id:${ID} has been updated`)

    } catch (err) {
        console.log(err);
        console.log({ "Error": "Error coming While Put Request" });
        res.status(404).send(err.message)
    }
})


// DELETE REQUEST

carRouter.delete("/:id", async (req, res) => {
    const ID = req.params.id



    try {
        await CarModel.findByIdAndDelete({ _id: ID })
        res.send(`The document with id:${ID} has been deleted`)

    } catch (err) {
        console.log(err);
        console.log({ "Error": "Error coming While DELETE Request" });
        res.status(404).send(err.message)
    }
})








module.exports = {
    carRouter
}
