import jwt from "jsonwebtoken";

type TokenUser = {
  email: string;
  name: string;
};

const signAccessToken = (user: TokenUser) =>
  signToken(user, process.env.ACCESS_TOKEN_SECRET as string, "15m");

const signRefreshToken = (user: TokenUser) =>
  signToken(user, process.env.REFRESH_TOKEN_SECRET as string, "1d");

const signToken = (user: TokenUser, secret: string, expiresIn: string) => {
  const token = jwt.sign(
    {
      email: user.email,
    },
    secret,
    { expiresIn }
  );

  return token;
};

export { signAccessToken, signRefreshToken };
