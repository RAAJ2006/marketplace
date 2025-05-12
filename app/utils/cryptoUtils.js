import bcrypt from 'bcrypt';

// Hash Password
export const hashPassword = async (password) => {
  const saltRounds = 10; // Number of hashing rounds (adjust for security/performance)
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Verify Password
export const verifyPassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch; // true if the password matches, false otherwise
};
