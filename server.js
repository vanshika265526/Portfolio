import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Local handler for /api/server
app.post("/api/server", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_NAME,
        pass: process.env.USER_PASS,
      },
    });

    const mailOptions = {
        from: email,
        to: "vanshika29769@gmail.com",
        subject: `Contact from ${name}`,
        text: `You have a new message from ${name} (${email}, ${phone}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
