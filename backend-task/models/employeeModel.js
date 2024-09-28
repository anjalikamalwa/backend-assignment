import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true , "Please enter employee's first name"],
    },
    lastname: {
      type: String,
      required: [true , "Please enter employee's last name"],
    },

    email: {
      type: String,
      required: [true , "Please enter employee's valid email id"],
    },
    phone: {
      type: Number,
      required: [true , "please enter employee's phone number"],
    },
    age: {
      type: Number,
      required: [true , "please enter employee's age"],
    },
    job_title: {
      type: String,
      required: [true , "please enter employee's job title"],
    },
    salary: {
      type: Number,
      required: [true , "please enter employee's salary"],
    },

    department: {
      type: String,
      required: [true , "please enter employee's departemt/field"],
    },
    experience: {
      type: Number,
      required: [true , "please enter employee's experience in year"],
    },
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model("Employee", employeeSchema);
