console.log(document.body.firstChild)
console.log(document.body.lastChild)
// console.log(document.body.childNodes)
let ara = Array.from(document.body.childNodes)
console.log(ara)

/*
    elem.childNodes[0] === elem.firstChild
    elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
*/