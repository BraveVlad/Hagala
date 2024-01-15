import { Router } from "express";
import { Supermarket } from "./supermarket.model";

export const router = Router();

router.get("/chains-list", async (request, response) => {

    console.log("detected request for chains list ")

    const chainsList = await Supermarket.find({}, { "_id": false, "branches._id": false, "branches.products": false }) as Supermarket[];

    if (!chainsList) {
        response.status(500);
        response.send("Couldn't fetch supermarket chains list.")
    }

    response.status(200);
    response.send(chainsList);
});