import { Schema, model } from 'mongoose';

import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './students/interface.student';

// 2. Create a Schema corresponding to the document interface.

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
  },
});

const gurdianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'Father Name is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother Name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact No is required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
});

// 2. Create a Schema corresponding to the document interface.
const studentSchema = new Schema<Student>({
  // id duplicate hobe na mane 2 bar add hobe na tr jonno unique :true
  // E11000 duplicate key error collection
  id: {
    type: String,
    required: [true, 'ID is required'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender',
    },
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, 'ContactNo is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: gurdianSchema,
    required: [true, 'Guardian information is required'],
  },

  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required'],
  },

  profileImage: {
    type: String,
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not a valid status',
    },
    default: 'active',
  },
});

// 3. Create a Model.
// model 2ta prameter nie name / Schema
export const StudentModel = model<Student>('Student', studentSchema);
