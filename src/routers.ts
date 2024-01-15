import express from "express";
import { router as CartRouter } from "./Cart/cart.router";
import { router as SupermarketRouter } from "./Supermarket/supermarket.router";

export function setRouters(app: express.Application) {
    app.use("/api/supermarket", SupermarketRouter);
    app.use("/api/cart", CartRouter);
}