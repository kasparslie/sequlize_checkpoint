const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser())
const models = require("./models");


app.get('/', (req, res) => {
    res.send('Welcome to my Checkpoint_3 api')
})



models
.sequelize
.sync({})
.then(() => app.listen(3001, () => console.log(`App listening
on port 3001!`)));