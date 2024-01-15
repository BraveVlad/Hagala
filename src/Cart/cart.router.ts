import { Router } from "express";

export const router = Router();


router.get("/", (request, response) => {
    try {
        response.end("Hello!")
    } catch (error) {
        response.end(error)
    }
}); 