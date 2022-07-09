import { Router } from 'express';

const router = Router();
//routes
router.get('/', (req, res) => {
    res.render('index', { title: 'Homepage Neify Martinez' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me' });
});

router.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects Page' });
});

export default router

