export const toLowerCase = (s) => {
  return s.toLowerCase();
}

export const toUpperCase = (s) => {
  return s.toUpperCase();
}

export const createSamples = (s) => {
  const lowerCaseSample = toLowerCase(s);
  const upperCaseSample = toUpperCase(s);
  return lowerCaseSample + upperCaseSample;
}