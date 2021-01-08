const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const albumRouter= require("./routes/album_routes")
const trackRouter= require("./routes/track_routes")
app.use(bodyParser())
const models = require("./models");


app.get('/', (req, res) => {
    res.send('Welcome to my Checkpoint_3 api')
})
app.use('/album/', albumRouter)
app.use('/track/', trackRouter)



models
.sequelize
.sync({})
.then(() => app.listen(3001, () => console.log(`App listening
on port 3001!`)));