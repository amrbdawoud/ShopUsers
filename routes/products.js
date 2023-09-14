const e = require('express');
const express = require('express');
const router = express.Router();
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const Products = require('../schemas/products');

router.get('/', async(req, res) => {
    const products = await Products.find({});
    res.send(products);
});

router.post('/', (req, res) => {
    const body = req.body;

    const newProduct= new Products({
        title: body.title,
        price: body.price,
        rating: body.rating,
        number_of_stocks: body.number_of_stocks
    });

    newProduct.save();

    res.send(newProduct);
});
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    if(!id) {
        res.send('id is not defined');
        return;
    }

    const products = await Products.findOneAndUpdate({_id: id}, {...body}, {new: true});
    res.send(products);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    if(!id) {
        res.send('id is not defined');
        return;
    }

    const result = await Products.findByIdAndDelete(id);
    res.send(result)
});

module.exports = router;