let ul = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.innerHTML = "Item " + i;
    li.style.color = "blue";
    ul.appendChild(li);
}
document.body.appendChild(ul);
