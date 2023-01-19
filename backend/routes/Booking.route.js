const {Router}= require('express')
const {VarifyToken}= require('../middleware/VarifyToken')
const bookingRouter= Router()


bookingRouter.post('/bookcar/:id',VarifyToken, async(req,res)=>{

    try {
        let carid= req.params.id
        


    } catch (error) {
        res
    .status(500)
    .send({ msg: "Somthing Went Wrong In booking cars", error });
    }
})

module.exports ={bookingRouter}