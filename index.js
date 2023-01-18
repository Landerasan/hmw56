const express = require('express');
const bodyParser = require('body-parser');
const webRouter = require('./src/routes/web');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


app.get('/health-check', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.use('/api', webRouter);

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
});