import {z} from 'zod';
export const createRideSchema = z.object ({
    driverId: z.string(),
    passengerId: z.string(),
    carId: z.string(),
    startPosition: z		
    .string()
    .min(4, 'Start position must be at least 4 characters')
    .max(100, 'Start position can not be more than 100 characters'),
    endPosition: z		
    .string()
    .min(4, 'End position must be at least 4 characters')
    .max(100, 'End position can not be more than 100 characters'),
    km: z
    .number()
    .min(1, 'Kilometers must be at least 1 character'),
    income: z
    .number()
    .min(1, 'Income must be at least 1 character')
})
export const updateRideSchema = createRideSchema.partial();