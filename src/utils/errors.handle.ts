import { Response } from "express"

export const handleHttpError = (res: Response, error:string, errorRaw?:any,code:number = 403 )=>{
  console.log(errorRaw)
  res.status(code)
  res.send({ error });
  return;
}
