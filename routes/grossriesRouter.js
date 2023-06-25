const {Router} = require('express')

const router = Router();

router.use((req, res, next) =>{
    if(req.session.user){
        next();
    }else{
        res.send(401)
    }
})

const data = [
    {
        'item': 'Milk',
        'quantity': '10'
    },
    {
        'item': 'Eggs',
        'quantity': '12'
    },
    {
        'item': 'Banana',
        'quantity': '16'
    },
]



router.get('/', (req, res)=> {
    console.log(req.cookies);
    res.send(data);
})

router.post('/', (req, res) => {

    data.push(req.body);
    res.cookie("visited",true, {
        maxAge: 30000
    })
    res.send('Data upadated');
})

router.get('/:item', (req, res) =>{
    const {item} = req.params
    const result = data.find(d => d.item === item);
    res.send(result)
})

router.get('/shopping/cart', (req, res) =>{
    if(!req.session.cart){
        res.send("No Session is found") 
    }
    else{
        res.send(req.session.cart)
    }
})

router.post('/shopping/cart', (req, res) => {
    const {item, quantity} = req.body;

    const cartData = {item, quantity}
    const {cart} = req.session;
    if(cart){
        req.session.cart.items.push(cartData)
    }
    else{
        req.session.cart = {
            items:[cartData]
        }
    }
    res.send("Data is updated")
})

module.exports = router;