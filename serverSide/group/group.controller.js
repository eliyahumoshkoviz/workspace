const { groupModel } = require("./group.modle");

async function create(data) {
    return await groupModel.create(data);
}

async function read(object = {}) {
    return await groupModel.find({ ...object, active: true });
}

async function readOne(object = {}) {
    return await groupModel.findOne(object);
}

async function update(filter, data) {
    return await groupModel.updateOne(filter, data);
}

async function del(id) {
    return await groupModel.updateOne(id, { isActive: false });
}

module.exports = { create, read, readOne, update, del };
