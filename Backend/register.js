const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.sendStatus(403);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });

    app.get('/registrar', authenticateToken, (req, res) => {
        res.json({ message: 'Acesso ao registro permitido' });
    });    
};

//funciona?
//WATZAP 12/11 "O register tá uma merda."