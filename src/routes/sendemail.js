import {Router} from 'express';
const router = Router();

router.post('/send-email', (req, res) => {
    const { name, numeroTel, email, message } = req.body;
    let contentHTML = `
        <h1>Contact information</h1>

        <ul>
            <li>Name: ${name}</li>
            <li>Phone: ${numeroTel}</li>
            <li>Email: ${email}</li>
        </ul>
        <p>${message}</p>
    `;
});
export default  router;