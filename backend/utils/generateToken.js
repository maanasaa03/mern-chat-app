import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, { //userid is the info embedded into the token and the secret key is used to sign it
		expiresIn: "5d",
	});

	res.cookie("jwt", token, {
		maxAge: 5 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // cant be accessed via js so prevent XSS
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;
