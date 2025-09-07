const zod = require("zod");

const userSignupValidation = zod.object({
  firstName: zod.string().max(30),
  lastName: zod.string().max(30),
  email: zod.string().email(),
  password: zod.string().min(6),
  // age: zod.number().min(18),
});

const userSigninValidation = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6)
});

const userUpdateValidation =  zod.object({
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
  password: zod.string().optional(),
})

module.exports = {
  userSignupValidation,
  userSigninValidation,
  userUpdateValidation,
};