import { Response } from "express"

export const handleHttpError = (res: Response, error:string, code:number = 403)=>{
  res.status(code)
  res.send({ error });
  return;
}
