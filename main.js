const canvasWrap = document.querySelector(".canvas-wrap")
const canvas = canvasWrap.querySelector("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener('resize', resizeCanvas, false);

let mouse = {
    X: 0,
    Y: 0
}

let flags = {
    isDrawing: false,
    currentColor: "black",
    currentWidth: 5
}
        
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
}

canvas.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    mouse = {x: mouseX, y: mouseY};

    //odczytywanie położenia myszki
});

canvas.addEventListener("mousedown", () => {

    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY)
    ctx.lineWidth = flags.currentWidth;
    ctx.strokeStyle = flags.currentColor;
    draw();

    canvas.addEventListener("mousemove", draw)

    window.addEventListener("mouseup", () =>
    {
        canvas.removeEventListener("mousemove", draw)
    })

    function draw() {
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }

    //
})

resizeCanvas();
