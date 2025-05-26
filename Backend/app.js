import express from "express";
import dotenv, { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendemail.js";


const app = express();
// const router = express.Router()
dotenv.config()

config({path: "./config.env"});
console.log(process.env.PORT)

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
})
);

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.post("/send/email", async (req, res, next) => {
    console.log(req.body);

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            message: "Please provide all details"
        });
    }
    try {
        await sendEmail({
            email: "makwanadev5244@gmail.com",
            subject: "GYM WEBSITE",
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});


app.listen(process.env.PORT,() => {
    console.log(`Server listening on ${process.env.PORT}`)
});


