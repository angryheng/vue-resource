let tempNode = document.querySelector("#root");
let data = {
  name: "张衡",
  msg: "想买新的笔记本电脑"
};
// console.log(tempNode.childNodes);
// console.log(tempNode.children);

let reg = /\{\{(.+?)\}\}/g;
let generateNode = tempNode.cloneNode(true);
console.log(tempNode);
function compiler(template, data) {
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
console.log(generateNode);
compiler(generateNode, data);
root.parentNode.replaceChild(generateNode, root);
