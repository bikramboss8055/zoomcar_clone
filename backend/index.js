const express = require("express");
const cors = require("cors");
const { connection } = require("./config/connection");
const { carRouter } = require("./routes/Car.route");
const { authRouter } = require("./routes/Auth.route");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("This is Our Home page");
});

app.use("/cars", carRouter);
app.use('/authentication',authRouter)


app.listen(process.env.port, async () => {
  connection();
  console.log(`Port is Running at ${process.env.port}`);
});
