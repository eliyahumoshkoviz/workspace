const mongoose = require('mongoose');
const groupController = require("./group.controller");
const userController = require("../user/user.controller")
const { groupModel } = require("./group.modle");
const userService = require("../user/user.service");
const taskService = require('../task/task.service')


async function createNewGroup(data) {
    // Makes sure the data is not empty and then checks if the required fields exist 
    if (!data?.name || !data?.description || !data?.user) {
        throw {
            code: 400,
            message:
                "input error - missing required fields name, description, user",
        };
    }

    // checks if user is of ObjectId type
    if (!mongoose.Types.ObjectId.isValid(data.user)) {
        throw {
            code: 400,
            message:
                "input error - user must be ObjectId type",
        };
    }

    // check if user exist or not active
    const userExists = await userController.readOne({ _id: data.user });
    if (!userExists || !userExists.isActive) {
        throw {
            code: 400,
            message: "input error - user does not exist",
        };
    }

    const groupData = {
        name: data.name,
        description: data.description,
        managers: [data.user],
        members: [{ user: data.user }],
        tasks: data.tasks || []
    };

    const newGroup = await groupController.create(groupData);
    const groups = { groups: newGroup._id };
    userService.updateFieldById({ _id: data.user }, groups)

    return newGroup;

}

async function GetGroupInfo(data) {

    //The data will contain an object by which it will be decided which group to fetch
    // If the user enters his ID he will receive all his groups
    // otherwise he will receive according to the object he decided to sort with 

    // Makes sure the data is not empty
    if (!data) {
        throw {
            code: 400,
            message:
                "input error - missing data",
        };
    }

    // check if group exist 
    // if not exist throw code 400
    let group = await groupController.read(data);
    if (group.length === 0) {
        throw { code: 400, message: "group isn't exist" };
    }

    return group;
}

async function updateFieldById(id, data) {

    // Makes sure the id and data are not empty
    if (!id || !data) {
        throw {
            code: 400,
            message:
                "input error - missing id or data",
        };
    }

    // checks if id is of ObjectId type
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw {
            code: 400,
            message:
                "input error - id must be ObjectId type",
        };
    }

    //Make sure the user changes only this field (Only one of these fields can change)
    const modifiableFields = ["name", "description", "active", "members", "tasks"];
    const field = modifiableFields.find((field) =>
        Object.keys(data).includes(field));

    if (!field) {
        throw {
            code: 400,
            message:
                "input error - you can't change this field",
        };
    }

    // check if group exist
    // if not exist throw code 400
    let group = await groupController.readOne({ _id: id });
    if (!group) {
        throw { code: 400, message: "input error - group isn't exist" };
    }

    if (data.members) {
        const memberExists = await groupModel.exists({ _id: id, 'members.user': data.members });
        if (memberExists) {
            throw { code: 400, message: "input error - the user already is exist" };
        }
        const groups = { groups: id };
        await userService.updateFieldById({ _id: data.members }, groups)
        data.$push = { members: { user: data.members } };
        delete data.members;
    }

    if (data.tasks) {
        const { title, description, assignedTo } = data.tasks;
        const deletedTask = await taskService.addNewTask({title, description, assignedTo});
        data.$push = { tasks: deletedTask._id };
        delete data.tasks;
    }

    return await groupController.update({ _id: id }, data);

}

async function del(id) {

    // Makes sure the id is not empty
    if (!id) {
        throw {
            code: 400,
            message: "input error - missing id",
        };
    }

    // checks if id is of ObjectId type
    if (!mongoose.Types.ObjectId.isValid(id._id)) {
        throw {
            code: 400,
            message:
                "input error - id must be ObjectId type",
        };
    }

    // check if id exist
    // if not exist throw code 400
    let task = await groupController.readOne({ _id: id });
    if (!task) {
        throw { code: 400, message: "input error - group isn't exist" };
    }

    return await groupController.del(id._id);
}

module.exports = { createNewGroup, del, GetGroupInfo, updateFieldById };
