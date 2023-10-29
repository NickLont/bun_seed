import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	title: {
        type: String,
        required: true
    },
	categories: [
		{
			type: Schema.Types.ObjectId,
			ref: "Category",
		},
	],
	image: Blob, // binary large object
	link: String,
	ingredients: {
        type: String,
        required: true
    },
	instructions: String,
	createdAt: {
        type: Date,
        required: true
    },
});

const RecipeModel = mongoose.model("Recipe", recipeSchema);

export default RecipeModel;
