import express from 'express';
import createError from "http-errors";
import JWTService from "../services/JWTService";

export async function AuthMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!req.headers.authorization) {
        return next(new createError.Unauthorized('Access token is required'))
    }
}