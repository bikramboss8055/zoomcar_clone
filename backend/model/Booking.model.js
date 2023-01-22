const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    carId: { type: mongoose.Schema.Types.ObjectId, ref: "car" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "auth" },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "auth" },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const BookingModel= mongoose.model('Booking',bookingSchema)

module.exports = {BookingModel}