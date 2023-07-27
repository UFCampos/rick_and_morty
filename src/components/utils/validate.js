const validate = (userData) => {
    console.log(userData);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = userData.email;
    const password = userData.password;
    const errors = {};

    if (email.length === 0 || email.length > 35 || !emailRegex.test(email)) {
        errors.email = "Invalid email format";
    }

    if (password.length < 6 || password.length > 10) {
        errors.password = "Password must be 6 to 10 characters long";
    }

    return errors;
};

export default validate;
