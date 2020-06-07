//Initilizes values for loops
let i = 0;
let n = 0;
let j = 0;
//Sets initial width between bars to 5 px
let w = 5;

//Initializes values for sorting
let heights = [];
let sortingMethod = 0;
let pivot = 0;
let pivotValue = 0;
let pivotIndex = 0;
let wp = 5;

//Sets up canvas for p5.js
function setup() {
    createCanvas(windowWidth, windowHeight / 1.4);
    heights = Array(floor(width / w));
    //Generates a random array
    for (let i = 0; i < heights.length; i++) {
        heights[i] = random(height - 50) + 20;
    }
}

//Draw function for p5.js
function draw() {

    //Uses slider to determine size of array.
    let slider = document.getElementById("myRange");
    w = slider.value;


    if (w != wp) {
        heights = Array(floor(width / w));
        regenerate(heights);
        wp = w;
    }

    //Buttons used to determine sorting method and to regenerate.
    document.getElementById("regenerate").onclick = function() {regenerate(heights)};
    document.getElementById("bubbleSort").onclick = function() {bubbleSortButton()};
    document.getElementById("quickSort").onclick = function() {quickSortButton()};
    document.getElementById("mergeSort").onclick = function() {mergeSortButton()};

    //Calls method of sorting depending on button click.
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
    //Updates drawing after every cycle through array.
    updateBars(heights);
}

//Function to draw the array on canvas.
function updateBars(array) {
    background('#00aea9');
    noStroke();
    for (let i = 0; i < array.length; i++) {
        fill(array[i]/2);
        rect(i * w, height - array[i], w-2, array[i]);
    }
}

//Function to randomly generate all the values of the array.
function regenerate(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = random(height - 50) + 20;
    }
    updateBars(array);
    sortingMethod = 0;
}