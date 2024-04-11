export const getLesserEvil = (threat1, threat2) => {
  //  return threat1.evilFactor < threat2.evilFactor? threat1 : threat2;
  if (threat1.evilFactor < threat1.evilFactor2) {
    return threat1;
  } else {
    return threat2;
  }
}