// 
function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
  let ranked = document.querySelectorAll('ul.ranked-list li');
    for (let i=0; i<ranked.length; i++) {
        ranked[i].innerHTML = (parseInt(ranked[i].innerHTML) + n).toString();
    }
}


function deepestChild() {
  let nested = document.getElementById('grand-node').querySelectorAll('div');
  return nested[nested.length - 1];
}


