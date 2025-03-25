import {z} from 'zod';
export const createDriverSchema = z.object ({
    userName: z		
    .string()
    .min(4, 'Driver username must be at least 4 characters')
    .max(50, 'Driver username can not be more than 50 characters'),
    totalKm: z
    .number()
    .min(1, 'Total kilometers must be at least 1 character'),
    totalIncome: z
    .number()
    .min(1, 'Total income must be at least 1 character')
})
export const updateDriverSchema = createDriverSchema.partial();