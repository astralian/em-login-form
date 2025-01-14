import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Please enter your email'),
  password: z.string().min(6, 'Please enter your password').nonempty('Please enter your password')
});

export type LoginForm = z.infer<typeof loginFormSchema>;
