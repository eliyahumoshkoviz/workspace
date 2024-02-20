const mongoose = require("mongoose");

//קוד זה מגדיר את צורת הטבלה במאגר הנתונים ויוצר ואותו בפועל
//נקרא לקוד זה מקובץ אחר עבור יצירת הטבלה

//יצירת חוקיות ל Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    permission: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    password: {
        type: String,
        // מונע גישה לקבל את הסיסמא
        select: false,
        required: true,
    },
    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "group",
        }
    ]
    ,
    createDate: {
        type: Date,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

//יצירת Schema 
const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };

