const mongoose = require("mongoose");

function DBconnection(){

    // CONNECTION OF DATABASE AND SERVER

mongoose.connect(process.env.DB_CONNECTION)
.then(() => {
    console.log("DATABASE CONNECTION IS DONE...")
})
.catch((error) => {
    console.log(error);   
})

}

module.exports = {DBconnection}

// try {
//     await mongoose.connect(process.env.DB_CONNECTION);
//     console.log("DATABASE CONNECTION IS DONE...");
//   } catch (error) {
//     console.error("DB CONNECTION FAILED:", error.message);
//     process.exit(1);
//   }
  

// const mongoose = require("mongoose");

// async function DBconnection() {
//   try {
//     console.log("Connecting to DB...");
//     await mongoose.connect(process.env.DB_CONNECTION);
//     console.log("DATABASE CONNECTION IS DONE...");
//   } catch (error) {
//     console.error("DATABASE CONNECTION FAILED:", error.message);
//     process.exit(1); // Stop app if DB fails
//   }
// }

// module.exports = { DBconnection };
