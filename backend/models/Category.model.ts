import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
	name: {
        type: String,
        required: true
    },
	recipes: [
		{
			type: Schema.Types.ObjectId,
			ref: "Recipe",
		},
	],
	createdAt: {
        type: Date,
        required: true
    },
});

const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;
