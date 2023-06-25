const express = require('express');
const cookiesParser = require('cookie-parser')
const session = require('express-session')
const GrossryRouter = require('./routes/grossriesRouter.js');
const MarketRouter = require('./routes/marketRouter.js');
const Auth = require('./routes/auth');

const app = new express();

app.use(express.json());
app.use(cookiesParser());
app.use(session({
    secret: "ASLKJFLDKJFDSLKFJDLFSKJFLSF",
    resave: false,
    saveUninitialized: false
}));


app.listen(3000, () => {
    console.log('Server is listing on port 3000 and running on nodemon')
})

app.use('/grossry',GrossryRouter);
app.use('/market',MarketRouter);
app.use(Auth);