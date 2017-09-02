const provinces = require('./provinces');

module.exports = {
  getProvinces: () => Object.keys(provinces)
};
