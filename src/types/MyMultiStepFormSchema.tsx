import { z } from "zod";

export const MyMultiStepFormSchema = z.object({
  // persona; information
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  // address information
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().optional(), // Optional field
  // next of kin information
  relation: z.string().optional(), // Optional field
  number: z.string().min(1, "Number is required"),
  location: z.string().min(1, "Location is required"),
});
