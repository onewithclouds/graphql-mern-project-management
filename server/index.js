const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();


// Connect to database
connectDB();

app.use(cors());

//express().use
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development',
}));

//express().listen
app.listen(port, console.log(`Server running on port ${port}`));


 