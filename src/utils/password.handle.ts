import { hash, compare } from "bcryptjs"

const encrypt = async(password: string)=>{
  const passwordHashed = await hash(password, 8);
  return passwordHashed;
}

const verified =  async(password:string, passwordHashed:string)=>{
  const isCorrect = await compare(password, passwordHashed);
  return isCorrect;
}

export { encrypt, verified}