// Переписать реализацию данного класса на синтаксисе ES5
// class Foo {
//   static method() {
//       return 'static mthod';
//   }

//   method() {
//       return 'method';
//   }

//   get x() {
//       return 'property x';
//   }
// }

function Foo() {}

Foo.method = function() {
  return "static method";
};

Foo.prototype.method = function() {
  return "method";
};

Object.defineProperty(Foo.prototype, "x", {
  get: function() {
    return "property x";
  },
});