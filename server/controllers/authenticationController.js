// import User from ('') //need to create a USER MODEL
// import bcrypt from ('bcryptjs); // need to install and figure it out

const authenticationController = {}

//username and password login functionality
authenticationController.login = async(req, res, next) => {
    try{
        const { username, password } = req.body;
        // checks to see if the user name exists
        const user = await User.findByUsername(username);
        // if it doesnt exist, it sends and error
        if (!user){
            return res.status(401).send({ error: 'Failed to find user. Please check to see if username is correct.'})
        }

        // checks the password to see if its correct
        const passwordCorrect = await bcrypt.compare(password, user.password);
        if (!passwordCorrect) {
            return res.status(401).send({ error: 'Login failed. Incorrect password.'})
        }

        // create method to generate a token, FUNC NEEDS TO BE MADE
        const token = await user.generateToken();

        res.send({ user, token }); // look into tokens
    } catch (error) {
        res.status(400).send('Error in Auth Login Controller', error);
    }
};

// controller creates a new user
authenticationController.createNewUser = async(req, res, next) => {
    try{
        const { username, password } = req.body;

        // looks for username
        const user = await User.findOne({ username: username });

        // if it already exists, sends an error
        if (user)
            return res.status(500).send('Username already exist', error);

        // hashes the new password for security
        const hashedPassword = await hash(password, 10);
        const newUser = new User({
            username: username,
            password: hashedPassword,
        });

        //save newuser
        await newUser.save();
        res.status(200).send('User created successfully')

    } catch (error) {
        res.status(400).send('Error in Auth createNewUSer Controller', error);
    }
}

export default authenticationController;