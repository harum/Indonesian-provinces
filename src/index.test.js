const provinceModule = require('./index');

test('get all province', () => {
  expect(provinceModule.getProvinces()).toEqual([
    'Aceh',
    'Bali',
    'Banten',
    'Bengkulu',
    'Gorontalo',
    'Jakarta',
    'Jambi',
    'Jawa Barat',
    'Jawa Tengah',
    'Jawa Timur',
    'Kalimantan Barat',
    'Kalimantan Selatan',
    'Kalimantan Tengah',
    'Kalimantan Timur',
    'Kalimantan Utara',
    'Kepulauan Bangka Belitung',
    'Kepulauan Riau',
    'Lampung',
    'Maluku',
    'Maluku Utara',
    'Nusa Tenggara Barat',
    'Nusa Tenggara Timur',
    'Papua',
    'Papua Barat',
    'Riau',
    'Sulawesi Barat',
    'Sulawesi Selatan',
    'Sulawesi Tengah',
    'Sulawesi Tenggara',
    'Sulawesi Utara',
    'Sumatera Barat',
    'Sumatera Selatan',
    'Sumatera Utara',
    'Yogyakarta'
  ]);
});

test('get province with filter', () => {
  expect(provinceModule.getProvinces('kalimantan')).toEqual([
    'Kalimantan Barat',
    'Kalimantan Selatan',
    'Kalimantan Tengah',
    'Kalimantan Timur',
    'Kalimantan Utara'
  ]);
});

test('get districts', () => {
  expect(provinceModule.getDistricts('Bali')).toEqual([
    "Badung",
    "Bangli",
    "Buleleng",
    "Gianyar",
    "Jembrana",
    "Karangasem",
    "Klungkung",
    "Tabanan"
  ]);
});

test('get districts lowercase', () => {
  expect(provinceModule.getDistricts('bali')).toEqual([
    "Badung",
    "Bangli",
    "Buleleng",
    "Gianyar",
    "Jembrana",
    "Karangasem",
    "Klungkung",
    "Tabanan"
  ]);
});

test('get districts with filter', () => {
  expect(provinceModule.getDistricts('bali', 'ba')).toEqual([
    "Badung",
    "Bangli",
    "Tabanan"
  ]);
});

test('get cities', () => {
  expect(provinceModule.getCities('Banten')).toEqual([
    "Cilegon",
    "Serang",
    "Tangerang Selatan",
    "Tangerang"
  ]);
});

test('get cities lowercase', () => {
  expect(provinceModule.getCities('banten')).toEqual([
    "Cilegon",
    "Serang",
    "Tangerang Selatan",
    "Tangerang"
  ]);
});

test('get cities with filter', () => {
  expect(provinceModule.getCities('banten', 'ci')).toEqual([
    "Cilegon"
  ]);
});

test('get cities and districts', () => {
  expect(provinceModule.getCitiesAndDistricts('bali', 'r')).toEqual([
    "Denpasar",
    "Gianyar",
    "Jembrana",
    "Karangasem"
  ]);
});
