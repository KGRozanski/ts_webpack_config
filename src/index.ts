import "./style.scss";

let c = document.getElementById('canv') as HTMLCanvasElement;
let ctx = c.getContext('2d');

ctx.beginPath();
ctx.rect(20, 20, 30, 30);
ctx.stroke();

interface PressedKeys{
    [direction: string]: boolean;
}

interface State{
    pressedKeys: PressedKeys
}


let state: State = {
    pressedKeys: {
        left: false,
        right: false,
        up: false,
        down: false
    }
}


function update(progress: number) {
    // Update the state of the world for the elapsed time since last render

    ctx.clearRect(0, 0, 30, 30)
}

function draw() {
    // Draw the state of the world
}

function loop(timestamp: number) {
    var progress = timestamp - lastRender

    update(progress)
    draw()

    lastRender = timestamp
    window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)

interface KeyMap{
    [number: number]: string;
}

let keyMap: KeyMap = {
    38: 'up',
    39: 'right',
    37: 'left',
    40: 'down'
}

function keydown(event: any) {
    var key = keyMap[event.keyCode];
    state.pressedKeys[key] = true;
    console.log(state.pressedKeys)
}

function keyup(event: any) {
    var key = keyMap[event.keyCode]
    state.pressedKeys[key] = false;
}

window.addEventListener("keydown", keydown, false)
window.addEventListener("keyup", keyup, false)

// class Shape {

//     sayName() {
//         console.log("Shape");
//     }

//     sayHello() {
//         console.log("hello!");
//     }

// }

// class Square extends Shape{
//     constructor() {
//         super();
//         this.sayHello();
//     }

//     sayHello() {
//         console.log('Hello world!');
//     }
// }

// let squere = new Square();