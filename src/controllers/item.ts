import { Request, Response } from "express";
import { handleHttpError } from "../utils/errors.handle";

import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";

const getItem = async(req:Request, res:Response)=>{
  try{
    const data = await getCar(req.params.id);
    if(!data) {
      return handleHttpError(res, 'Car not found');
    }
    
    res.json(data)
  }catch(e){
    
    handleHttpError(res, "ERROR_GET_ITEM", e);
  }
}
const getItems = async(req:Request, res:Response)=>{
  try{
    const data = await getCars();
    res.json(data);
  }catch(e){
    handleHttpError(res, 'Error_GET_ITEMS');
  }
}
const postItem = async({body}:Request, res:Response)=>{
  try{
    
    const responseItem = await insertCar(body);
    res.json(responseItem)
  }catch(e){
    handleHttpError(res, "ERROR_postItem", e);
  }
}
const updateItem = async({params,body}:Request, res:Response)=>{
  try{
    const {id} = params;
    const responseItem = await updateCar(id, body);
    res.json(responseItem)
    
  }catch(e){
    handleHttpError(res, "ERROR_updateItems");
  }
}
const deleteItem = async({params}:Request, res:Response)=>{
  try{
    const {id} = params;
    const data = await getCar(id);
    if(!data) {
      return handleHttpError(res, 'Car not found');
    }
    const responseItem = await deleteCar(id);
    res.status(200).json(responseItem)
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