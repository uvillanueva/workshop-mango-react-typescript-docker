import mongoose from "mongoose";

enum genders {
    male,
    female
};

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    gender: {
        type: genders,
        required: false,
    }
});

export const User = mongoose.model("User", UserSchema);
