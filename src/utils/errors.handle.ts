import { Response } from "express"

export const handleHttpError = (res: Response, error:string, errorRaw?:any,code:number = 403 )=>{
  errorRaw&& console.log(errorRaw)
  res.status(code)
  res.send({ error });
  return;
}
