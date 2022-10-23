import { IUserRequest,IUser } from "../interfaces/users";
import { UserEntity } from "../entities/user.entity";
import AppDataSource from "../data-source";
import { hash } from "bcryptjs";
import { hidePassword } from "./hidePassword.service";
import { v4 as uuidV4 } from "uuid";
import { AppError } from "../error/appError";

export const registerUserService = async (user:IUserRequest):Promise<IUser| string | null> => {
    
    const { name, email, isAdm, password } = user;
    const userRepo = AppDataSource.getRepository(UserEntity);
    const emailAllreadyBeingUsed = await userRepo.findOneBy({email});
    
    if(emailAllreadyBeingUsed){
        throw new AppError(400, "Email allready being used!");
    };

    if(!password){
        throw new AppError(400,"Password is required!")
    };

    const newUser = userRepo.create({
        id: uuidV4(),
        name,
        email,
        isAdm,
        isActive: true,
        password: await hash(password, 10),
        createdAt: new Date(),
        updatedAt: new Date()
    });

    await userRepo.save(newUser);
    const U = await userRepo.findOneBy({email});
    
    return hidePassword(U);
};
