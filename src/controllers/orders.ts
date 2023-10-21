import { Request, Response } from "express"
import { handleHttpError } from "../utils/errors.handle"
import { RequestExt } from "../middlewares/session"

const getOrderController = (req:RequestExt, res:Response)=>{
  try {
    console.log(req.user)
    res.send('¡HLA')
  } catch (error) {
    handleHttpError(res, 'Error Getting Items on Orders', error)
  }
}

export {getOrderController}