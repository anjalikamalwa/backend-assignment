import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getAllEmployee,
  getEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";

export const router = express.Router();

router.post("/", createEmployee).get("/", getAllEmployee);
router
  .get("/:id", getEmployee)
  .put("/:id", updateEmployee)
  .delete("/:id", deleteEmployee);
