import { userModel } from "../../DataBase/Model/UserModel.js";

export const FindUser = async (req, res, next) => {
    const { email, mobileNumber } = req.body;

    if (!email && !mobileNumber) {
        return res.status(400).json({ success: false, message: "Email or mobile number is required" });
    }

    try {

        const user = await userModel.findOne({email});

        console.log(user);
        

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error finding user:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
