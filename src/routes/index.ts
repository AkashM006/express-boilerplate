import express from "express";
import { helloWord } from "../controllers";

const app = express.Router();

app.get("/", helloWord);

app.route("*").all();

export default app;
