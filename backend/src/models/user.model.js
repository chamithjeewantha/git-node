const {Schema, model} = require("mongoose");



const UserSchema = Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        role:{
            type: String,
            enum: ["ADMIN", "USER"],
            default:"USER"
        },
    },
    {
        timestamps: { createdAt: "created_at",updatedAt: "updated_at" },
    }
);

const User = model("User", UserSchema);

module.exports = User;