import {z} from 'zod';
export const createCarSchema = z.object ({
    licensePlate: z		
    .string()
    .min(3, 'Car license plate must be at least 3 characters long')
    .max(10, 'Car license plate can not be more than 10 characters long'),
    totalKm: z
    .number()
    .min(1, 'Total kilometers must be at least 1 character'),
    totalIncome: z
    .number()
    .min(1, 'Total income must be at least 1 character')
})
export const updateCarSchema = createCarSchema.partial();