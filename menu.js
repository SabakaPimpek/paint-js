let menuColors = canvasWrap.querySelector(".colors");
const colorList = ["black", "gray", "brown", "red", "orange", "yellow", "green", "lightgreen", "blue", "lightblue", "purple", "pink"];
const widthList = [5, 10, 20, 30, 40];
const eraser = canvasWrap.querySelector(".eraser");

colorList.forEach((element => {
    let div = document.createElement('div');
    div.style.backgroundColor = element;
    menuColors.appendChild(div);

    div.addEventListener("click", () => {
        flags.currentColor = element;
        
    });
}))

widthList.forEach((element => {
    let div = document.createElement('div');
    div.style.height = element + "px";
    div.style.width = element + "px";
    canvasWrap.querySelector('.lineWidth').appendChild(div);

    div.addEventListener("click", () => {
        flags.currentWidth = element;
    });
}))



eraser.addEventListener('click', () => {
    flags.currentColor = "white";
})

