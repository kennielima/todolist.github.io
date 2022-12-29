const ul = document.getElementById("ul");
const add = document.getElementById("add");
const text = document.getElementById("text");
const x = document.getElementById("x");
const li = document.getElementById("li");
// const ulNode = ul.childNodes;
// console.log(ulNode);

add.addEventListener('click', () => {
    let newLi = document.createElement('div');
    newLi.innerText = text.value;
    let newSpan = document.createElement('span');
    newSpan.textContent = "x";
    newLi.id = "liId";
    newLi.appendChild(newSpan);
    newLi.contentEditable = true;
    // newLi.innerHtml +=
    ul.append(newLi);
    newSpan.addEventListener('click', () => newSpan.parentNode.remove())
})

x.addEventListener('click', () => {
    x.parentNode.remove();
})



