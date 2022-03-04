const passwordValidator = (password) => {
  const MIN_PASSWORD_LENGTH = 6;
  return password.length >= MIN_PASSWORD_LENGTH;
};

export default passwordValidator;
