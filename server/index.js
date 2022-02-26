import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200).json('hello!')
})

app.listen(8080, () => {
  console.log('🚀 Server START!');
});