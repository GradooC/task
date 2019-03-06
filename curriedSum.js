// Реализовать функцию sym(x)(y)...(n)

const sum = (a) => {
  const retFn = (b) => sum(a + b);
  retFn.toString = () => a;
  return retFn;
};

const a = sum(2)(3);
console.log(`${a}`);
const b = a(5);
console.log(`${b}`);