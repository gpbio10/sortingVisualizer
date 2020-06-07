
//Bubble Sort
//Changes sorting method to Bubble on button click.
function bubbleSortButton() {
    sortingMethod = 1;
    console.log(sortingMethod);
}

//Async function that swaps value if one is larger than the other.
async function bubbleSort(array, start, end) {
    if (j < array.length) {
        //Cycles through all the values in the array.
        for (let i = start; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                await swap(array, i, i + 1);
            }
        }
    }
    //Changes sorting method to none when array is fully sorted.
    else {
        sortingMethod = 0;
        j = 0;
    }

    j++;

    //Draws updated array after each swap.
    updateBars(array);
    
}


//Quick Sort
//Button changes sorting method to Quick Sort.
function quickSortButton() {
    sortingMethod = 2;
    console.log("sup");
}

//Performs Quick Sort
async function quickSort(array, start, end) {
    if (start >= end) {
        sortingMethod = 0;
        //console.log(array);
        return;
    }
    //Sets the value of the pivot by calling partition function
    pivot = await partition(array, start, end);

    updateBars(heights);
  
    //Recalls quicksort function and further breaks down the array
    await quickSort(array, start, pivot - 1);
    await quickSort(array, pivot + 1, end);
}
        
//Used to find pivot value and swaps values
async function partition(array, start, end) {
    pivotValue = array[end];
    pivotIndex = start;
    //Cycles through array
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            await sleep(8);
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(array, pivotIndex, end);
    return pivotIndex;
}



//Merge Sort
//Changes sorting method to Merge Sort
function mergeSortButton() {
    sortingMethod = 3;
}

//Performs merge sort
function mergeSort(array) {
    copy = array.slice()
    mergeSortSlice(copy, 0, copy.length);
    return;
}

//Initialize values array
let values = [];

//Splits array into multiple smaller arrays to sort faster
async function mergeSortSlice(array, start, end) {
    if (end - start <= 1)
        return;
    
    //Finds middle value
    var mid = Math.round((end+start) / 2);

    //Calls to narrow down array
    await mergeSortSlice(array, start, mid);
    await mergeSortSlice(array, mid, end);

    //
    let i = start, j = mid;
    while (i < end && j < end) {

        //Splices the split arrays
        await sleep(10);
        await updateBars(values);
        if (array[i] > array[j]) {
            let t = array[j];
            array.splice(j, 1);
            array.splice(i, 0, t);
            j++;
        }
        i++;

        if (i == j) {
            j++;
        }

        values = array.slice();
    }
    //Changes sorting method to none when sorting is finished
    sortingMethod = 0;

    //Resets after regenerate button is clicked
    sleep(200);
    document.getElementById("regenerate").onclick = function() {location.reload()};
}

//Swaps values using temporary hold
async function swap(values, a, b) {
    let hold = values[a];
    values[a] = values[b];
    values[b] = hold;
}

//JavaScript sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
