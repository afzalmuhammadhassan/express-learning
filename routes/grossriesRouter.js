const {Router} = require('express')

const router = Router();


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
    res.send(data);
})

router.post('/', (req, res) => {
    data.push(req.body);
    res.send('Data upadated');
})

router.get('/:item', (req, res) =>{
    const {item} = req.params
    const result = data.find(d => d.item === item);
    res.send(result)
})

module.exports = router;