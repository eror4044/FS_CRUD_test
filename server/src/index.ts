import eventRoutes from "./routes/eventRoutes";
import express from "express";
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/events", eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
