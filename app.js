const express = require('express');
const userRouter = require('./router/user.router');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('log: api running'));

app.use('/user', userRouter);

app.use((err, req, res, next) => {
    let code = 400;

    if (err && err.statusCode) code = err.statusCode();

    return res.status(code).json({ message: err.message });
});