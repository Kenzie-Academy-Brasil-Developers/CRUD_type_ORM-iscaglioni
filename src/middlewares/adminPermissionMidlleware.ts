import { Request, Response, NextFunction } from "express";

const adminPermissionMiddleware = (request:Request, response:Response, next:NextFunction) => {
    
    const {isAdm } = request.user;

    if(!isAdm){
        return response.status(403).json({
            message: "Missing admin permissions"
        });
    };
    return next();
};
export default adminPermissionMiddleware;