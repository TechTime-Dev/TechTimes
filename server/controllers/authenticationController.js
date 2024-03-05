import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import pool from '../db.js';

const authenticationController = {};

//USERNAME AND PASSWORD LOGIN FUNCTIONALITY
authenticationController.login = async (req, res, next) => {
  console.log('---> ENTERING AUTH LOGIN CONTROLLER <---');
  try {
    const { username, password } = req.body;

    // Query to find user by username
    // Uses placeholder params for security
    const userQuery = 'SELECT * FROM users WHERE username = $1';
    const userResult = await pool.query(userQuery, [username]);

    // Check if user exists
    if (userResult.rows.length === 0) {
      return res.status(401).send({
        error: 'Failed to find user. Please check to see if username is correct.',
      });
    }

    const user = userResult.rows[0];

    // Check if the password is correct
    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      return res.status(401).send({
        message: 'Login Failed. Incorrect Password.',
        error: error,
        login: false,
      });
    }
    console.log('Welcome to Tech Times!');

    // Generate Json Web Token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '2h' });
        
    // Send back the token and user info
    res.status(200).send({ 
      message: 'Login successful!',
      token: token,
      user: { id: user.id, username: user.username },
    });

    // not sure if this will work...
    res.locals.login = true;

  } catch (error) {
    console.error('Error in Auth Login Controller', error);
    res.status(500).send('Internal Server Error');
  }
};


// CREATE NEW USER FUNCTIONALITY
authenticationController.createNewUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const userExistsQuery = 'SELECT * FROM users WHERE username = $1';
    const existingUser = await pool.query(userExistsQuery, [username]);

    if (existingUser.rows.length > 0) {
      return res.status(500).send('Username already exists! Please choose another one.');
    }

    // Hash the new password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    // VALUES uses placeholder params for security
    const insertUserQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)'; 
    await pool.query(insertUserQuery, [username, hashedPassword]);

    res.status(200).send('User created successfully');
    
    // not sure is this is the right thing to put here...
    res.locals.createUser = true;


  } catch (error) {
    console.error('Error in createNewUser Controller:', error);
    res.status(400).send('Error in creating new user');
  }
};


export default authenticationController;