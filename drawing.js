let i = 0;
let n = 0;
let j = 0;
let w = 5;
let heights = [];
let sortingMethod = 0;
let pivot = 0;
let pivotValue = 0;
let pivotIndex = 0;

function setup() {
    createCanvas(windowWidth, windowHeight / 1.25);
    heights = Array(floor(width / w));
    for (let i = 0; i < heights.length; i++) {
        heights[i] = random(height - 50) + 20;
    }
}

function draw() {

    document.getElementById("regenerate").onclick = function() {regenerate(heights)};

    document.getElementById("bubbleSort").onclick = function() {bubbleSortButton()};
    document.getElementById("quickSort").onclick = function() {quickSortButton()};
    document.getElementById("mergeSort").onclick = function() {mergeSortButton()};

    if (sortingMethod == 1) {
        bubbleSort(heights, 0, heights.length);
    }
    
    if (sortingMethod == 2) {
        quickSort(heights, 0, heights.length);
    }

    if (sortingMethod == 3) {
        heights = mergeSort(heights);
        sortingMethod = 0;
    }
    updateBars(heights);
}

function updateBars(array) {
    background('#00aea9');
    noStroke();
    for (let i = 0; i < array.length; i++) {
        fill(0);
        rect(i * w, height - array[i], 2, array[i]);
    }
}

function regenerate(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = random(height - 50) + 20;
    }
    updateBars(array);
    sortingMethod = 0;
}