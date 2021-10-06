module.exports = (data, length) => {
  const string = "abcdefghijklmnopqrstuvwxyz$1234567890*-~";
  let myString = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * string.length);

    myString += string[randomNumber];
  }
  return data + myString;
};
