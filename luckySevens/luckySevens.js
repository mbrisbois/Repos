<!--reset form field to natural state-->
function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["bet"].elements.length;
        loopCounter++) {
        if (document.forms["bet"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["bet"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}
<!--clear form fields-->
function resetForm() {
clearErrors();
document.forms["bet"]["num1"].value = "";
document.getElementById("results").style.display = "none";
document.getElementById("submitButton").innerText = "Submit";
document.forms["bet"]["num1"].focus();
alert("You have reset the form and will lose all progress.");
}
<!--verify user input is expected-->
function validateItems() {
clearErrors();
var num1 = document.forms["bet"]["num1"].value;
if (num1 == "" || isNaN(num1)) {
    alert("Num1 must be filled in with a number.");
    document.forms["bet"]["num1"]
       .parentElement.className = "form-group has-error";
    document.forms["bet"]["num1"].focus();
    return false;
}

if (num1 <= 0) {
    alert("Bet must be at least $1");
    document.forms["bet"]["num1"]
       .parentElement.className = "form-group has-error"
    document.forms["bet"]["num1"].focus();
    return false;
}


document.getElementById("results").style.display = "block";
document.getElementById("submitButton").innerText = "Play Again";
document.getElementById("startingBet").innerText = num1;

return false;
}


function rollDice(money) {
var die1 = document.getElementById("die1");
var die2 = document.getElementById("die2");
var status = document.getElementById("status");
var d1=Math.floor(Math.random() * 6) + 1;
var d2=Math.floor(Math.random() * 6) + 1;
var diceTotal = d1 + d2;
die1.innerHTML = d1;
die2.innerHTML = d2;

console.log("total: " + diceTotal);
if(diceTotal == 7) {
money += 4;

}
if(diceTotal != 7){
money -= 1;

}
return money;
}

function play() {
console.log("here");
var rolls = 0;
var max = 0;
var rolls_max = 0;

var money = document.forms["bet"]["num1"].value;
console.log(money);
while (money > 0) {
    console.log(money);
    money = rollDice(money);

    rolls++;

    if (money > max) {
        max = money;
        rolls_max = rolls;
    }


}

document.getElementById("rollCount").innerText = rolls;
document.getElementById("maxMoney").innerText = max;
document.getElementById("rollCountMax").innerText = rolls_max;

}
