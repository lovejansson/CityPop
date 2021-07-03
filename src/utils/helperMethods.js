  // library "country-code-lookup" only works if the country name is capitalized
  function capitalize(text) {
      const textArray = text.split(" ");
      let lettersArray;
      for (let i = 0; i < textArray.length; ++i) {
          lettersArray = textArray[i].split("");
          if (lettersArray[0]) {
              lettersArray[0] = lettersArray[0].toUpperCase();
          }

          textArray[i] = lettersArray.join("");
      }

      return textArray.join(" ");
  }

  module.exports = { capitalize };