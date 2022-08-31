/* 1-masala

var arr = ["I", "study", "JavaScript", "right", "now"];

arr.splice(2, 1)
console.log(arr);

*/



let word = prompt("So'z kiritng?");

function teskari(word) {
    let soz = word.split("").trim()

    let gap = soz.reverse()
    return gap
}

console.log(teskari(word));