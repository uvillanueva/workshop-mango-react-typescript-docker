import express from "express";
import { User } from "../../mongo/User";
import bcrypt from "bcryptjs";
import JWTService from "../services/JWTService";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
const router = express.Router();

router.post('/refresh/', AuthMiddleware, async (req, res) => {
});

router.post('/register/', async (req, res) => {
})

router.post('/login/', async (req, res) => {
})

export { router as Auth }