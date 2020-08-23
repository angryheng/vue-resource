function createGetValueByPath(path) {
  let paths = path.split(".");
  return function getValueByPath(obj) {
    let res = obj;
    let prop = null;
    while ((prop = paths.shift())) {
      res = res[prop];
    }
    return res;
  };
}

var o = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: "Success"
          }
        }
      }
    }
  }
};
let getValueByPath = createGetValueByPath("a.b.c.d");
console.log(getValueByPath(o));
