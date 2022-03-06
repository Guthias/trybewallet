export const USER_LOGIN = '@user/login';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});
