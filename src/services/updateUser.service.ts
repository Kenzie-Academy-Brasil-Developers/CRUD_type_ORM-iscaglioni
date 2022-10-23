import { IUser, IUserUpdate } from "../interfaces/users";
import {hidePassword} from "./hidePassword.service";
import { AppError } from "../error/appError";
import { getUserDataOrThrowAnError } from "./getUserDataOrThrowAnError.service";
import { hash } from "bcryptjs";

const updateUserService = async (updates:IUserUpdate, id:string, isAdm:boolean):Promise<IUser | null> =>{
    
    const {user, userRepo} = await getUserDataOrThrowAnError(id);

    if(!user){
        throw new AppError(400, "User does not exists!");
    };

    const {name, email, password} = updates;
    //const hashedPass = hash(password as string,10)
    await userRepo.update( 
        id,
        {
        ...(user.name && { name: name }),
        ...(user.email && {email: email}),
        ...(user.password && {password: password})
    });

    const {user:newUser} = await getUserDataOrThrowAnError(id);

    return hidePassword(newUser);
};
export default updateUserService;