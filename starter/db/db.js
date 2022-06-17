const mongo = require('mongoose');

const mongoDb = (url)=>{
    return mongo.connect(url).then(() => {
        console.log(`Connected to the Mongoose Online Database`);
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = mongoDb;