


const UserModel = require("../models/User");

async function AddUser(req, res) {
  const payload = req.body;
  const user = await UserModel.create(payload);

  res.json({
    status: 201,
    message: "USER CREATE SUCCESSFULLY",
    data: user,
  });
}

async function GetUser(req, res) {
  const payload = req.body;
  const users = await UserModel.find(payload);

  res.json({
    status: 200,
    data: users,
  });
}

async function SingelUser(req, res) {
  const { id } = req.params;

  const user = await UserModel.findById(id);

  res.json({
    status: 200,
    data: user,
  });
}

async function UpdateUser(req, res) {
  const payload = req.body;
  const { id } = req.params;

  const user = await UserModel.findByIdAndUpdate(id, payload, { new: true });

  res.json({
    status: 200,
    message: "USER UPDATE SUCCESSFYULLY",
    data: user,
  });
}

async function DeleteUser(req, res) {
  const { id } = req.params;

  const user = await UserModel.findByIdAndDelete(id);

  res.json({
    status: 200,
    message: "USER DELETE SUCCESSFULLY",
    data: user,
  });
}

module.exports = { AddUser, GetUser, SingelUser, UpdateUser, DeleteUser };