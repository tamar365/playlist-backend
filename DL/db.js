const mongoose = require("mongoose");
// require("dotnev").config();

const connectDB = async () => {
  try{
    const mongoUrl = process.env.MONGO_URL;
    return await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) return console.log('Error: ', err);
    }
    );
  }catch (error) {
    console.log('error mongoose', error);
  }
};

module.exports = { connectDB };
