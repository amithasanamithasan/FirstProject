import cors from 'cors';

import express, { Application, Request, Response } from 'express';
import { StudentsRoutes } from './app/modules/students/student.route';
import { UserRoutes } from './app/modules/user/user.route';

// const express = require('express')
const app: Application = express();

// json nia use korbo tr jonno parser use korbo
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/students', StudentsRoutes);
app.use('/api/v1/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', getAController);

export default app;
