const express = require("express"),
    router = express.Router();

const taskService = require("./task.service");
const { authenticate } = require("../middleware/autu");

router.post("/", authenticate, async (req, res) => {
    try {
        let result = await taskService.addNewTask(req.body);
        res.send(
            {
                success: true,
                message: "Task added successfully",
                deletedTask: result
            }
        );
    } catch (err) {
        res.status(err?.code ?? 400).send(err.message);
    }
});

router.get("/", authenticate, async (req, res) => {
    try {
        let result = await taskService.GetTaskInfo(req.body.data);
        res.send(
            {
                deletedTask: result
            }
        );
    } catch (err) {
        res.status(err?.code ?? 400).send(err.message);
    }
});

router.patch("/", authenticate, async (req, res) => {
    try {

        const updated = await taskService.updateFieldById(req.body.id, req.body.data);

        res.send(
            {
                success: updated.modifiedCount > 0,
                message: updated.modifiedCount > 0 ? "Task updated successfully." : "Task not updated",
                deletedUser: updated.modifiedCount > 0 ? await taskService.GetTaskInfo({ _id: req.body.id }) : null
            }
        );
    } catch (err) {
        res.status(err?.code ?? 400).send(err.message);
    }
});


router.delete("/", authenticate, async (req, res) => {
    try {

        let task = await taskService.GetTaskInfo({ _id: req.body.id });
        let result = await taskService.del({ _id: req.body.id });

        res.status(result.deletedCount > 0 ? 200 : 400).send(
            {
                success: result.deletedCount > 0,
                message: result.deletedCount > 0 ? "Task deleted successfully." : "Task not found",
                deletedUser: result.deletedCount > 0 ? task : null
            }
        );


    } catch (err) {
        res.status(err?.code ?? 400).send(err.message);
    }
});

module.exports = router;
