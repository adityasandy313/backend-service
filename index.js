require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes')
const PORT = 8080

const app = express();


app.use(cors());
app.use(express.json());


app.use('/api',routes);

app.listen(PORT, (error)=>{
    if(!error)
    console.log('app is running')
    else
    console.log(error);
})

