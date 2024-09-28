import asyncHandler from "express-async-handler";
import { Employee } from "../models/employeeModel.js";



// @desc Get all employees
// @route GET /api/employee
// @access public
export const getAllEmployee = asyncHandler(async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json(employee);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// @dess Get an employee
// @route Get /api/employee/:id
// @access public
export const getEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(404);
    throw new Error("Employee not Found");
  }
  res.status(200).json(employee);
});


// @desc  create an  employee  
// @route POST /api/employee
// @access public
export const createEmployee = asyncHandler(async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    age,
    job_title,
    salary,
    department,
    experience,
  } = req.body;

  try {
    if (
      !firstname ||
      !lastname ||
      !email ||
      !phone ||
      !age ||
      !job_title ||
      !salary ||
      !department ||
      !experience
    ) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }

    const employee = await Employee.create({
      firstname,
      lastname,
      email,
      phone,
      age,
      salary,
      department,
      experience,
      job_title,
    });
    res.status(201).json({
      message: "employee created successfully !",
      employee,
    });
    console.log(req.body);
  } catch (error) {
    console.error("Error creating employee: ", error);
    res.status(500).json({ message: error.message });
  }
});



// @dess Update employee
// @route Update /api/employee/:id
// @access public
export const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    res.status(404);
    throw new Error("Employee not Found");
  }
  const updateEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res
    .status(200)
    .json({ message: "Employee update successfully ", updateEmployee });
});




// @desc Delete an employee by ID
// @route DELETE /api/employee/:id
// @access public
export const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    res.status(404);
    throw new Error("Employee not Found");
  }

  await Employee.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Employee Deleted successfully " });
});
