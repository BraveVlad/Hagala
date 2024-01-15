import { Router } from "express";

export const router = Router();

router.get("/chains", (request, response) => {

    console.log("detected request for all chains")

});