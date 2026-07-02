import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import user from "../model/user.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/signup", async(req, res) => {
try{
const {username, email, password} = req.body;

//check user already exists or not
const existingUser = await user.findOne({ email })

if(existingUser){
  return res.json({message: "User already exists"});
}

//password hash
const hashedPassword = await bcrypt.hash(password, 10);

//user create
const newUser = await user.create({
  username,
  email,
  password: hashedPassword
})

res.json({
  message: "new user added successfully",
  user: newUser
})

}catch(err) {
  console.log(res.status(500).json ({error: err}))
}
})



//log in route
router.post("/login", async(req, res) => {
  try{
   const {email, password} = req.body;

   //user find kro
   const User = await user.findOne({ email });

   //check exists or not
   if(!User){
    return res.json({ message: "User not found" });
   }

   const isMatch = await bcrypt.compare(password, User.password)

   if (!isMatch) {
      return res.json({ message: "Invalid password" });
    }

    //JWT token create karo: login successfully hone ke bad token bnana
    const token = jwt.sign(
      { id: User._id, email: User.email }, //payload: konse user ka token hai
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    //response send karo
    res.json({
      message: "Login successful",
      token,
    });
  }catch(err){
     console.log(res.status(500).json ({error: err}))
  }
})


//protected routes
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route access success",
    user: req.user 
  });
});
export default router;








