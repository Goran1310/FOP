// MDN Docs on input element:
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

// MDN Docs on addEventListener:
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// Programmer's best friend:
// https://www.google.com/

let btn = document.getElementById("btn")
let input = document.getElementById("textbox")

function handelInput(){
    let input= document.getElementById("textbox").value;
    // console.log(input)
    let outputParagraph = document.createElement("p")//create object
    document.body.append(outputParagraph)//place object in HTML
    outputParagraph.innerHTML = input//adding text input - taking value
    // document.body.style.textAlign = "right"
}
btn.addEventListener("click",handelInput)

// ____________________
function logcon(){
    var logvalue = document.getElementById("intext").value
    // var para = document.body.innerHTML += "<p>"+ logvalue + "</p>"
    // button.append(para)
    //another method
    var para = document.createElement("p")
    document.body.append (para) 
    para.innerHTML = logvalue 
    console.log(logvalue)
} 

document.getElementById("button").addEventListener ("click",logcon)