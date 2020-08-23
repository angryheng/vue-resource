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
  // 内部的数据使用 _ 开头，只读数据使用 $ 开头
  this._data = options.data;
  this._el = options.el;
  this.$el = this._templateDOM = document.querySelector(this._el);
  this._parent = this._templateDOM.parentNode;
  // 渲染方法
  this.render();
}
ZVue.prototype.render = function() {
  this.compiler();
};
ZVue.prototype.compiler = function() {
  let realHTML = this._templateDOM.cloneNode(true);
  compiler(realHTML, this._data);
  this.update(realHTML);
};
ZVue.prototype.update = function(real) {
  this._parent.replaceChild(real, document.querySelector("#root"));
};

let root = new ZVue({
  el: "#root",
  data: {
    name: "zhangheng",
    msg: "nice"
  }
});
