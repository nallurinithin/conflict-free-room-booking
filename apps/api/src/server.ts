import express from "express";
import bookingRoutes from "./routes/bookingRoutes";

const app = express();

app.use(express.json());
app.use(bookingRoutes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
