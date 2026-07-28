import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js"; // Adjust the import path as needed; // Adjust the import path as needed    

//Read the JWT token from the request header
//Check if the token is valid
export async function protect(req, res, next) {
    console.log("Auth Middleware: Protecting route");
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
        } catch (error) {
            console.error("Auth Middleware: Invalid token format", error);
            return res.status(401).json({ message: "Not authorized, token failed" });
        }
    } else if (req.cookies && req.cookies?.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        // Verify the token and decode it
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded payload:", decoded);

        const user = await prisma.user.findUnique({ where: { id: decoded.id } });
        if (!user) {
            return res.status(401).json({ message: "Not authorized, user not found" });
        }
        req.user = user; // Attach the decoded user info to the request object
        next();
    } catch (error) {
            console.error("Auth Middleware: Invalid token", error);
            return res.status(401).json({ message: "Not authorized, token failed" });
        }
}