import { NextFunction, Request, Response } from "express"

const logMiddleware = ({headers}:Request, res:Response, next: NextFunction)=> {
  const userAgent = headers['user-agent']
  console.log(userAgent)
  next()
}

export { logMiddleware}