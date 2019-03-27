export const mapKey = key => xs => xs.map(x => x[key]);
export const unique = xs =>
  xs.reduce((acc, x) => (acc.includes(x) ? acc : [...acc, x]), []);
