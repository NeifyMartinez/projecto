import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import indexRouter from './routes/index.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

//settings

//middlewares
app.set(morgan, 'dev');
app.set('views', join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(indexRouter);




const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})