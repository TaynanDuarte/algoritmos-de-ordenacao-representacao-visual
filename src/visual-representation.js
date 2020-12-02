function drawNumericList(list, tagId) {
    let htmlContent = '';
    for (let number of list) {
        htmlContent += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${number}`;
    }

    document.getElementById(tagId).innerHTML = htmlContent;
}


async function drawVisualRepresentation(list, htmlTagID, keysObj) {

    // keysObj deve ser um objeto conforme abaixo
    // Ex.:
    // {
    //     nomeDaChave1: {
    //         value: 15,
    //         color: '#b71c1c'
    //     },
    //     nomeDaChave2:{
    //         value: 30,
    //         color: '#eeff41'
    //     }
    // };

    // tons de roxo
    const colors = ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc',
        '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c',
        '#ea80fc', '#e040fb', '#d500f9', '#aa00ff'];

    let colorIdx = 0;
    let htmlContent = '';
    for (let i = 0; i < list.length; i++) {
        let height = list[i] / 10;
        let width = screen.width / (list.length * 100);

        let divInserida = false;
        for (let key of Object.keys(keysObj)) {
            if (i === keysObj[key].value) {
                htmlContent += `<div class='col s1' style='height:${height}rem;width:${width}rem;background-color:${keysObj[key].color};'>${list[i]}</div>`;
                divInserida = true;
                break;
            }
        }

        if (!divInserida) {
            htmlContent += `<div class='col s1' style='height:${height}rem;width:${width}rem;background-color:${colors[colorIdx]};'>${list[i]}</div>`;
        }
        colorIdx++;
        colorIdx = colorIdx > colors.length - 1 ? 0 : colorIdx;
    }

    await sleep(PageParameters.globalDelay);

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
