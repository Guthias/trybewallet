const createOptions = (optionList = []) => optionList.map((option) => ({
  value: option,
  text: option,
}));

export default createOptions;
