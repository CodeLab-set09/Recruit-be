import express, { Application } from "express";
import cors from "cors";
import { mainApp } from "./main";
import { dbConfig } from "./utils/dbConfig";

const app:Application= express()
const PORT = 3344

app.use(()=>{})
app.use(cors())

app.use(express.json())

mainApp(app);

app.listen(process.env.PORT || PORT, () => {
    console.clear();
  
    dbConfig();
  });