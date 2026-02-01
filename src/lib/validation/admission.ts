import { z } from "zod";

export const AdmissionSchema = z.object({
  studentName: z
    .string()
    .min(2, "Student name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "Letters and spaces only"),
  classApplyingFor: z.string().min(1, "Class selection is required"),
  parentName: z
    .string()
    .min(2, "Parent name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "Letters and spaces only"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile must be exactly 10 digits"),
  email: z.string().email("Invalid email format"),
  address: z.string().min(5).max(120, "Address must be under 120 characters"),
});

export type AdmissionType = z.infer<typeof AdmissionSchema>;
