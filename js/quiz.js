// generate random numbers for the quiz
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
var M = randomInt(300, 600);
var N = randomInt(100, M);
var O = randomInt(1, 10);
var P = N+O;
var Q = N-O;
console.log(M);
//generate the correct answer
var correctAnswer = M - N + O;

// place the random numbers in the quiz1.html
document.getElementById("s1").innerHTML = M.toString();
document.getElementById("s2").innerHTML = N.toString();
document.getElementById("s3").innerHTML = O.toString();
//generate the answer (Felix has s1 and gives s2 to Robin and takes back s3)
document.querySelector('[value="1"]').nextSibling.nodeValue = M.toString() + " - " + P.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue = M.toString() + " - " + Q.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue = M.toString() + " - " + N.toString() + " - " + O.toString();
document.querySelector('[value="4"]').nextSibling.nodeValue = M.toString() + " - " + N.toString() + " + " + O.toString();
//action -- click and change style
function changestyle(e){
    e.preventDefault(); //prevent the default action
    //get the style of the element
    var classname = this.getAttribute("class");
    //if the element is already selected, change the style back to normal
    if(classname == "answer selected"){
        this.setAttribute("class", "answer");
        return;
    }
    else{
        //if there is an element already selected, change the style back to normal
        var selected = document.getElementsByClassName("answer selected");
        if(selected.length > 0){
            selected[0].setAttribute("class", "answer");
        }
        this.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg'}],{duration: 3000, fill: "forwards"});
    }
    //change the style of this element(whatever element is clicked)
    this.setAttribute("class", "answer selected");
}
//add event listener to all the answers
for(var i=0; i<4; i++){
    document.getElementsByClassName("answer")[i].addEventListener("click", changestyle, false);
}
//check the answer
