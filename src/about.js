function about() {
    const indexContainer = document.querySelector("#content");
    indexContainer.innerHTML='';
    const divBlock = document.createElement("div");
    divBlock.setAttribute("class", "boyo");
    divBlock.textContent = "About";
    indexContainer.appendChild(divBlock);
}

export { about };