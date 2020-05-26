function bubbleSortButton() {
    sortingMethod = 1;
    console.log(sortingMethod);
}


async function bubbleSort(array, start, end) {
    if (j < array.length) {
        for (let i = start; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                await swap(array, i, i + 1);
            }
        }
    }
    else {
        sortingMethod = 0;
        j = 0;
    }

    j++;

    updateBars(array);
    
}

function quickSortButton() {
    sortingMethod = 2;
    console.log("sup");
}


async function quickSort(array, start, end) {
    if (start >= end) {
        sortingMethod = 0;
        //console.log(array);
        return;
    }
    pivot = await partition(array, start, end);

    updateBars(heights);
  
    await quickSort(array, start, pivot - 1);
    await quickSort(array, pivot + 1, end);
}
        

async function partition(array, start, end) {
    pivotValue = array[end];
    pivotIndex = start;
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

function mergeSortButton() {
    sortingMethod = 3;
}

function mergeSort(array) {
    copy = array.slice()
    mergeSortSlice(copy, 0, copy.length);
    return;
}

let values = [];

async function mergeSortSlice(array, start, end) {
    if (end - start <= 1)
        return;
    
    var mid = Math.round((end+start) / 2);

    await mergeSortSlice(array, start, mid);
    await mergeSortSlice(array, mid, end);

    let i = start, j = mid;
    while (i < end && j < end) {
        await sleep(10);
        await updateBars(values);
        if (array[i] > array[j]) {
            let t = array[j]; array.splice(j, 1); array.splice(i, 0, t);
            j++;
        }
        i++;

        if (i == j) {
            j++;
        }

        values = array.slice();
    }
    sortingMethod = 0;

    sleep(200);
    document.getElementById("regenerate").onclick = function() {location.reload()};
}


async function swap(values, a, b) {
    let hold = values[a];
    values[a] = values[b];
    values[b] = hold;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
