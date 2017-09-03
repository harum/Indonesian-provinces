const provincesData = require('./provinces');

const filter = (name, key) => {
  return name.toLowerCase().indexOf(key.toLowerCase()) >= 0;
};

const getProvince = (province) => {
  return provincesData[province.charAt(0).toUpperCase() + province.slice(1)];
};

const getProvinces = (key = '') => {
  return Object.keys(provincesData)
    .filter(province => filter(province, key));
};

const getDistricts = (province = '', key = '') => {
  return (
    getProvince(province) &&
    getProvince(province).districts
    .filter(district => filter(district, key)) ||
    []
  );
}

const getCities = (province = '', key = '') => {
  return (
    getProvince(province) &&
    getProvince(province).cities
    .filter(district => filter(district, key)) ||
    []
  );
}

const getCitiesAndDistricts = (province = '', key = '') => {
  return (
    []
    .concat(getCities(province, key))
    .concat(getDistricts(province, key))
  );
}

module.exports = {
  getProvinces,
  getDistricts,
  getCities,
  getCitiesAndDistricts
};
