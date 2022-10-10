const express = require('express');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();


app.use(express.json());



mongoose.connect(process.env.mongodb);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})

