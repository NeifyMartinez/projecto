import { Router } from 'express';

const router = Router();
//routes
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

export default router

