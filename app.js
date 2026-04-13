const express = require('express');
const app = express();
const port = 3000;
const postRouter = require("./router/appRouter")

app.use(express.static('public'));

app.use(express.json());

app.use('/posts', postRouter);

app.listen(port, () => {
    console.log(`example listening on port ${port}`);
});