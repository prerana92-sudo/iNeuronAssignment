import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {orderRouter} from "./route/orderRouter";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json"
var PORT = 3000;

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/orders", orderRouter);
app.use("/swagger", swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.listen(process.env.PORT, () => {
console.log("Node server started running on ", PORT);
});