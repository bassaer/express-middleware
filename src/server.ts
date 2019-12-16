import express from 'express';

const app = express();

app.get('/', (req: any, res: any) => {
    res.send("hello, world");
});

app.listen(3000, () => {
    console.log("running..");
});
