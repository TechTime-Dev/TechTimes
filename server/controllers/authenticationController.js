// import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import pool from '../db.js';

const authenticationController = {};

//username and password login functionality
authenticationController.login = async (req, res, next) => {
  console.log('---> ENTERING AUTH LOGIN CONTROLLER <---');
  try {
    const { username, password } = req.body;
    pool.query(
      `SELECT EXISTS (SELECT username FROM users WHERE username = ${username})`);

    // if it doesnt exist, it sends and error
    if (!user) {
      return res.status(401).send({
        error:
          'Failed to find user. Please check to see if username is correct.',
      });
    }

    // checks the password to see if its correct
    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      return res
        .status(401)
        .send({ error: 'Login failed. Incorrect password.' });
    }

    // create method to generate a token, FUNC NEEDS TO BE MADE
    const token = await user.generateToken();

    res.send({ user, token }); // look into tokens
  } catch (error) {
    res.status(400).send('Error in Auth Login Controller', error);
  }
};

// controller creates a new user
authenticationController.createNewUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    pool.query(
      `INSERT INTO users (username, password) VALUES (${username}, ${password})`
    );

    // looks for username
    // const user = await User.findOne({ username: username });

    // if it already exists, sends an error
    if (user) return res.status(500).send('Username already exist', error);

    // hashes the new password for security
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      password: hashedPassword,
    });

    //save newuser
    await newUser.save();
    res.status(200).send('User created successfully');
  } catch (error) {
    res.status(400).send('Error in Auth createNewUSer Controller', error);
  }
};

export default authenticationController;
