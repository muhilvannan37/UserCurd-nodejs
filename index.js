const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { PORT } = process.env;
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rootRouter = require("./routes");

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(helmet.hidePoweredBy());
app.use("/", rootRouter);

app.listen(PORT,(error)=>{
    if(error) throw error;
    console.log(`Server starts listening on port: ${PORT}`);
});

//Testing login credentials => email: sam356@gmail.com, password: 123456