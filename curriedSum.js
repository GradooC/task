// Реализовать функцию sym(x)(y)...(n)

const sum = (a) => {
  const retFn = (b) => sum(a + b);
  retFn.toString = () => a;
  return retFn;
};
