import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicFacultyValidation } from './Validation.academicFaculty';
import { AcademicFacultyControllers } from './controller.academicFaculty';
const router = express.Router();
router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);
export const AcademicFacultyRoutes = router;
