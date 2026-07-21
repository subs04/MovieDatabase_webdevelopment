import User from "../../data/user.js";

export async function register(userDetails) {
    return User.create(userDetails);
}

export async function login(email, password) {
    const user = User.findOne({ email });
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : null;
}