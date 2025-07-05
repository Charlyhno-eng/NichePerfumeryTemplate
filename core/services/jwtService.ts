import jwt, { SignOptions } from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "dev-secret-key";

export const jwtService = {
  sign: (
    payload: string | object | Buffer,
    expiresIn: SignOptions["expiresIn"] = "1h",
  ): string => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
  },

  verify: (token: string): { email: string; iat: number; exp: number } => {
    return jwt.verify(token, SECRET_KEY) as {
      email: string;
      iat: number;
      exp: number;
    };
  },
};
