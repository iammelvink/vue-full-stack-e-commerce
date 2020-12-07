import express from 'express';
import bodyParser from 'body-parser';

/**
 * loading a so called database using json data
 */

const products = [{
        id: '123',
        name: 'Running Shoes',
        price: '60.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-1.jpg',
        averageRating: '5.0',
    }, {
        id: '234',
        name: 'Basketball Shoes',
        price: '120.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-2.jpg',
        averageRating: '5.0',
    }, {
        id: '345',
        name: 'Bright Red Shoes',
        price: '90.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-3.jpg',
        averageRating: '5.0',
    }, {
        id: '456',
        name: 'Fancy Shoes',
        price: '190.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-4.jpg',
        averageRating: '5.0',
    }, {
        id: '567',
        name: 'Skateboard Shoes',
        price: '75.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-5.jpg',
        averageRating: '5.0',
    }, {
        id: '678',
        name: 'High Heels',
        price: '200.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-6.jpg',
        averageRating: '5.0',
    }, {
        id: '789',
        name: 'Dark Shoes',
        price: '100.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-7.jpg',
        averageRating: '5.0',
    }, {
        id: '890',
        name: 'Classic Shoes',
        price: '40.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-8.jpg',
        averageRating: '5.0',
    }, {
        id: '901',
        name: 'Plain Shoes',
        price: '54.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-9.jpg',
        averageRating: '5.0',
    },
    {
        id: '112',
        name: 'Teal Dress Shoes',
        price: '330.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-10.jpg',
        averageRating: '5.0',
    },
    {
        id: '223',
        name: 'Fancy Boots',
        price: '230.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-11.jpg',
        averageRating: '5.0',
    }, {
        id: '334',
        name: 'Gold Shoes',
        price: '180.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
        imageUrl: '/images/shoes-12.jpg',
        averageRating: '5.0',
    }
];

export let cartItems = [
    products[0],
    products[2],
    products[3],
];

/**
 *End loading a so called database using json data
 */
const app = express();
/*
adds a body property to our req argument
for our callbacks
*/
app.use(bodyParser.json());

/*
app.get takes a callback
whenever '/hello' endpoint receives a get request
the callback has two main arguments
'/hello' = endpoint to listen on
req = request > contains details of request made
res = response > 
res.send sends back a response to our request
*/
app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.post('/hello', (req, res) => {
    // using back ticks
    res.send(`Hello ${req.body.name}`)
});

// :name is a url parameter
app.get('/hello/:name', (req, res) => {
    // using back ticks
    res.send(`Hello ${req.params.name}`);
});
/**
 * '/hello' routes are just for reference
 */

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});

// Looking for the cart of a specific user
// :userId is a url parameter
app.get('/api/users/:userId/cart', (req, res) => {
    res.status(200).json(cartItems);
});

// Looking for a product of a specific product id
// :productId is a url parameter
app.get('/api/products/:productId', (req, res) => {
    const {
        productId
    } = req.params;
    const product = products.find((product) => product.id === productId);
    // Check if product exists
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json('Could not find the product!');
    }
});

// Adding products to users cart 
// :userId is a url parameter
app.post('/api/users/:userId/cart', (req, res) => {
    const {
        productId
    } = req.body;
    const product = products.find((product) => product.id === productId);
    // Check if product exists in cart
    if (product) {
        cartItems.push(product);
        res.status(200).json(cartItems);
    } else {
        res.status(404).json('Could not find the product!');
    }
});

// Deleting products from users cart,
// using filter function
// :userId and :productId are url parameters
app.delete('/api/users/:userId/cart/:productId', (req, res) => {
    const {
        productId
    } = req.params;
    cartItems = cartItems.filter((product) => product.id !== productId)
    res.status(200).json(cartItems);
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})