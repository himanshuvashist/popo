const dot = document.getElementById('fruit')

const itemsArr = ['door','table','chair','bed']

let htmlInString = ''

function insert(item){
    htmlInString = htmlInString + `<li>${item}</li>`
}

itemsArr.forEach(insert)

// customForEach(itemsArr,insert)

// TASK ---
// we have forEach inbuild method which we can use,but we do not want to build a our custom forEach function which we can use
// when you start, comment forEach Inbuild method(line no.11) and uncomment customForEach func call(line no.13)
// you only have to insert your code in TODO only
function customForEach(){
    // ************TODO********

}

// ***********

dot.innerHTML = htmlInString