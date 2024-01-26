const express = require('express');
const mongoose=require('mongoose')
const configHandlebars = require('./config/configHandlebars');
const configExpress = require('./config/configExpress');
const routes = require('./routes');
const { log } = require('console');

const app = express();
const port = 5000;

configHandlebars(app);
configExpress(app);

app.use(routes);

try {
   mongoose.connect('mongodb://127.0.0.1:27017')
   .then (()=>{console.log('DB Connencted');
    app.listen(port, () => console.log(`Server is listening on port ${port}...`))
});
} catch (error) {
    console.log(error.message);
}




