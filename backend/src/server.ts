import express from 'express';
import http from "http";
import login from "./routes/login";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes";
import updatePasswordRoute from "./routes/updatePasswordRoute";
import getProfileRoute from "./routes/getProfileRoute";
import adminRoutes from "./routes/adminRoutes";
import availableAssetsRoutes from "./routes/availableAssetsRoutes";
const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use('/assets',availableAssetsRoutes)
app.use('/employees',employeeRoutes)
app.use('/admin', adminRoutes);
app.use('/login',login);
app.use('/',updatePasswordRoute);

app.use('/',getProfileRoute);

http.createServer(app).listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});