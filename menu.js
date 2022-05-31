let menuColors = canvasWrap.querySelector(".colors");
const colorList = ["black", "gray", "#964B00", "red", "orange", "yellow", "green", "lightgreen", "blue", "lightblue", "purple", "pink"];
const tools = canvasWrap.querySelector(".tools").querySelectorAll('div');
const drawWidth = canvasWrap.querySelector(".lineWidth").querySelectorAll('div');
const clear = canvasWrap.querySelector(".clear");
const hideButton = canvasWrap.querySelector(".hide");

colorList.forEach((element => {
    let div = document.createElement('div');
    div.style.backgroundColor = element;
    menuColors.appendChild(div);

    div.addEventListener("click", () => {
        flags.currentColor = element;
        if(flags.currentTool === "eraser") flags.currentTool = "brush";
        changeTool();
    });
}))


drawWidth.forEach((element => {
    element.addEventListener('click', () => {
        flags.currentWidth = element.getAttribute("value");
    });
}));

tools.forEach((element => {
    element.addEventListener('click', () => {
        flags.currentTool = element.getAttribute("value");
        changeTool();
    });
}))

clear.addEventListener("click", () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = flags.currentColor;
})

hideButton.addEventListener("click", () => {
    const menu = canvasWrap.querySelector(".menu");
    menu.classList.toggle("hidden");
}
)
