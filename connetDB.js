const mongoose = require('mongoose');

const ConnectDB =(url) =>{
    return  mongoose.connect(url)
}
module.exports = ConnectDB;