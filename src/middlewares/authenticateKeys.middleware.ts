import e, { Request, Response, NextFunction } from "express";
import { IUserUpdate } from "../interfaces/users";

const authenticateKeysMiddleware = async (request:Request, response:Response, next:NextFunction) =>{
    
    const user:IUserUpdate = request.body;
    const userKeys = Object.keys(user)
    const nonAuthorizedKeys = ["isAdm", "isActive","id"];
    
    userKeys.map(k =>{
        if(nonAuthorizedKeys.includes(k)){
            return response.status(401).json({message: "Invalid data!"})
        };
        
    });


    return next()
};

export default authenticateKeysMiddleware;