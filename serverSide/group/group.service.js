const groupController = require("./group.controller");
const mongoose = require('mongoose');
const userController = require("../user/user.controller")

async function addNewGroup(data) {
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
    if (!userExists|| !userExists.isActive) {
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


    return await groupController.create(groupData);

}

async function GetGroupInfo(data) {

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
    if (!group) {
        throw { code: 400, message: "group isn't exist" };
    }

    return group;
}

async function updateFieldById(id, data) {

    // Makes sure the id and data are not empty
    if (!id || !data || !mongoose.Types.ObjectId.isValid(id)) {
        throw {
            code: 400,
            message:
                "input error - missing id or data",
        };
    }

    //Make sure the user changes only this field (Only one of these fields can change)
    const modifiableFields = ["name", "description", "active"];
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
    let group = await groupController.readOne(id);
    if (!group) {
        throw { code: 400, message: "input error - group isn't exist" };
    }

    return await groupController.updateById(id, data);

}

async function del(id) {

    // Makes sure the id is not empty
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw {
            code: 400,
            message: "input error - missing id",
        };
    }

    // check if id exist
    // if not exist throw code 400
    let task = await groupController.readOne(id);
    if (!task) {
        throw { code: 400, message: "input error - task isn't exist" };
    }

    return await groupController.del(id);
}

module.exports = { addNewGroup, del, GetGroupInfo, updateFieldById };
