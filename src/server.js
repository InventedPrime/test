var express = require('express');
var app = express();
const port = '8080'

app.get('/', (req, res) => {
    res.sendFile('/workspace/public/', 'index.html')
})

app.get('/api/data', (req, res) => {
    const data = [{
        World: "hello"
    }];

    res.json(data);
})

app.listen(port, (callback) => {
    console.log(`${port} is working!`);
})