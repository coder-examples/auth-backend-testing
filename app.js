const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

/* make dummy jwt token based on user id from req.body */
app.post('/login', (req, res) => {
    /*return base64 encoded string of user id*/
    const token = Buffer.from(req.body.id).toString('base64');
    res.json({ token });
});

/* make dummy jwt verify based on user id from req.body */
app.post('/verify', (req, res) => {
    /*return base64 encoded string of user id*/
    const {id, token} = req.body;
    const decoded = Buffer.from(token, 'base64').toString('ascii');
    res.json({ verified: decoded === id });
});

app.listen(3001, () => console.log('Server running on port 3000'));