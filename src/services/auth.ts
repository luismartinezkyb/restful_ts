import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user"
import { generateToken } from "../utils/jwt.handle";
import { encrypt, verified } from "../utils/password.handle";

const findUser = async(email: string) =>{
  const response = await UserModel.findOne({email})
  return response;
}

const registerNewUser = async(user: User)=>{
  const password = await encrypt(user.password)
  const responseUser = await UserModel.create({...user, password});
  return responseUser;
}

const loginUser = async ({email,password}: Auth)=>{
  const user = await findUser(email);
  if(!user){
    return 'USER_NOT_FOUND';
  }
  const passwordHashed = user.password;
  const isCorrectPassword = await verified(password, passwordHashed)
  if(!isCorrectPassword) return "PASSWORD_INVALID";

  const token = generateToken(email);
  return {user, token};
}

export {registerNewUser, loginUser, findUser}