// to create a server
import express from 'express';
// to parse body content because node cannot do that on its own
import bodyParser from 'body-parser';
// to connect to mongodb database
import {
    MongoClient
} from 'mongodb';

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
// get end point for products
app.get('/api/products', async (req, res) => {
    // connecting to mongodb database using MongoClient
    const client = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    // connect to specific db
    const db = client.db('vue-db');
    // pull data from specific collection
    // and convert to an array
    const products = await db.collection('products').find({}).toArray();
    res.status(200).json(products);
    // closes connection to database
    client.close();
});

// get end point for user cart per user id
// Looking for the cart of a specific user
// :userId is a url parameter
app.get('/api/users/:userId/cart', async (req, res) => {
    // get the user id
    const {
        userId
    } = req.params;
    // connecting to mongodb database using MongoClient
    const client = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    // connect to specific db
    const db = client.db('vue-db');
    // find one user by id
    const user = await db.collection('users').findOne({
        id: userId
    });
    // check if user exists
    if (!user) return res.status(404).json('Could not find the user!');
    // get all products from the database
    const products = await db.collection('products').find({}).toArray();
    // getting cart item ids of specific user
    const cartItemIds = user.cartItems;
    // get the products by the ids from the cart item ids
    const cartItems = cartItemIds.map(id => products.find(product => product.id === id));
    res.status(200).json(cartItems);
    // closes connection to database
    client.close();
});

// get end point for product per product id
// Looking for a product of a specific product id
// :productId is a url parameter
app.get('/api/products/:productId', async (req, res) => {
    const {
        productId
    } = req.params;
    // connecting to mongodb database using MongoClient
    const client = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    // connect to specific db
    const db = client.db('vue-db');
    // load product from database
    const product = await db.collection('products').findOne({
        id: productId
    });
    // Check if product exists
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json('Could not find the product!');
    }
    // closes connection to database
    client.close();
});

// post end point for user cart per user id
// Adding products to users cart 
// :userId is a url parameter
app.post('/api/users/:userId/cart', async (req, res) => {
    // getting user id
    const {
        userId
    } = req.params;
    // getting product id
    const {
        productId
    } = req.body;
    // connecting to mongodb database using MongoClient
    const client = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    // connect to specific db
    const db = client.db('vue-db');
    // update user
    await db.collection('users').updateOne({
        id: userId
    }, {
        // $addToSet add product WITHOUT duplicates
        $addToSet: {
            cartItems: productId
        },
    });
    // get updated user
    const user = await db.collection('users').findOne({
        id: userId
    });
    // get cart items for specific user
    const cartItemIds = user.cartItems;
    // map product id to actual product
    const cartItems = cartItemIds.map(id => products.find(product => product.id === id));
    // send cart items to user
    res.status(200).json(cartItems);
    // closes connection to database
    client.close();
});

/**
 * delete end point
 for products from user cart
 per user id and per product id
 */
// Deleting products from users cart,
// using filter function
// :userId and :productId are url parameters
app.delete('/api/users/:userId/cart/:productId', async (req, res) => {
    const {
        userId,
        productId
    } = req.params;
    // connecting to mongodb database using MongoClient
    const client = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    // connect to specific db
    const db = client.db('vue-db');
    // deleting cart items by using an update query
    await db.collection('users').updateOne({
        id: userId
    }, {
        /**
         * pull product id from cart items
         * deleting product id from users cart item array
         */
        $pull: {
            cartItems: productId
        },
    });
    // send updated array of users products to the client
    const user = await db.collection('users').findOne({
        id: userId
    });
    // load products from mongodb
    const products = await db.collection('products').find({}).toArray();
    // get ids of cart items
    const cartItemIds = user.cartItems;
    // map product id to actual product
    const cartItems = cartItemIds.map(id => products.find(product => product.id === id));
    // send cart items to user
    res.status(200).json(cartItems);
    // closes connection to database
    client.close();
});

// port that server listens on = port 8000
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})