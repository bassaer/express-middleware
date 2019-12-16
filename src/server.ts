import express, { RequestHandler } from 'express';

const app = express();

const firstMiddleware: RequestHandler = (req, res, next) => {
    if (!res.data) {
        res.data = {
            message: []
        }
    }
    res.data.message.push("1st middleware");
    next();
};

const secondMiddleware: RequestHandler = (req, res, next) => {
    res.data.message.push("2nd middleware");
    next();
};

const thirdMiddleware: RequestHandler = (req, res, next) => {
    res.data.message.push("3rd middleware");
    next();
};


app.use(firstMiddleware);
app.use(secondMiddleware);
app.use(thirdMiddleware);

app.get('/', (req, res) => {
    res.send(res.data.message.join('\n'));
});

app.listen(3000, () => {
    console.log("running...");
});
