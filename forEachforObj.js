// Написать реализацию метода forEach для объектов
Object.prototype.forEach = function (fn, thisArg) {
  Object.keys(this).forEach((key, index) => fn.apply(thisArg, [key, index, this]));
};

//Вычислить Math.max на массиве
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
