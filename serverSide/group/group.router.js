const express = require("express"),
    router = express.Router();

const groupService = require("./group.service");
const { authenticate } = require("../middleware/autu");

router.post("/", async (req, res) => {
    
    try {
        let result = await groupService.addNewGroup(req.body);
        res.send(
            {
                success: true,
                message: "Group added successfully",
                deletedUser: result
            }
        );
    } catch (err) {
        res.status(err?.code ?? 400).send(err.message);
    }
});

router.get("/", authenticate, async (req, res) => {
    try {
        let result = await groupService.GetGroupInfo(req.body.data);
        res.send(
            {
                deletedUser: result
            }
        );
    } catch (err) {
        res.status(err?.code ?? 400).send(err.message);
    }
});

router.patch("/", authenticate, async (req, res) => {
    try {

        const updated = await groupService.updateFieldById(req.body.id, req.body.data);

        res.send(
            {
                success: updated.modifiedCount > 0,
                message: updated.modifiedCount > 0 ? "Group updated successfully." : "Group not updated",
                deletedUser: updated.modifiedCount > 0 ? await groupService.GetGroupInfo({ _id: req.body.id }) : null
            }
        );
    } catch (err) {
        res.status(err?.code ?? 400).send(err.message);
    }
});


router.delete("/", authenticate, async (req, res) => {
    try {

        let group = await groupService.GetGroupInfo({ _id: req.body.id });
        let result = await groupService.del({ _id: req.body.id });

        res.status(result.modifiedCount > 0 ? 200 : 400).send(
            {
                success: result.modifiedCount > 0,
                message: result.modifiedCount > 0 ? "Group deleted successfully." : "Group3 not found",
                deletedUser: result.modifiedCount > 0 ? group : null
            }
        );


    } catch (err) {
        res.status(err?.code ?? 400).send(err.message);
    }
});

module.exports = router;
