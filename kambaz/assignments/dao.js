import db from "../database/index.js";
import AssignmentModel from "./model.js";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentsDao() {
  async function findAssignmentsForCourse(courseId) {
    return await AssignmentModel.find({ course: courseId });
  }
  async function createAssignment(assignment) {
    return await AssignmentModel.create(assignment);
  }
  async function deleteAssignment(assignmentId) {
    return await AssignmentModel.deleteOne({ _id: assignmentId });
  }
  async function updateAssignment(assignmentId, assignmentUpdates) {
    return await AssignmentModel.findByIdAndUpdate(assignmentId, assignmentUpdates, { new: true });
  }

  return { findAssignmentsForCourse, createAssignment, deleteAssignment, updateAssignment };
}
