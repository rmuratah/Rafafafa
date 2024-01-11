import db from '../db/db'
import { NextFunction, Request, Response } from 'express';
require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

app.get("/users", async (req: Request, res: Response) => res.json(await db.getUsers()))
app.get("/users/:email", async (req: Request, res: Response) => res.json(await db.getUserByEmail(req.params.email)))

app.listen(process.env.PORT, () => console.log("App is running"));