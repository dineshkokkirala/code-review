const mongoose = require("mongoose");

const connecttionURL = "mongodb+srv://dineshkokkirala369:PsJzjvmibVUpzTJ7@code-review-app.g3oktq4.mongodb.net"

//PsJzjvmibVUpzTJ7
//dineshkokkirala369

const dbConnect = async()=>{
    try {
        await mongoose.connect(connecttionURL);
        console.log("DB Connected!!!");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }

}

module.exports = dbConnect;