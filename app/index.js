const  express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    return res.send('v0.1');
})

app.listen(PORT, HOST);