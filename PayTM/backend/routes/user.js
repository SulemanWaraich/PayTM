const { JWT_SECRET } = require("../config");
const { User, Account } = require("../db/db");
const { authMiddleware } = require("../middlewares/middleware");
const { userValidation, userSignin, userSignupValidation, userSigninValidation, userUpdateValidation } = require("../validation/validate");
const express = require("express");
const jwt = require("jsonwebtoken")

const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
  const validationResult = userSignupValidation.safeParse(req.body);  
  if(!validationResult.success){
    return res.status(404).json({errors: validationResult.error.errors})
  }
  
  const userFirstName = req.body.firstName;
  const userLastName = req.body.lastName;
  const userName = req.body.email;
  const userPassword = req.body.password;
  // const userAge = req.body.age;
  
  // second method of getting data from req it's called obj destructuring
  // const {firstName, lastName, email, password, age} = validationResult.data;
  
  try {
    const existingUser = await User.findOne({email: userName, password: userPassword});
    if(existingUser){
      return res.json({msg: "user already exist"})
    }

    console.log(existingUser);
    
    
    const user = await User.create({firstName: userFirstName, lastName: userLastName, email: userName, password: userPassword});

    console.log(user);
    
    const userId = user._id;
    const jwtToken = jwt.sign({userId}, JWT_SECRET);

    await Account.create({userId: user._id, balance: 1 + Math.random() * 1000});

    res.json({msg: "User created successfully!", jwtToken});

  } catch (error) {
    res.status(500).json({msg: error});
  }
  
});

userRouter.post('/signin', async (req, res) => {
  const valRes = userSigninValidation.safeParse(req.body);
  if(!valRes.success){
    console.log("something wrongs");
    
    return res.status(403).json({msg: valRes.error.errors});
  }
  
  const userName = req.body.email;
  const userPassword = req.body.password;
  console.log(userName, userPassword);
  

  try { 
    const user = await User.findOne({email: userName, password: userPassword});
    if(!user){
      return res.status(401).json({msg: "User doesn't exist or incorrect credentials"})
    }

    console.log(user)
    const userId = user._id;
    const jwtToken = jwt.sign({userId}, JWT_SECRET);

    res.json({msg: "Signin successfully!", jwtToken} );
    
  } catch (error) {
    console.log(error);
    res.status(501).send("error while logging in")
  }
  
});

userRouter.put('/update', authMiddleware, async (req, res) => {
  const valRes  = userUpdateValidation.safeParse(req.body)
  if(!valRes.success){
    res.status(402).json({msg: valRes.error.errors});
  }

  try {
    const user = await User.updateOne({_id: req.userId}, req.body);
    
    if(!req.userId || user.matchedCount === 0){
      return res.status(403).json({msg: "user doesn't exist, enter the right credentials"});
    }
    res.json({msg: "user updated successfully"});
  } catch (error) {
    console.log(error);
    res.status(501).json({msg: "some error occur"});
  }
})

userRouter.get('/bulk', async (req, res) => {
  const friend = req.query.name || "";
  console.log(friend);

  const users = await User.find({$or: [{firstName: {"$regex": friend}}, {lastName: {"$regex": friend}}]})

  console.log(users);
  
  if(users == (Array.length === 0)){
    return res.status(401).json({msg: "no matches found"})
  }

  res.json({user: users.map(user => ({
    username: user.userName, 
    firstName: user.firstName,
    lastName: user.lastName,
    _id: user._id
    }))
  })
})

module.exports = {
  userRouter
}