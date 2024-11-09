const express = require('express')
const app = express();
const path = require("node:path");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessagesRouter');
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', indexRouter);
app.use('/', newMessageRouter);


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Your app is running on ${PORT} successfully`)
})