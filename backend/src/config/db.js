const {connect} = require('mongoose');

const connectToDB = async(url) =>{
    try{
    await connect(url);
    console.log(`Connected to database successfully`);
    }catch(err){
        console.log(`Error connecting to database`);
    }
}


module.exports = connectToDB;