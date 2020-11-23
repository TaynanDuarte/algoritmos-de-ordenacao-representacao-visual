
/////////////////////////////////////// variáveis globais ///////////////////////////////////////
var globalDelay = 1.0;
var globalList = [];
////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////// utils /////////////////////////////////////////////
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setDelay() {
    let delay = document.getElementById('delay-input').value;
    globalDelay = parseFloat(delay);
}

function getDecreasingList(length) {
    let decreasingList = [];

    for (let i = length; i >= 0; i--) {
        decreasingList.push(i);
    }

    return decreasingList;
}


function getRandomList(length) {
    let randomList = [];

    for (let i = 0; i < length; i++) {
        let n = parseInt(Math.random() * 100);
        randomList.push(n);
    }

    return randomList;
}

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////// algoritmos /////////////////////////////////////////////

async function insertionSort(list) {

    for (let i = 0; i < list.length - 1; i++) {
        let keyIdx = i + 1;
        let key = list[keyIdx];
        let j = keyIdx - 1;
        while (key < list[j]) {
            list[j + 1] = list[j];
            j--;
            await drawVisualRepresentation(list, 'insertion-sort-visual-representation-container', j + 1, i);
        }
        console.log(j);

        list[j + 1] = key;
        await drawVisualRepresentation(list, 'insertion-sort-visual-representation-container', j + 1, i);
    }

    setNumericSortedList(list, 'insertion-sort-numeric-sorted-list');

    return list;
}

async function bubbleSort(list) {

    let limit = list.length;

    while (limit > 0) {

        for (let i = 0; i < limit; i++) {
            if (list[i] > list[i + 1]) {
                let aux = list[i];
                list[i] = list[i + 1];
                list[i + 1] = aux;
            }
            await drawVisualRepresentation(list, 'bubble-sort-visual-representation-container', i, i + 1);
        }

        limit--;
    }

    setNumericSortedList(list, 'bubble-sort-numeric-sorted-list');

    return list;

}

async function selectionSort(list) {

    for (let i = 0; i <= list.length; i++) {
        for (let j = i; j <= list.length; j++) {
            if (list[j] < list[i]) {
                let aux = list[j];
                list[j] = list[i];
                list[i] = aux;
            }
            await drawVisualRepresentation(list, 'selection-sort-visual-representation-container', i, j);
        }
    }

    setNumericSortedList(list, 'selection-sort-numeric-sorted-list');

    return list;

}

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

        await drawVisualRepresentation(list, 'comb-sort-visual-representation-container', i, j);

    }

    setNumericSortedList(list, 'comb-sort-numeric-sorted-list');

    return list;

}


async function mergeSort(list, leftIdx = 0, rightIdx = null) {

    if (rightIdx == null) { rightIdx = list.length; }

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

        await drawVisualRepresentation(list, 'merge-sort-visual-representation-container', leftIdx, rightIdx);
    }

}


////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// representação visual ////////////////////////////////////////

function drawNumericList(list, tagId) {
    let htmlContent = '';
    for (let number of list) {
        htmlContent += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${number}`;
    }

    document.getElementById(tagId).innerHTML = htmlContent;
}


async function drawVisualRepresentation(list, htmlTagID, keyIdx, keyIdx01) {

    // tons de roxo
    const colors = ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc',
        '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c',
        '#ea80fc', '#e040fb', '#d500f9', '#aa00ff'];

    const keyColor = '#b71c1c'; // vermelho
    const secondKeyColor = '#eeff41'; // amarelo

    let colorIdx = 0;
    let htmlContent = '';

    for (let i = 0; i < list.length; i++) {
        let height = list[i] / 10;
        let width = screen.width / (list.length * 100);

        if (i === keyIdx) {
            htmlContent += `<div class='col s1' style='height:${height}rem;width:${width}rem;background-color:${keyColor};'>${list[i]}</div>`;
        }
        else if (i === keyIdx01) {
            htmlContent += `<div class='col s1' style='height:${height}rem;width:${width}rem;background-color:${secondKeyColor};'>${list[i]}</div>`;
        }
        else {
            htmlContent += `<div class='col s1' style='height:${height}rem;width:${width}rem;background-color:${colors[colorIdx]};'>${list[i]}</div>`;
        }

        colorIdx++;
        colorIdx = colorIdx > colors.length - 1 ? 0 : colorIdx;
    }

    await sleep(globalDelay);

    document.getElementById(htmlTagID).innerHTML = "";
    document.getElementById(htmlTagID).innerHTML = htmlContent;
}


function setNumericSortedList(list, tagId) {

    let htmlContent = 'Resultado: ';
    for (let number of list) {
        htmlContent += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${number}`;
    }

    document.getElementById(tagId).innerHTML = '';
    document.getElementById(tagId).innerHTML = htmlContent;

}

////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////// ação dos botões ///////////////////////////////////////////

//ação do botão para gerar lista a aleatória
document.querySelector('#btn-set-random-list').addEventListener('click', e => {

    let listLength = parseInt(document.getElementById('input-list-length').value);
    let randomList = getRandomList(listLength);

    drawNumericList(randomList, 'insertion-sort-list-container');
    drawNumericList(randomList, 'bubble-sort-list-container');
    drawNumericList(randomList, 'selection-sort-list-container');
    drawNumericList(randomList, 'comb-sort-list-container');
    drawNumericList(randomList, 'merge-sort-list-container');

    globalList = randomList;

});

//ação do botão para gerar a lista decrescente
document.querySelector('#btn-set-decreasing-list').addEventListener('click', e => {

    let listLength = parseInt(document.getElementById('input-list-length').value);
    let decrList = getDecreasingList(listLength);

    drawNumericList(decrList, 'insertion-sort-list-container');
    drawNumericList(decrList, 'bubble-sort-list-container');
    drawNumericList(decrList, 'selection-sort-list-container');
    drawNumericList(decrList, 'comb-sort-list-container');
    drawNumericList(decrList, 'merge-sort-list-container');

    globalList = decrList;

});

//ação do botão de ordenação do insertion sort
document.querySelector('#btn-ord-insertion-sort').addEventListener('click', e => {

    setDelay();

    let globalListCopy = [];

    for (let n of globalList) {
        globalListCopy.push(n);
    }

    let ordList = insertionSort(globalListCopy);

});

//ação do botão de ordenação do bubble sort
document.querySelector('#btn-ord-bubble-sort').addEventListener('click', e => {

    setDelay()

    let globalListCopy = [];

    for (let n of globalList) {
        globalListCopy.push(n);
    }

    let ordList = bubbleSort(globalListCopy);

});

//ação do botão de ordenação do selection sort
document.querySelector('#btn-ord-selection-sort').addEventListener('click', e => {

    setDelay();

    let globalListCopy = [];

    for (let n of globalList) {
        globalListCopy.push(n);
    }

    let ordList = selectionSort(globalListCopy);


});


//ação do botão de ordenação do comb sort
document.querySelector('#btn-ord-comb-sort').addEventListener('click', e => {

    setDelay();

    let globalListCopy = [];

    for (let n of globalList) {
        globalListCopy.push(n);
    }

    let ordList = combSort(globalListCopy);

});

//ação do botão de ordenação do merge sort
document.querySelector('#btn-ord-merge-sort').addEventListener('click', e => {

    setDelay();

    let globalListCopy = [];

    for (let n of globalList) {
        globalListCopy.push(n);
    }

    let ordList = mergeSort(globalListCopy);

});




