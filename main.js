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
    currentWidth: 1,
    currentTool: "brush"
}
        
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  changeTool();
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
    ctx.lineWidth = flags.currentWidth*5;
    draw();

    canvas.addEventListener("mousemove", draw)

    window.addEventListener("mouseup", () =>
    {
        canvas.removeEventListener("mousemove", draw)
    })

    function draw() {

        if(flags.currentTool === "spray") drawSpray()
        else {
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
        }
    }

    function drawSpray()
    {
        const y = flags.currentWidth * 5;

        for(i=0; i<y; i++)
        {
            const x = flags.currentWidth*6;
            let random = Math.random() * (x - -x) + -x;
            ctx.fillRect(mouse.x + Math.random() * (x - -x) + -x, mouse.y + Math.random() * (x - -x) + -x, 5, 5)
        }
    }

})

function changeTool()
{
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.shadowBlur = 0;
    ctx.shadowColor = flags.currentColor;
    ctx.strokeStyle = flags.currentColor;
    ctx.fillStyle = flags.currentColor;

    if(flags.currentTool === "brush")
    {
        ctx.shadowBlur = "5";
        ctx.shadowColor = flags.currentColor;
    }
    else if(flags.currentTool === "eraser")
    {
        ctx.strokeStyle = "white";
    }
}

resizeCanvas();
