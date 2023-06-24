const express = require('express')
const ejs = require('ejs')

const app = new express();

app.use(express.json());

// app.set()

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

app.listen(3000, () => {
    console.log('Server is listing on port 3000 and running on nodemon')
})

app.get('/', (req, res)=> {
    res.send(data);
})

app.post('/', (req, res) => {
    data.push(req.body);
    res.send('Data upadated');
})

app.get('/:item', (req, res) =>{
    const {item} = req.params
    const result = data.find(d => d.item === item);
    res.send(result)
})