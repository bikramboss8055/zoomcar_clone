let { Router } = require("express");
const { VarifyToken } = require("../middleware/VarifyToken");
const { BalanceModel } = require("../model/Balace.model");


const balanceRouter = Router();

balanceRouter.patch("/updatebalance", VarifyToken, async (req, res) => {
  try {
    let balance= req.body.balance;
    let authId= req.authId;

    let isaccount= await BalanceModel.findOne({authId})

    if(!isaccount){
        res.status(404).send({msg: "Account not found"})
    }
    let newBalance= Number(isaccount.balance)+Number(balance)
    await BalanceModel.findByIdAndUpdate({_id:isaccount._id},{balance:newBalance})

    res.status(200).send({msg: "Balance added successfully"})


  } catch (error) {
    res.status(500).send({ msg: "Somthing Went Wrong In add balance", error });
  }
});

balanceRouter.get('/getbalance',VarifyToken,async (req,res)=>{
    try {
        
        let authId= req.authId;
        let balance= await BalanceModel.findOne({authId})
        res.send(balance)

    } catch (error) {
        res.status(500).send({ msg: "Somthing Went Wrong In get balance", error });
    }
})

module.exports = { balanceRouter };
