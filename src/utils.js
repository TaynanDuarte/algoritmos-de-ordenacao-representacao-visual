


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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