import { Request, Response } from "express";
import updateUserService  from "../services/updateUser.service";
import { IUserUpdate } from "../interfaces/users";
import { AppError, handleErrorFunction } from "../error/appError";

const updateUserController = async (request:Request, response:Response) => {
    const { id } = request.params;
    const {isAdm} = request.user;
    const updates:IUserUpdate = request.body;

    try {
        const updatedUser = await updateUserService(updates, id, isAdm);
        return response.status(200).json(updatedUser);
    } 
    catch (error) {
        if(error instanceof AppError){ 
            return handleErrorFunction(error, response);
        };
    };
};
export default updateUserController;