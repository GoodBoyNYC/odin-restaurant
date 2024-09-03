function home() {
    const indexContainer = document.querySelector("#content");
    indexContainer.innerHTML='';
    const divBlock = document.createElement("div");
    divBlock.setAttribute("class", "boyo");
    divBlock.textContent = "Home";
    indexContainer.appendChild(divBlock);
}

export { home };