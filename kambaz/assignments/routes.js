import AssignmentsDao from "./dao";
export default function AssignmentRoutes(app, db) {
    const dao = AssignmentsDao(db);
    const findAssignmentsForModule = (req, res) => {
        const { moduleId } = req.params;
        const assignments = dao.findAssignmentsForModule(moduleId);
        res.json(assignments);
    };
    const createAssignment = (req, res) => {
        const { moduleId } = req.params;
        const assignment = {
            ...req.body,
            module: moduleId,
        };
        const newAssignment = dao.createAssignment(assignment);
        res.send(newAssignment);
    };
    const deleteAssignment = (req, res) => {
        const { assignmentId } = req.params;
        const status = dao.deleteAssignment(assignmentId);
        res.send(status);
    };
    const updateAssignment = (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = dao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    };
    app.get("/api/modules/:moduleId/assignments", findAssignmentsForModule);
    app.post("/api/modules/:moduleId/assignments", createAssignment);
    app.delete("/api/assignments/:assignmentId", deleteAssignment);
    app.put("/api/assignments/:assignmentId", updateAssignment);
}