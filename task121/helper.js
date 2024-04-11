export const min = (a, b, c) => {
  return a < b? (a<c? a:c):(b<c? b:c);
}