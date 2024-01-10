require("dotenv").config();
import db from '../db'
const express = require("express");

const app = express();

app.listen(process.env.PORT, () => console.log("App is running on Port: " + process.env.PORT));