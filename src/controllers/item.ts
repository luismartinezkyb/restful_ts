import { Request, Response } from "express";
import { handleHttpError } from "../utils/errors.handle";
import { Car } from "../interfaces/car.interface";

const getItem = async(req:Request, res:Response)=>{
  try{
    res.json({success:true})
  }catch(e){
    
    handleHttpError(res, "ERROR_GET_ITEM");
  }
}
const getItems = (req:Request, res:Response)=>{
  try{

  }catch(e){
    handleHttpError(res, 'Error_GET_ITEMS');
  }
}
const postItem = ({body}:Request, res:Response)=>{
  try{
    res.send(body)
  }catch(e){
    
    handleHttpError(res, "ERROR_postItem");
  }
}
const updateItem = (req:Request, res:Response)=>{
  try{

  }catch(e){
    
    handleHttpError(res, "ERROR_updateItems");
  }
}
const deleteItem = (req:Request, res:Response)=>{
  try{

  }catch(e){
    
    handleHttpError(res, "ERROR_deleteItem");
  }
}

export{
  getItem,
  getItems,
  postItem,
  deleteItem,
  updateItem
}