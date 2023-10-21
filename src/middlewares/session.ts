import { NextFunction, Request, Response } from "express"
import { handleHttpError } from "../utils/errors.handle"
import { verifyToken } from "../utils/jwt.handle"
import { JwtPayload } from "jsonwebtoken";

export interface RequestExt extends Request{
  user?: string | JwtPayload;
}

const checkJwt = async(req:RequestExt, res:Response, next:NextFunction)=>{
  try {
    const token   = req.headers['authorization'] ;
    if(!token){
      return res.status(401).send('NEED_TOKEN')
    }
    const jwt = token?.split(' ').pop();

    const tokenValid = await verifyToken(`${jwt}`)

    if(!tokenValid) {
      return res.status(401).send('TOKEN_INVALID')
    }
    req.user=tokenValid;
    
    next();
  } catch (error) {
    handleHttpError(res, 'NOT_SESSION', error, 403)
  }
}

export {checkJwt}