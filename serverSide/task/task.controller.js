const { taskModel } = require("./task.modle");

async function create(data) {
  return await taskModel.create(data);
}

async function read(object = {}) {
    const { status = ["todo", "inProgress"] } = object;
    return await taskModel.find({ ...object, status: { $in: status } });
}

async function readOne(object = {}) {
    return await taskModel.findOne(object);
}

async function update(filter, data) {
    return await taskModel.updateOne(filter, data);
}

async function del(id) {
    return await taskModel.deleteOne({ _id: id });
}

module.exports = { create, read, readOne, update, del };
