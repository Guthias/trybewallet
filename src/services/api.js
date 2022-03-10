// eslint-disable-next-line import/prefer-default-export
export const getExchangeRates = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  return response.json();
};
