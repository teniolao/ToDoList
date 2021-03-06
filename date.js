exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getYear = function () {
  const today = new Date();

  const options = {
    year: "numeric",
  };

  return today.toLocaleDateString("en-US", options);
};

//console.log(module.exports)
