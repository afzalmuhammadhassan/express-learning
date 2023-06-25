const {Router} = require('express')

const router = Router();

router.post('/login', (req, res) =>{
    const {username, password} = req.body;
    if(username && password){
        if(req.session.user){
            res.send(req.session)
        }else{
            req.session.user = username;
            res.send('data entered');
        }
    }
})

module.exports = router;