import { userModel } from "../../../DataBase/Model/UserModel.js";
import { asyncHandler } from "../../Utlis/asyncHandler.js";

export const SignUp = asyncHandler(async (req, res, next) => {
    const { email, phone } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({
        $or: [{ email }, { phone }],
    });

    if (existingUser) {
        const error = new Error("This email or mobile number is already used");
        error.status = 400; 
        return next(error);
    }

    //Create the user
    const user = await userModel.create(req.body);

    //Return response
    res.status(201).json({
        success: true,
        user,
    });
});
