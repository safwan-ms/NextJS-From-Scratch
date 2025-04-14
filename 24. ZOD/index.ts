// //Importing ZOD
import { z } from "zod";

//2. Creating ZOD Schema (shape)
// const userSchema = z.object({
//   name: z.string(),
//   age: z.number(),
//   email: z.string().email(),
// });

// 3. Creating Actual Data
// const userData = {
//   name: "Safwax",
//   age: 20,
//   email: "safwan.anasms@gmail.com",
// };

// 4. Parsing data for validation
// const validUser = userSchema.parse(userData);
// console.log(validUser);

// 5. Safe Parsing (No Error Throwing)
// const result = userSchema.safeParse({
//   name: "Safwax",
//   age: 22,
//   email: "invalid@gmail.com",
// });

// if (!result.success) {
//   console.log(result.error.format());
// }

//---------------------------------

// 6. Optional and Default Values

// const userSchema = z.object({
//   name: z.string(),
//   age: z.number().optional(),
//   country: z.string().default("Unknown"),
// });

// const user = {
//   name: "Safwax",
//   // age: 21,
//   // country: "Egypt",
// };
// console.log(userSchema.parse(user));

// 7. Nested Objects
// const userSchema = z.object({
//   name: z.string(),
//   address: z.object({
//     city: z.string(),
//     zipcode: z.string(),
//   }),
// });

// const user = {
//   name: "Safwax",
//   address: {
//     city: "Random City",
//     zipcode: "12312",
//   },
// };

// console.log(userSchema.parse(user));

// 8. Arrays
// const hobbiesSchema = z.array(z.string());
// const userHobbies = ["eat", "sleep", "code", "repeat"];
// console.log(hobbiesSchema.parse(userHobbies));

// 9. Enums
// const roleSchema = z.enum(["admin", "user", "guest"]);
// const userRole = "admin";
// // const userRole = "SuperAdmin";
// console.log(roleSchema.parse(userRole));

// 10. Type Inference
// You can infer TypeScript types from Zod schemas.

// Define the schema
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

type User = z.infer<typeof userSchema>;

const validUser: User = {
  name: "Safwax",
  age: 21,
  email: "safwan.anasms@gmail.com",
};

try {
  const parsedUser = userSchema.parse(validUser);
  console.log("Valid User✅"parsedUser);
} catch (error) {
  console.error("Error ❌", error);
}


// // Test invalid data
// const invalidUser: User = {
//   name: "Safwax",
//   age: "thirty-five",
//   email: "invalid-email",
// };

// const result = userSchema.safeParse(invalidUser);
// if (!result.success) {
//   console.log("❌ Validation Errors:", result.error.format());
// } else {
//   console.log("✅ Valid User:", result.data);
// }