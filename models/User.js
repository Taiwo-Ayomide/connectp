const moongoose = require("mongoose");

const UserSchema = new moongoose.Schema(
    {
        firstname:{type: String, unique: true},
        lastname:{type: String, unique: true},
        email:{type: String,  unique: true},
    },{timestamps: true }
);

module.exports = moongoose.model("User", UserSchema)