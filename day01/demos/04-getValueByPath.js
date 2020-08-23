function getValueByPath(obj, path) {
  let res = obj;
  let prop = null;
  let paths = path.split(".");
  while ((prop = paths.shift())) {
    res = res[prop];
  }
  return res;
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
console.log(getValueByPath(o, "a.b.c"));
console.log(getValueByPath(o, "a.b.c.d.e.f"));
