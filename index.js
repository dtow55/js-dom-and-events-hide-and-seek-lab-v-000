function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let children = document.querySelectorAll('#grand-node div');
  return children[children.length - 1];
}

function increaseRankBy(n) {
  document.querySelectorAll('.ranked-list li').forEach(function(node) {
    node.firstChild.nodeValue = parseInt(node.firstChild.nodeValue) + n;
  })
}