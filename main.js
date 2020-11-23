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

// create resource
// GET /cart
app.get('/cart', (req, resp) => {
    resp.status(200);
    resp.type('application/json');
    resp.json(cart);
})

// listen port
app.listen(PORT, () => {
    console.info(`Application is listening on ${PORT} at ${new Date()}`);
})