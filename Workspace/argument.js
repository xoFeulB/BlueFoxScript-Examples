async (A, B, C, ...args) => {
  console.log(A, B, C, ...args);
  return [A, B, C, ...args];
}