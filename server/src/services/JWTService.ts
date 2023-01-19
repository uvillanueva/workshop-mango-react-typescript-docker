import jwt from 'jsonwebtoken';
import createError from 'http-errors';
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET ?? 'azer';
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET ?? 'tyuio';

class JWTService {
    static signWrapper(payload: any) {
    }

    static signWrapperRefresh(payload: any) {
    }

    static verifyWrapper(token: string) {
    }

    static verifyRefreshWrapper(refresh: string) {
    }
}

export default JWTService;