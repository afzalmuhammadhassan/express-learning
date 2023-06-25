const {Router} = require('express')

const router = Router();

const stores = [
    {
        id: 1,
        store: 'Milk Shop',
        miles: 0.4
    },
    {
        id: 2,
        store: 'Bakry',
        miles: 1.0
    },
    {
        id: 3,
        store: 'Eggs Shop',
        miles: 1.5
    },
    {
        id: 4,
        store: 'Fruits Shop',
        miles: 2.0
    }
]


router.get('/', (req, res) =>{
    const {miles} = req.query;
    console.log(miles);
    const milesParse = parseInt(miles);
    console.log('out of if ', miles);
    if(miles && !isNaN(milesParse)){
        //Currently This is not functioning well comparison is not working
        const result = stores.filter(d => d.miles <= milesParse)
        console.log('This is  the Result:', result);
        res.send(result)
    }
    else{

        res.send(stores)
    }
})

router.get('/:store', (req, res) => {
    const {store}= req.params;
    console.log(store);
    const result = stores.filter(d => d.store === store)
    res.send(result);
})

module.exports = router;