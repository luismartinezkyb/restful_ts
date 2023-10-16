import { Request, Response } from "express";
import { handleHttpError } from "../utils/errors.handle";


const getBlog = async(req:Request, res:Response)=>{
  try{
    res.json({success:true})
  }catch(e){
    
    handleHttpError(res, "ERROR_GET_Blog");
  }
}
const getBlogs = (req:Request, res:Response)=>{
  try{

  }catch(e){
    handleHttpError(res, 'Error_GET_BlogS');
  }
}
const postBlog = ({body}:Request, res:Response)=>{
  try{
    res.send(body)
  }catch(e){
    
    handleHttpError(res, "ERROR_postBlog");
  }
}
const updateBlog = (req:Request, res:Response)=>{
  try{

  }catch(e){
    
    handleHttpError(res, "ERROR_updateBlogs");
  }
}
const deleteBlog = (req:Request, res:Response)=>{
  try{

  }catch(e){
    
    handleHttpError(res, "ERROR_deleteBlog");
  }
}

export{
  getBlog,
  getBlogs,
  postBlog,
  deleteBlog,
  updateBlog
}