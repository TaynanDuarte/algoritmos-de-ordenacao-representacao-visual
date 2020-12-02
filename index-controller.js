

function setPageParameters() {
    return {
        globalDelay: 1,
        globalList: []
    };
}

const PageParameters = setPageParameters();
const getDelay = (keyName) => parseFloat(document.getElementById(keyName).value);


document.querySelector('#btn-set-random-list').addEventListener('click', e => {

    let listLength = parseInt(document.getElementById('input-list-length').value);
    let randomList = getRandomList(listLength);

    drawNumericList(randomList, 'insertion-sort-list-container');
    drawNumericList(randomList, 'bubble-sort-list-container');
    drawNumericList(randomList, 'selection-sort-list-container');
    drawNumericList(randomList, 'comb-sort-list-container');
    drawNumericList(randomList, 'merge-sort-list-container');
    drawNumericList(randomList, 'quick-sort-list-container');

    PageParameters.globalList = randomList;

});

// ação do botão para gerar a lista decrescente
document.querySelector('#btn-set-decreasing-list').addEventListener('click', e => {

    let listLength = parseInt(document.getElementById('input-list-length').value);
    let decrList = getDecreasingList(listLength);

    drawNumericList(decrList, 'insertion-sort-list-container');
    drawNumericList(decrList, 'bubble-sort-list-container');
    drawNumericList(decrList, 'selection-sort-list-container');
    drawNumericList(decrList, 'comb-sort-list-container');
    drawNumericList(decrList, 'merge-sort-list-container');
    drawNumericList(decrList, 'quick-sort-list-container');

    PageParameters.globalList = decrList;

});

// ação do botão de ordenação do insertion sort
document.querySelector('#btn-ord-insertion-sort').addEventListener('click', e => {

    PageParameters.globalDelay = getDelay('delay-input');

    let globalListCopy = [];

    for (let n of PageParameters.globalList) {
        globalListCopy.push(n);
    }

    let ordList = insertionSort(globalListCopy);

});

// ação do botão de ordenação do bubble sort
document.querySelector('#btn-ord-bubble-sort').addEventListener('click', e => {

    PageParameters.globalDelay = getDelay('delay-input')

    let globalListCopy = [];

    for (let n of PageParameters.globalList) {
        globalListCopy.push(n);
    }

    let ordList = bubbleSort(globalListCopy);

});

// ação do botão de ordenação do selection sort
document.querySelector('#btn-ord-selection-sort').addEventListener('click', e => {

    PageParameters.globalDelay = getDelay('delay-input');

    let globalListCopy = [];

    for (let n of PageParameters.globalList) {
        globalListCopy.push(n);
    }

    let ordList = selectionSort(globalListCopy);


});


// ação do botão de ordenação do comb sort
document.querySelector('#btn-ord-comb-sort').addEventListener('click', e => {

    PageParameters.globalDelay = getDelay('delay-input');

    let globalListCopy = [];

    for (let n of PageParameters.globalList) {
        globalListCopy.push(n);
    }

    let ordList = combSort(globalListCopy);

});

// ação do botão de ordenação do merge sort
document.querySelector('#btn-ord-merge-sort').addEventListener('click', e => {

    PageParameters.globalDelay = getDelay('delay-input');

    let globalListCopy = [];

    for (let n of PageParameters.globalList) {
        globalListCopy.push(n);
    }

    let ordList = mergeSort(globalListCopy);

});

// ação do botão de ordenação do quick sort
document.querySelector('#btn-ord-quick-sort').addEventListener('click', e => {

    PageParameters.globalDelay = getDelay('delay-input');

    let globalListCopy = [];

    for (let n of PageParameters.globalList) {
        globalListCopy.push(n);
    }

    let ordList = quickSort(globalListCopy);

});


