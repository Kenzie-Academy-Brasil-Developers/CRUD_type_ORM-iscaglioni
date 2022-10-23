import { Response } from "express";

export class AppError extends Error {
    statusCode;

    constructor(statusCode:number, message:string){
        super()
        this.statusCode = statusCode;
        this.message = message;

    };
};

export const handleErrorFunction = (error: AppError, response:Response) =>{
    
    const { statusCode, message } = error;

    return response.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};