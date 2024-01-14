const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function dbconn() {
    mongoose.Promise = global.Promise;
    await mongoose.set('strictQuery', true);
    await mongoose.connect(`${process.env.MONGODB_URL}`, { useNewUrlParser: true }).then(()=>{
        console.log('MongoDB connection done')
    }).catch((err)=> console.log(`Error during connection: ${err}`));
}

module.exports = dbconn;