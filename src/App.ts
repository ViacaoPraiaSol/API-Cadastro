import express, { NextFunction, Request, Response } from "express";
import cors from 'cors'
import router from "./routes";


const App = express();

App.use(express.json());
App.use(cors());
App.use(router);
App.get('/', (req, res) => res.status(200).send('Rodando Aqui!'));
App.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: err.message});
  next();
})

export default App;