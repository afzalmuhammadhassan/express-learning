const express = require('express');
const GrossryRouter = require('./routes/grossriesRouter.js');
const MarketRouter = require('./routes/marketRouter.js');

const app = new express();

app.use(express.json());


app.listen(3000, () => {
    console.log('Server is listing on port 3000 and running on nodemon')
})

app.use('/grossry',GrossryRouter);
app.use('/market',MarketRouter);