// load libraries
const express = require('express');
const cors = require('cors');

const cart = [
    { id: 'abc', item: 'apple', quantity: 10 },
    { id: 'def', item: 'grapes', quantity: 8 },
    { id: 'ghi', item: 'banana', quantity: 6 },
    { id: 'jkl', item: 'pear', quantity: 4 },
]

// configure env variables
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

// create an instance of express
const app = express();

// Add CORS header to the response
app.use(cors());
app.use(express.json());

// create resource
// PUT /cart
app.put('/cart/:id', (req, resp) => {
    const id = req.params['id'];
    const payload = req.body;
    console.info(payload);
    const idx = cart.findIndex(i => i.id == payload.id);
    console.info(idx);
    if (idx < 0) {
        cart.push(payload);
    } else {
        cart[idx] = payload;
    }

    resp.status(200);
    resp.type('application/json')
    resp.send({});  
})

// GET /cart
app.get('/cart', (req, resp) => {
    resp.status(200);
    resp.type('application/json');
    resp.json(cart);
})

app.get('/cart/:id', (req, resp) => {
    let id = req.params.id;
    let cartItem = cart.find(i => i.id == id)
    resp.type('application/json')
    if (cartItem === undefined) {
        resp.status(404);
        resp.json({});
        return;
    }
    resp.status(200);
    resp.json(cartItem);
})

// listen port
app.listen(PORT, () => {
    console.info(`Application is listening on ${PORT} at ${new Date()}`);
})