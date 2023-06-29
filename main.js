let allChildren = document.querySelectorAll(".inner-children");

const handleClick = (event) => {
    console.log('I should be redudant');
}

const handleDrag = (event) => {
    event.preventDefault();
    event.target.setAttribute("draggable","true");
    console.log('Drag started');
}

allChildren.forEach((x) => {
    x.addEventListener("click", handleClick);
    x.addEventListener("dragstart", handleDrag);
}
