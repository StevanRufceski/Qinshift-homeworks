import {z} from 'zod';
export const createPassengerSchema = z.object ({
    userName: z		
    .string()
    .min(4, 'Passenger username must be at least 4 characters')
    .max(50, 'Passenger username can not be more than 50 characters'),
    totalKm: z
    .number()
    .min(1, 'Total kilometers must be at least 1 character')
    .optional(),
    totalIncome: z
    .number()
    .min(1, 'Total income must be at least 1 character')
    .optional(),
    discount: z
    .number()
    .min(1, 'Discount must be at least 1 character')
    .max(2, 'Discount must be at maximum 2 characters')
    .positive('Discount must be a positive number')
    .optional(),
})
export const updatePassengerSchema = createPassengerSchema.partial();