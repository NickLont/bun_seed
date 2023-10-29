import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
	username: {
        type: String,
        required: true
    },
	email: {
        type: String,
        required: true,
        unique: true
    },
	password: {
        type: String,
        required: true
    },
	createdAt:  {
        type: Date,
        required: true
    },
	recipes: [
		{
			type: Schema.Types.ObjectId,
			ref: "Recipe",
		},
	],
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
