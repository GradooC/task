//Написать полифил для Object.create()

// То до чего я додумался. Не полифил, а скорее собственная реализация
// Object.createNew = proto => ({ ...proto });

function inherit(proto) {
  function F() {};
  F.prototype = proto;
  var object = new F;
  return object;
};

if (!Object.create) {
  Object.create = inherit;
};
