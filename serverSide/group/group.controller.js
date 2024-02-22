const { groupModel } = require("./group.modle");

async function create(data) {
    return await groupModel.create(data);
}

async function read(object = {}) {

    // If the user enters his ID he will receive all his groups
    // otherwise he will receive according to the object he decided to sort with 

    const { userId } = object;
    return userId ?
        await groupModel.find({ $or: [{ managers: userId }, { 'members.user': userId }], active: true })
            .populate("managers")
            .populate("members.user") :
        await groupModel.find({ ...object, active: true })
            .populate("managers")
            .populate("members.user");
}

async function readOne(object = {}) {
    const { userId } = object;
    return userId ?
        await groupModel.findOne({ $or: [{ managers: userId }, { 'members.user': userId }], active: true })
            .populate("managers")
            .populate("members.user") :
        await groupModel.findOne({ ...object, active: true })
            .populate("managers")
            .populate("members.user");
}

async function update(filter, data) {
    return await groupModel.updateOne(filter, data);
}


async function del(id) {
    return await groupModel.deleteOne({ _id: id });
}

module.exports = { create, read, readOne, update, del };
