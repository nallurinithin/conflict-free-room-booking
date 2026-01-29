// This file defines the routing configuration for booking-related endpoints.
import { Router } from "express";
import { checkBookingAvailability } from "../controllers/bookingController";

const router = Router();

// Route to check for booking conflicts and get suggestions
router.post("/bookings/check", checkBookingAvailability);

export default router;
