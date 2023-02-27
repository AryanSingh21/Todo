const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/TodoIntern", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected");
    });
};

module.exports = connectDatabase;
