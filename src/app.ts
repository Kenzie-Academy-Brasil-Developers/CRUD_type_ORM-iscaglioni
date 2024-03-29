import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/userRoutes";
import loginRoute from "./routes/loginRoute";
import errorHandlingMiddleware from "./middlewares/errorHandling.middleware";

const app = express();
app.use(express.json());
app.use(errorHandlingMiddleware);

app.use('/users', userRoutes);
app.use('/login', loginRoute);


export default app;