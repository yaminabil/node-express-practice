const Capitalize = (str) => {
  let word = str;
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i - 1] == " " || word[i - 1] == null) {
      result = result + word[i].toUpperCase();
    } else {
      result = result + word[i];
    }
  }
  return result;
};

let phrase = " a short sentence ";
console.log(Capitalize(phrase));

module.exports = Capitalize;
