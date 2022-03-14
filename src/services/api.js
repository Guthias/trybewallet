export const getExchangeRates = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  return response.json();
};

export const getCurrencies = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const results = await response.json();
  return Object.keys(results).filter((currency) => currency !== 'USDT');
};
