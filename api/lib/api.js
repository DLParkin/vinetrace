// Helper function to gte the percentage by looping over the array results
// and resorting them based on key passed in
export const getPercentage = (array, key) => {
  var sum = {};
  array.forEach(function (a) {
    sum[a[key]] = (sum[a[key]] || 0) + a.percentage;
  });
  return Object.keys(sum).map(function (k) {
    return { percentage: sum[k], key: k };
  });
};

// TODO finish this as it is not working
// Helper function to get the percentage by looping over the array results
// and resorting them based on key passed in, this take sin 2 keys
export const getPercentageByYearAndVariety = (array, key1, key2) => {
  var sum1 = {};
  var sum2 = {};
  array.forEach(function (a) {
    sum1[a[key1]] = (sum1[a[key1]] || 0) + a.percentage;
  });

  array.forEach(function (a) {
    sum2[a[key2]] = (sum2[a[key2]] || 0) + a.percentage;
  });

  return Object.keys(sum1).map(function (k) {
    return { percentage: sum1[k], key: k };
  });
};

// Adds a switch so we can find the file we want to traverse and pass into the
// file reader
export const getDataFile = (id) => {
  switch (id) {
    case "11YVCHAR001":
      return "./data/11YVCHAR001.json";
    case "11YVCHAR002":
      return "./data/11YVCHAR002.json";
    case "15MPPN002-VK":
      return "./data/15MPPN002-VK.json";
    default:
      return "./";
  }
};
