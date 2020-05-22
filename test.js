let values = [];
let w = 10;

let states = [];


function setup() {
    createCanvas(windowWidth, windowHeight / 1.25);
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = random(height - 50) + 20;
      states[i] = -1;
    }
    quickSort(values, 0, values.length - 1);
  }

  async function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }
    let index = await partition(arr, start, end);
    states[index] = -1;
  
    await Promise.all([
      quickSort(arr, start, index - 1),
      quickSort(arr, index + 1, end)
    ]);
  }

async function partition(array, start, end) {
    for (let i = start; i < end; i++) {
        states[i] = 1;
    }

    let pivotValue = array[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            await swap(array, i, pivotIndex);
            states[pivotIndex] = -1;
            pivotIndex++;
            states[pivotIndex] = 0;
        }
    }

    await swap(array, pivotIndex, end);

    for (let i = start; i < end; i++) {
        if (i != pivotIndex) {
            states[i] = -1;
        }
    }

    return pivotIndex;

}

function bubbleSort(array, start, end) {
    for (let i = start; i < end; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
        }
    }
}
function draw() {
    background('#00aea9');
    
    for (let i = 0; i < values.length; i++) {
        noStroke();
        if (states[i] == 0) {
            fill('#E0777D');
        }
        else if (states[i] == 1) {
            fill('#D6FFB7');
        }
        else {
            fill(values[i] / 2);
        }
        rect(i * w, height - values[i], w - 5, values[i]);
    }
}

async function swap(array, a, b) {
    await sleep(20);
    let hold = array[a];
    array[a] = array[b];
    array[b] = hold;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function regenerate() {
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height - 50) + 20;
        states[i] = -1;
    }
}