import { Request, Response } from "express";

const helloWord = (req: Request, res: Response) => {
  res.json({
    msg: "Hello world",
  });
};

const notFound = (req: Request, res: Response) => {
  // but later use this to throw error
  res.json({
    msg: "Not found",
  });
};

export { helloWord };
