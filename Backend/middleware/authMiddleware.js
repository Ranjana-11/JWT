// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//   try {
//     //const token = req.headers.authorization;
//     const token = authHeader.split(" ")[1];


//     if (!token) {
//       return res.json({ message: "No token, access denied" }); //agr token mismatch then block user
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET); //checking token or very token

//     req.user = decoded; // user info attach ,ab aage wale route ko user ka data mil gaya, middleware se aya

//     next();

//   } catch (err) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

// export default authMiddleware;

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "No token, access denied",
      });
    }

    // "Bearer " hata do
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default authMiddleware;