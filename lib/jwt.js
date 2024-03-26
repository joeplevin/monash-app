import jwt from "jsonwebtoken";

const DEFAIULT_EXPIRATION = "1d";

export function signJwt(payload, DEFAIULT_EXPIRATION) {
  const secretKey = process.env.JWT_USER_ID_SECRET;
  const token = jwt.sign(payload, secretKey);
  return token;
}

export function verifyJwt(token) {
  try {
    const secretKey = process.env.JWT_USER_ID_SECRET;
    const payload = jwt.verify(token, secretKey);
    return payload;
  } catch (error) {
    console.error("Error verifying jwt:", error);
    return null;
  }
}
