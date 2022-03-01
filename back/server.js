const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const mainRouter = require('./routes/userRouter');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 4000;

const options = {
  origin: 'http://localhost:3001',
};

app.use(cors(options));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/', mainRouter);

app.listen(port, () => {
  console.log(`App port ${port}`);
});