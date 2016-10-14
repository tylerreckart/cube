import express from 'express';

const app = express();
app.use('/', express.static('app'));

const port = process.env.PORT || 3000;
const server = app.listen(port);
