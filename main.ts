import { Application, Request, Response } from "express";

const defaultRoute = async (req:Request, res:Response)=>{
  try {
    res.status(200).json({
      message: "Welcome to Default Route For Recruit!"
    })
  } catch (error) {
    console.log(error);
    
  }
}

export const mainApp =  (app: Application) => {
  try {
    app.get("/", defaultRoute )
  } catch (error) {
    console.log("Error", error);
    
  }
 
   
    };