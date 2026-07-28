//const jsonwebtoken = require("jsonwebtoken");
import jwt from "jsonwebtoken";

// export function generateToken(user) {
//     return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
// }


export function generateToken(user, res) {
    const payload = {
        id: user.id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
    
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Set to true in production
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    }
    )
    return token;
}

