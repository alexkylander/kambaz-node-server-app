import mongoose from "mongoose";
import moduleSchema from "../modules/schema.js";
const assignmentSchema = new mongoose.Schema({
   title: String,
   course: String,
 },
 { collection: "assignments" }
);
export default assignmentSchema;