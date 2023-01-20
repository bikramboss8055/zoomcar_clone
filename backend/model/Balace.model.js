const mongoose = require("mongoose");

const balanceSchema = mongoose.Schema(
  {
    authId: { type: mongoose.Schema.Types.ObjectId, ref: "auth" },
    balance:{ type:Number,default:0}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const BalanceModel= mongoose.model('balance',balanceSchema)

module.exports={BalanceModel}