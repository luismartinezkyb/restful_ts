import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (id:string)=>{
  const jwt = sign({id}, `${JWT_SECRET}`, {
    expiresIn:'2h'
  })
  return jwt;
}
const verifyToken = async(token:string)=>{
  const isValid = verify(token, `${JWT_SECRET}`);
  return isValid;
}

export {generateToken, verifyToken}