// Написать реализацию метода forEach для объектов
Object.prototype.forEach = function (fn) {
  return Object.keys(this).reduce((acc, key) => ({...acc, [key]: fn(this[key])}), {});
};

//Вычислить Math.max на массиве
Array.prototype.max = function() {
  return Math.max(...this);
};
