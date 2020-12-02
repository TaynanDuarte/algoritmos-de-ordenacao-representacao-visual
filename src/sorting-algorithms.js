

//#region Insertion Sort
async function insertionSort(list) {

    for (let i = 0; i < list.length - 1; i++) {
        let keyIdx = i + 1;
        let key = list[keyIdx];
        let j = keyIdx - 1;
        while (key < list[j]) {
            list[j + 1] = list[j];
            j--;
        
            await drawVisualRepresentation(list, 'insertion-sort-visual-representation-container', {
                firstKey: {
                    value: j + 1,
                    color: '#b71c1c' // vermelho
                },
                secondKey: {
                    value: keyIdx,
                    color: '#eeff41' // amarelo
                }
            });
        }

        list[j + 1] = key;
        await drawVisualRepresentation(list, 'insertion-sort-visual-representation-container', {
            firstKey: {
                value: j + 1,
                color: '#b71c1c' // vermelho
            },
            secondKey: {
                value: keyIdx,
                color: '#eeff41' // amarelo
            }
        });
    }

    setNumericSortedList(list, 'insertion-sort-numeric-sorted-list');

    return list;
}
//#endregion

//#region BubbleSort
async function bubbleSort(list) {

    let limit = list.length;

    while (limit > 0) {

        for (let i = 0; i < limit; i++) {
            if (list[i] > list[i + 1]) {
                let aux = list[i];
                list[i] = list[i + 1];
                list[i + 1] = aux;
            }
            await drawVisualRepresentation(list, 'bubble-sort-visual-representation-container', {
                firstKey: {
                    value: i,
                    color: '#b71c1c' // vermelho
                },
                secondKey: {
                    value: i + 1,
                    color: '#eeff41' // amarelo
                }
            });
        }

        limit--;
    }

    setNumericSortedList(list, 'bubble-sort-numeric-sorted-list');

    return list;
}
//#endregion

//#region Selection Sort
async function selectionSort(list) {

    for (let i = 0; i <= list.length; i++) {
        for (let j = i; j <= list.length; j++) {
            if (list[j] < list[i]) {
                let aux = list[j];
                list[j] = list[i];
                list[i] = aux;
            }
            await drawVisualRepresentation(list, 'selection-sort-visual-representation-container', {
                firstKey: {
                    value: i,
                    color: '#b71c1c' // vermelho
                },
                secondKey: {
                    value: j,
                    color: '#eeff41' // amarelo
                }
            });
        }
    }

    setNumericSortedList(list, 'selection-sort-numeric-sorted-list');

    return list;
}
//#endregion

//#region CombSort
async function combSort(list) {

    let i = 0;
    let gapValue = parseInt(list.length / 1.2);
    let j = i + gapValue;
    while (gapValue >= 1) {

        if (j > list.length) {
            i = 0;
            gapValue = parseInt(gapValue / 1.2);
            j = i + gapValue;
        }

        if (list[i] > list[j]) {
            let aux = list[i];
            list[i] = list[j];
            list[j] = aux;
        }

        i++;
        j = i + gapValue;

        await drawVisualRepresentation(list, 'comb-sort-visual-representation-container', {
            firstKey: {
                value: i,
                color: '#b71c1c' // vermelho
            },
            secondKey: {
                value: j,
                color: '#eeff41' // amarelo
            }
        });

    }

    setNumericSortedList(list, 'comb-sort-numeric-sorted-list');

    return list;

}
//#endregion

//#region Merge Sort
async function mergeSort(list, leftIdx = 0, rightIdx = null) {

    rightIdx = rightIdx == null ? list.length : rightIdx;

    if (rightIdx - leftIdx > 1) {
        let m = parseInt((rightIdx + leftIdx) / 2);
        await mergeSort(list, leftIdx, m);
        await mergeSort(list, m, rightIdx);
        await merge(list, leftIdx, m, rightIdx);
    }

    setNumericSortedList(list, 'merge-sort-numeric-sorted-list');

    return list;

}
async function merge(list, leftIdx, mIdx, rightIdx) {

    let leftList = list.slice(leftIdx, mIdx);
    let rightList = list.slice(mIdx, rightIdx);

    let lIdx = 0;
    let rIdx = 0;


    for (let i = leftIdx; i < rightIdx; i++) {

        if (lIdx >= leftList.length) {
            list[i] = rightList[rIdx];
            rIdx++;
        }
        else if (rIdx >= rightList.length) {
            list[i] = leftList[lIdx];
            lIdx++;
        }
        else if (leftList[lIdx] < rightList[rIdx]) {
            list[i] = leftList[lIdx];
            lIdx++;
        } else {
            list[i] = rightList[rIdx];
            rIdx++;
        }

        await drawVisualRepresentation(list, 'merge-sort-visual-representation-container', {
            firstKey: {
                value: leftIdx,
                color: '#b71c1c' // vermelho
            },
            secondKey: {
                value: rightIdx,
                color: '#eeff41' // amarelo
            }
        });
    }

}
//#endregion

//#region Quick Sort
async function quickSort(list, firstIdx = 0, lastIdx = null) {

    lastIdx = lastIdx == null ? list.length - 1 : lastIdx;

    if (firstIdx < lastIdx) {
        let pivotIdx = await partition(list, firstIdx, lastIdx);
        await quickSort(list, firstIdx, pivotIdx - 1);
        await quickSort(list, pivotIdx + 1, lastIdx);

    }

    setNumericSortedList(list, 'quick-sort-numeric-sorted-list');

    return list;
}

async function partition(list, firstIdx, pivotIdx) {

    let j = firstIdx;

    for (let i = firstIdx; i < pivotIdx; i++) {

        if (list[i] <= list[pivotIdx]) {
            let aux = list[i];
            list[i] = list[j];
            list[j] = aux;

            j++;

        }

        await drawVisualRepresentation(list, 'quick-sort-visual-representation-container', {
            firstKey: {
                value: firstIdx,
                color: '#b71c1c' // vermelho
            },
            secondKey: {
                value: j,
                color: '#eeff41' // amarelo
            },
            thirdKey: {
                value: pivotIdx,
                color: '#76ff03' // verde
            }
        });
    }

    let aux = list[j];
    list[j] = list[pivotIdx];
    list[pivotIdx] = aux;

    return j;

}
//#endregion
