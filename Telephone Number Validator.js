function telephoneCheck(str) {
  let trueRegex = /^1*[(|\s]*\d{3}[)|\s|-]*\d{3}[)|\s|-]*\d{4}$/;
  let bracketLeftRegex = /(?=\(\d{3}[^)])/;
  let bracketRightRegex = /(?=[^(]\d{3}\))/;
  let bracketRight2Regex = /^\d{3}\)-\d{3}[\s|-]*\d{4}$/;
  if (trueRegex.test(str)) {
    if (bracketLeftRegex.test(str) | bracketRightRegex.test(str) | bracketRight2Regex.test(str)) {
      return false;
    } else {
      return true;
    };
  };
  return false;
}

console.log(telephoneCheck("(555)5(55?)-5555")); // false
