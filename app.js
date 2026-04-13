const express = require('express');
const app = express();
const port = 3000;
const postRouter = require("./router/appRouter")
const errorHeandler = require("./middlewares/errorHandler")
const notFound = require("./middlewares/notFound")

app.use(express.static('public'));

app.use(express.json());

app.use('/posts', postRouter);

app.use(errorHeandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`example listening on port ${port}`);
});