const capitalize = (string) => {
  if (typeof(string) === "string") {
    return string.toUpperCase();
  }
};

module.exports = capitalize;