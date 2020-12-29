# vue-full-stack-e-commerce

## Repository for my vue-full-stack-e-commerce project

Find out how to build an e-commerce platform. Author Melvin Kisten tackles CRUD functions and connects the system to a database of MongoDB (Document database). Created a full-stack platform using JavaScript. The front-end was created using VueJS and the back-end was created using NodeJS, Vue, Express, MongoDB. Then I used Axios to link my back-end with my front-end. I also used Postman to test my end points. 

1. Methodologies/Project Management:

   - Agile

2. Coding Practices:

   - OOP (Object Oriented Programming)

3. Programming Languages/Frameworks:
   - JavaScript
   - Vue
   - NodeJS
   - Express
   - MongoDB
   - Postman
   - Axios

## Live Demo

- [vue-full-stack-ecommerce](https://vue-full-stack-ecommerce.herokuapp.com/ "vue-full-stack-ecommerce")

## Instructions

1. Make sure you have these installed

   - [NodeJS](https://nodejs.org/en/download/ "NodeJS")
      - I used node version 14.15.3 and npm version 6.14.9 at time of creation
   - [MongoDB](https://www.mongodb.com/try/download/community "MongoDB")
      - I used mongo version 4.4.1 at time of creation
   - [Postman](https://www.postman.com/downloads/ "Postman")
      - I used postman version 7.36.0 at time of creation

2. Clone this repository into your local machine using the terminal (mac) or [Gitbash (PC)](https://git-scm.com/download/win "Gitbash (PC)")

   ```
   > git clone https://github.com/iammelvink/vue-full-stack-e-commerce.git
   ```

3. front-end setup (running on port 8080)
   ```
   > cd front-end
   ```

   ```
   > npm install
   ```

   Compiles and hot-reloads for development
   ```
   > npm run serve
   ```

4. back-end setup (running on port 8000)
   ```
   > cd back-end
   ```

   ```
   > npm install
   ```

5. Insert data into the MongoDB database
   - Start MongoDB server
      ```
      > mongod
      ```

   - Enter mongo shell
      ```
      > mongo
      ```

   - Insert data into the MongoDB database
      ```
      > db.products.insertMany([{ 
         id :"123",
         name :"Skateboard Shoes",
         price :"75.00",
         description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim ...",
         imageUrl :"",
         averageRating :"5.0" }])
      ```

      OR
      
      ```
         imageUrl :"/images/shoes-5.jpg",
      ```

      ```
      > db.users.insertOne({ id: '12345', cartItems: [ '123' ] })
      ```

6. Compiles and hot-reloads for development
   ```
   > npm run dev
   ```

7. Enjoy!

## Deploy for production

1. Make sure you have created accounts at

   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register "MongoDB Atlas")
   - [Heroku](https://signup.heroku.com/login "Heroku")

2. Then follow ALL step by step

   ```
   > cd front-end
   ```

   Building optimized version of front-end
   ```
   > npm run build
   ```

   copy front-end/dist to
   root of back-end

   then edit back-end/src/server.js for live production hosting

   Needed in production

   ```
   > cd back-end
   ```

   ```
   > npm install connect-history-api-fallback
   ```

   MongoDB:

   Logging into remote MongoDB server (may need to change the url,
   as well as in back-end/src/server.js)

   ```
   > mongo "mongodb+srv://<cluster_name>.mongodb.net/<dbname>" --username <username>
   ```

   Inserting data into remote MongoDB database

   ```
   > db.products.insertMany([{ 
      id :"123",
      name :"Skateboard Shoes",
      price :"75.00",
      description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim ...",
      imageUrl :"",
      averageRating :"5.0" }])
   ```

   OR
      
      ```
         imageUrl :"/images/shoes-5.jpg",
      ```

   ```
   > db.users.insertOne({ id: '12345', cartItems: [ '123' ] })
   ```

   Heroku:

   Installing Heroku using npm globally

   ```
   > npm install -g heroku
   ```

   Logging into Heroku

   ```
   > heroku login
   ```

   ```
   > cd back-end
   ```

   Creating a heroku app

   ```
   > heroku create
   ```

   Setting environment variables
   MongoDB username and password for database
   And name of db

   ```
   > heroku config:set MONGO_USER=<username> -a <app name>
   ```

   ```
   > heroku config:set MONGO_PASS='<password>' -a <app name>
   ```

   ```
   > heroku config:set MONGO_DBNAME=<dn name> -a <app name>
   ```

   Edit MongoDB url in back-end/src/server.js

   Add this to back-end/package.json in "scripts"

   To build an optimized version of the codebase
   To start the server

    ```
   "build": "babel ./src --out-dir ./build",
   "start": "node ./build/server.js",
    ```

   Deployment to Heroku

   Edit back-end/package.json
   Add:

    ```
   "engines": {
      "node": "0.0.0",
      "npm": "0.0.0"
   },
    ```

   ```
   > cd back-end
   ```

   Create .gitignore file
   Add this

   ONLY in entire file

   ```
   # Dependency directories
   node_modules/
   ```

   OR

   ```
   Remove 'dist' and 'build' from .gitignore file
   ```

   ```
   > git init
   ```

   ```
   > heroku git:remote -a <app name>
   ```

   ```
   > git add .
   ```

   ```
   > git commit -am "initial commit"
   ```

   ```
   > git push heroku master
   ```

   ```
   > heroku ps:scale web=1
   ```

## More Stuff

Check out some other stuff on [Melvin K](https://github.com/iammelvink "Melvin K GitHub page").
