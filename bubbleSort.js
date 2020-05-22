let values = [];
let w = 3;
let j = 0;
let i = 0;

function setup() {
    createCanvas(windowWidth, windowHeight / 1.25);
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height - 50) + 20;
    }
}

function draw() {
    background('#00aea9');

    if (j < values.length + 20) {
        for (let i = 0; i < values.length; i++) {
            sleep(30);
            if (values[i] > values[i + 1]) {
                swap(values, i, i + 1);
            }
        }
    }
    else {
        console.log("Done");
        noLoop();
    }

    j++;

    for (let i = 0; i < values.length; i++) {
        noStroke();
        fill(values[i] / 2);
        rect(i * w, height - values[i], w - 5, values[i]);
    }
}
async function swap(values, a, b) {
    await sleep(10);
    //await sleep(10);
    let hold = values[a];
    values[a] = values[b];
    values[b] = hold;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }