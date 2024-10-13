function extract(content) {
let text = document.getElementById(`content`).textContent;

const regex = /\((.+?)\)/gm;
const matches = [...text.match(regex)];
let finalArr = []
for(let i=0; i<matches.length; i++){
    let word= matches[i]
    let correctWrod = word.slice(1, word.length-1)
    finalArr.push(correctWrod)
}
let textToShow=finalArr.join(`; `)
console.log(textToShow);

}