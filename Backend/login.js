const jwt = require('jsonwebtoken');
const secretKey = 'seu_segredo_jwt';

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const validCredentials = true;
    
    if (validCredentials) {
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
});
