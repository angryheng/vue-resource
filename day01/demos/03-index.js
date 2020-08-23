function compiler(template, data) {
  let reg = /\{\{(.+?)\}\}/g;
  for (let i = 0; i < template.childNodes.length; i++) {
    if (template.childNodes[i].nodeType === 3) {
      template.childNodes[i].nodeValue = template.childNodes[
        i
      ].nodeValue.replace(reg, function(_, g) {
        return data[g.trim()];
      });
    } else if (template.childNodes[i].nodeType === 1) {
      compiler(template.childNodes[i], data);
    }
  }
}

function ZVue(options) {
  this._data = options.data;
  this._el = options.el;
}
