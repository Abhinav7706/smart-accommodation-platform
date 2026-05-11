const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main().then((res)=>{
  console.log("successful connect DB");
}).catch((err)=>{
  console.log(err);
})

async function main(){
  await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
  
    // Delete all existing listings before inserting new data
    await Listing.deleteMany({});

     initData.data=initData.data.map((obj)=>({...obj,owner:"69f866aecabca9d7eb5eb60d"}));

    // Insert the new sample listings
    await Listing.insertMany(initData.data);
    console.log("data was saved");
    
  }

// Call the main function
initDB();
