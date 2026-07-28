const { prisma } = require("../lib/prisma");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

async function registerUser (req, res){
    const { username, email, password } = req.body;

    //check if user already exists
    const existingUser = await prisma.user.findUnique({
        where: {
            email: email
        },
    });

    if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
    }
    //hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    //create a new user
    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        }
    });
    //generate JWT token for authentication
    const token = generateToken(user, res);

    res.status(201).json({ message: "User registered successfully", user: { username, email, password: hashedPassword }, token });
};

// login user
async function loginUser(req, res) {
    const { email, password } = req.body;

    //check if user exists
    const user = await prisma.user.findUnique({
        where: {
            email: email
        },
    });
    if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
    }
    //compare the password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" });
    }

//generate JWT token for authentication
    const token = generateToken(user, res);
    
    // In a real application, you would compare the password with the hashed password
    res.status(200).json({ 
        message: "User logged in successfully", user: { id: user.id, email: user.email }, token });
}

// const logoutUser = (req, res) => {
//     res.clearCookie("jwt");
//     res.status(200).json({ message: "User logged out successfully" });
// }
const logoutUser = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1, httpOnly: true, expires: new Date(0) });
    res.status(200).json({ message: "User logged out successfully" });
};

//FORMAT OF TOKEN
//Authorization: Bearer <access_token>

 //verify Token
// async function verifyToken(req, res, next) {
//     //Get the token from the request header/get auth header value
//     const bearerHeader = req.header["Authorization"];
//     //check if bearer is undefined
//     if (typeof bearerHeader !== "undefined") {
//         //split at the space
//         const bearer = bearerHeader.split(" ");
//         //get token from array
//         const bearerToken = bearer[1];
//         //set the token
//         req.token = bearerToken;    
//         //next middleware
//         next();
//     } else {    
//         //forbidden
//         res.status(403).json({ error: "Access denied. No token provided." });
//     }
// }

// async function getUser(req, res) {
//     const { userId } = req.params;
//     try {
//         const user = await prisma.user.findUnique({
//             where: {
//                 id: parseInt(userId)
//             }
//         });
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         res.json({ message: "User retrieved successfully", user });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

module.exports = {
    registerUser,
    loginUser,
    logoutUser
    // getUser
};
    