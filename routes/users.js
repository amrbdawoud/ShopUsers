const e = require('express');
const express = require('express');
const router = express.Router();
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const Users = require('../schemas/users');

router.get('/', async(req, res) => {
    const users = await Users.find({});
    res.send(users);
});

router.post('/', (req, res) => {
    const body = req.body;

    const newUser= new Users({
        name: body.name,
        age: body.age,
        email: body.email,
        purchased_products: body.purchased_products
    });

    newUser.save();

    res.send(newUser);
});
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    if(!id) {
        res.send('id is not defined');
        return;
    }

    const users = await Users.findOneAndUpdate({_id: id}, {...body}, {new: true});
    res.send(users);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    if(!id) {
        res.send('id is not defined');
        return;
    }

    const result = await Users.findByIdAndDelete(id);
    res.send(result)
});

module.exports = router;