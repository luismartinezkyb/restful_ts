import { Request, Response } from "express";
import { handleHttpError } from "../utils/errors.handle"
import { findUser, loginUser, registerNewUser } from "../services/auth";
import { User } from "../interfaces/user.interface";

const registerContoller = async({body}:Request, res:Response)=>{
  try {
    const user = await findUser(body.email);
    if(user){
      return handleHttpError(res, 'USER_ALREADY_REGISTERED')
    }
    const data = await registerNewUser(body);
    res.json(data)
  } catch (error) {
    handleHttpError(res, 'Error en register contoller', error);
  }
}
const loginController = async({body}:Request, res:Response)=>{
  try {
    const {email, password} = body;
    
    const data = await loginUser({email, password});

    if(typeof data === 'string'){
      return handleHttpError(res, data);
    }
    res.status(200).json(data)
    
  } catch (error) {
    handleHttpError(res, 'Error en Login contoller', error);
  }
}


export {
  loginController,
  registerContoller,
}
