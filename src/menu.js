function menu() {
    const indexContainer = document.querySelector("#content");
    indexContainer.innerHTML='';
    const divBlock = document.createElement("div");
    divBlock.setAttribute("class", "boyo");
    divBlock.textContent = "Menu";
    indexContainer.appendChild(divBlock);
}

export { menu };