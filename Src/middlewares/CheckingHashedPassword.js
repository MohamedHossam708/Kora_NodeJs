import bcrypt from 'bcrypt';

export const CheckingHashedPassword = async (req, res, next) => {
    try {
        const { password } = req.body;
        const user = req.user; 
        console.log(password, user);
        

        if (!password) {
            return res.status(400).json({ success: false, message: 'Password is required' });
        }

        // Compare the plain password with the hashed password
        const isPasswordCorrect =  bcrypt.compareSync(password, user.password);
        console.log(isPasswordCorrect);
        

        if (!isPasswordCorrect) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Password is correct
        next();
    } catch (error) {
        console.error('Password check error:', error);
        return res.status(500).json({ success: false, message: 'Error checking hashed password', error: error.message });
    }
};
