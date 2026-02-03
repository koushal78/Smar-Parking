import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connect from "./dp/dbConnect.js";
import parkRouter from "./route/parking.route.js"
dotenv.config();

const port = process.env.PORT || 8000

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("app is working...")
})

app.use("/api",parkRouter);

app.listen(port, () => {
    connect(process.env.MongoDB_URL) 
    console.log(`app is running at ${port}`)
});