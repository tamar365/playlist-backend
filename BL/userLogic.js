const user = require("../DL/controllers/userController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

async function createUser (req) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userAlreadyExicst = await user.readOne(
      req.body.username
    );
    if (userAlreadyExicst) {
        return res.status(401).send("user name already exists");
    }
    const newUser = { 
        username: req.body.username,
        password: hashedPassword
    }
    console.log(newUser)
    return await user.create(req);
};
// console.log("New user saved successfully");

async function readUser (req) {
    if (req.body.username && req.body.password) {
        let isValidLogin = false;
        const existsUser = await user.readOne({ username: req.body.username });
        console.log(existsUser);
  
        if (existsUser) {
          isValidLogin = await bcrypt.compare(req.body.password, user.password);
        }
  
        if (isValidLogin) {
          const accessToken = jwt.sign(
            JSON.stringify(existsUser),
            process.env.TOKEN_SECRET
          );
          existsUser.password = undefined;
          res.json(accessToken);
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      } else {
        res.status(400).json({ message: "Please supply username and password" });
      }
};

async function getUsers(){
  const users = await user.read();
  console.log(users)
  return users;
}

module.exports = {createUser, readUser, getUsers};