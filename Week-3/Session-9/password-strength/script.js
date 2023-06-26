const isStrongPassword = function (password) {
  /* 
  To check if password is greater than 8 characters,
  password does not contain the word password,
  password has at east one uppercase letter
  */
  const strongPassword =
    password.length >= 8
      ? !password.toLowerCase().includes("password")
        ? password.match(/[A-Z]/)
          ? true
          : false
        : false
      : false;

  return strongPassword;
};

console.log(isStrongPassword("Querty123"));
