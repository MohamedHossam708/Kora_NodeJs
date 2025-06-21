import { userModel } from "../../../DataBase/Model/UserModel.js";
import { asyncHandler } from "../../Utlis/asyncHandler.js";
import jwt from 'jsonwebtoken';



export const SignUp = asyncHandler(async (req, res, next) => {
  const { email, phone } = req.body;

  const existingUser = await userModel.findOne({
    $or: [{ email }, { phone }],
  });

  if (existingUser) {
    const error = new Error("This email or mobile number is already used");
    error.statusCode = 400;
    return next(error);
  }

  const user = await userModel.create(req.body);

  // Optional: Remove password from response
  user.password = undefined;

  res.status(201).json({
    success: true,
    message: "User created successfully",
  });
});

export const SignIn = asyncHandler(async (req, res, next) => {
    try {
        const user = req.user; // already validated by middlewares

        // Ensure JWT_SECRET is set
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }

        // Create JWT payload
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role,
        };

        // Sign token
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        // Respond with token and user info
        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        });
    } catch (error) {
        next(error); // forward error to global error handler
    }
});