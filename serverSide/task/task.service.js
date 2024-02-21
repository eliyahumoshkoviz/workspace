const taskController = require("./task.controller");
const mongoose = require('mongoose');

async function addNewTask(data) {
    // Makes sure the data data not empty and then checks if the required fields exist
    if (!data?.title || !data?.description || !data?.assignedTo) {
        throw {
            code: 400,
            message:
                "input error - missing required fields title, description, assignedTo",
        };
    }

    const flag = !data.group || mongoose.Types.ObjectId?.isValid(data.group);

    //Checks if assignedTo and group are of ObjectId type
    if (!mongoose.Types.ObjectId.isValid(data.assignedTo) || !flag) {
        throw {
            code: 400,
            message:
                "input error - assignedTo or group (if exsit) must be ObjectId type",
        };
    }

    return await taskController.create(data);
}

async function GetTaskInfo(data) {

    // Makes sure the data is not empty
    if (!data) {
        throw {
            code: 400,
            message:
                "input error - missing data",
        };
    }

    // check if task exist 
    // if not exist throw code 400
    let task = await taskController.read(data);
    if (!task) {
        throw { code: 400, message: "task isn't exist" };
    }

    return task;
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
    const modifiableFields = ["title", "description", "assignedTo", "status"];
    const field = modifiableFields.find((field) =>
        Object.keys(data).includes(field));

    if (!field) {
        throw {
            code: 400,
            message:
                "input error - you can't change this field",
        };
    }

    // check if task exist 
    // if not exist throw code 400
    let task = await taskController.readOne(id);
    if (!task) {
        throw { code: 400, message: "input error - task isn't exist" };
    }

    //When data is assignedTo or group checks if is of ObjectId type
    if (mongoose.Types.ObjectId.isValid(data)) {
        return await taskController.updateById(id, data)
    }

}

async function del(id) {

    // Makes sure the id is not empty
    if (!id) {
        throw {
            code: 400,
            message: "input error - missing id",
        };
    }

    // check if id exist
    // if not exist throw code 400
    let task = await taskController.readOne(id);
    if (!task) {
        throw { code: 400, message: "input error - task isn't exist" };
    }

    return await taskController.del(id);
}

module.exports = { addNewTask, del, GetTaskInfo, updateFieldById };
