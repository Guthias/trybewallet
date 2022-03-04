// Source: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

const emailValidator = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return email.match(regex);
};

export default emailValidator;
