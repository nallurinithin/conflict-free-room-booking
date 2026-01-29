// This file allows the API to handle HTTP requests for booking conflicts.
import { Request, Response } from "express";
import { createBookingRequest } from "../booking";

/**
 * Validates booking availability by orchestrating conflicts and suggestions.
 */
export const checkBookingAvailability = (req: Request, res: Response) => {
    const {
        requestedRoomNumber,
        requestedStart,
        requestedEnd,
        existingBookings,
        availableRooms,
    } = req.body;

    const result = createBookingRequest({
        requestedRoomNumber,
        requestedStart: new Date(requestedStart),
        requestedEnd: new Date(requestedEnd),
        existingBookings: existingBookings.map((b: any) => ({
            startTime: new Date(b.startTime),
            endTime: new Date(b.endTime),
        })),
        availableRooms,
    });

    switch (result.status) {
        case "AVAILABLE":
            return res.status(200).json(result);
        case "CONFLICT":
            return res.status(409).json(result);
        case "INVALID":
            return res.status(400).json(result);
    }
};
