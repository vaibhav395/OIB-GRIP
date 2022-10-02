const todoitems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

input.addEventListener("keydown", function(event){
    if (event.key === "Enter")
        additem();
})

function additem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';
    console.log(divParent);

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";

    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "limegreen";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgrey";

    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);

    todoitems.appendChild(divParent);
    input.value = '';
}
// console.log(todoitems);
// console.log(divParent);