import argon2 from "argon2";
async function generateHash(password) {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (error) {
    console.error("Error generating hash:", error);
    throw error;
  }
}

async function verifyPassword(hash, password) {
  try {
    const isMatch = await argon2.verify(hash, password);

    return isMatch;
  } catch (error) {
    console.error("Error verifying password:", error);
    throw error;
  }
}

export async function hashPassword(password) {
  return generateHash(password)
    .then((hashedPassword) => {
      return hashedPassword;
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function validatePassword(hashedPassword, enteredPassword) {
  return verifyPassword(hashedPassword, enteredPassword)
    .then((isMatch) => {
      return isMatch;
    })
    .catch((error) => {
      console.error(error);
    });
}
