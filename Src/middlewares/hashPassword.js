import bcrypt from 'bcrypt';

export const hashPassword = async (req, res, next) => {
  try {
    if (!req.body.password) {
      return res.status(400).json({ success: false, message: 'Password is required' });
    }

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error hashing password', error: error.message });
  }
};
