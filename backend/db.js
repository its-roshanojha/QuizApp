const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/quiz'

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('connected to mongo Successfully')
    })
}

module.exports = connectToMongo;