import express from 'express';
import router from './routs/routes.js';
import cors from 'cors';
import DBConnection from './Database/db.js';

const app=express();
app.use(cors());


app.use('/',router)
const port = 3000;
DBConnection();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 