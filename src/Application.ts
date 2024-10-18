import express from "express";
import cors from 'cors'

const App = express()

App.use(express.json())
App.use(cors())
App.get('/', (req, res) => res.status(200).send('Rodando Aqui!'))


export default App;