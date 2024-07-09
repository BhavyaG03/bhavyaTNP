const express = require('express');
const cors = require('cors');
//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db');
//const User = require('./models/user');
const schema=require('./models/newUser')
const cookieParser=require('cookie-parser')
const app = express();
app.use(cookieParser())
const secret = "strongKey"; // Store this securely
app.use(cors({origin:'http://localhost:3000',
  credentials:true}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.post('/register',async(req,res)=>{
  try {
      const{username,password}=req.body
  console.log(req.body)
  const newUser=schema({
      username:username,
      password:password
  })
  await newUser.save()
  res.status(201).json({message:'Registration successful'})
  } catch (error) {
      res.status(500).json({error:"registration failed"})
  }
})
app.post('/login', async (req, res) => {
  
      const { username, password } = req.body;
      console.log(req.body);
      const user = await schema.findOne({ username });
      if (!user) {
          return res.status(400).json('User not found');
        }
      if (password===user.password) {
          jwt.sign({username,id:user._id},secret,{},(error,token)=>{
              if(error) throw error;
              res.status(200).cookie('token',token).json({
                  id:user._id,
                  username
              })
          })
      }  
      else{
          res.status(401).json('wrong credentials')
      }
});
app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err,info) => {
    if (err) throw err;
    res.json(info);
  });
});
app.post('/logout', (req, res) => {
  res.cookie('token','').json('ok')

});

app.listen(4000, () => {
  console.log("BE started at port 4000");
});
