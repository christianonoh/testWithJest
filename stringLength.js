const stringLength = (string) => {
  if(string.length > 0 && string.length < 11) {
    return string.length;
  }
};

module.exports = stringLength;
