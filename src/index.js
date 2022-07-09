import express from 'express';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

//settings

//middlewares
app.set(morgan, 'dev');
app.set('views', join(__dirname, '/views'));
app.set('view engine', 'ejs');

//routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})