import express from "express";
import { helloWord, notFound } from "../controllers";
import { default as swaggerRoutes } from "./swagger";
import loginRateLimiter from "../utils/middlewares/rateLimiter";
import validator from "../utils/validation/validator";
import { userRegistrationSchema } from "../utils/validation";

const app = express.Router();

app.use("/api", swaggerRoutes);

/**
 * @openapi
 * /:
 *  get:
 *      tags:
 *          - "Hello world"
 *      summary: "This route returns hello world to the user"
 *      description: "This route return hello world to the user"
 *      responses:
 *          200:
 *              description: "The server is running"
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: "Hello world"
 *                              status:
 *                                  type: "string"
 *                                  example: "SUCCESS"
 *
 */
app.get("/", helloWord);

// sample usage of rate limiting:
// app.get("/", loginRateLimiter, helloWord)

/**
 * @openapi
 *  /{any}:
 *      x-swagger-router-controller: notFound
 *      get:
 *          tags:
 *              - "Not Found"
 *          summary: "Any other routes are handled by this and its not found basically "
 *          responses:
 *              404:
 *                  description: "The requested URL is not found"
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                              msg:
 *                                  type: string
 *                                  example: "Not found"
 *                              status:
 *                                  type: string
 *                                  example: "FAILURE"
 */
app.use(notFound);

export default app;
