let ul2 = document.createElement("ul");
ul2.id = "list";
for (let i = 1; i <= 7; i++) {
    let li = document.createElement("li");
    li.innerHTML = "Item " + i;
    ul2.appendChild(li);
}
document.body.appendChild(ul2);
for (let i = 8; i <= 10; i++) {
    let li = document.createElement("li");
    li.innerHTML = "Item " + i;
    ul2.appendChild(li);
}
ul2.children[0].style.color = "red";
ul2.children[2].style.backgroundColor = "blue";
ul2.removeChild(ul2.children[3]);

let newLi = document.createElement("li");
newLi.innerHTML = "New Item";
ul2.insertBefore(newLi, ul2.children[3]);
