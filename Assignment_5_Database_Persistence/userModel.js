const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/user", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phoneNumber: Number,
});

const user = mongoose.model("user", userSchema);

const createUser = async function (name, age, email, phoneNumber) {
  const doc = new user({
    name: name,
    age: age,
    email: email,
    phoneNumber: phoneNumber,
  });

  return doc.save();
};

const findUser = async function (data) {
  const doc = await user.find({
    ...data,
  });

  return doc;
};

const updateUser = async function (data) {
  const { _id, ...rest } = data;
  const result = await user.findOneAndUpdate({ _id: _id }, { ...rest });

  if (result == null) {
    throw Error();
  }
  return result;
};

const deleteUser = async function (data) {
  const result = await user.deleteMany({
    ...data,
  });

  return result.deletedCount;
};

module.exports = { createUser, findUser, updateUser, deleteUser };
