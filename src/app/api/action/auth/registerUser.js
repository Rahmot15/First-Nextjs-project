"use server";

import { dbConnect } from "@/app/lib/dbConnect";
import User from "@/models/User";

const registerUser = async (formData) => {
    try {
        await dbConnect(); // connect MongoDB

        // save user
        const newUser = await User.create(formData);

        return { success: true, user: newUser };
    } catch (error) {
        console.error("❌ Register error:", error);
        return { success: false, error: error.message };
    }
};

export default registerUser;
