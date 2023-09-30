const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true&tls=false&readPreference=primary"
const connectToMongo = async() => {
   await  mongoose.connect(mongoURI)
   console.log('Connected to Mongoose succesfully');
}

module.exports = connectToMongo;