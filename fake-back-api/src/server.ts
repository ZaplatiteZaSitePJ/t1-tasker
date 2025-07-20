import express, { Request, Response } from "express";


const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/tasks', (req, res) => {
    
})

app.listen(PORT, () => {
  console.log(` Server working on http://localhost:${PORT}...`);
});