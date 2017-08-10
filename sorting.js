function Sorting() {
}

Sorting.prototype.BubbleSort = function (items) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < items.length-1; i++) {
            if (items[i] > items[i+1]) {
                swapAdjacent(items, i);
                swapped = true;
            }
        }
    } while (swapped);
};

function swapAdjacent(a, i) {
    var temp = a[i];
    a[i] = a[i+1];
    a[i+1] = temp;
}


module.exports = Sorting;