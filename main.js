function right(){
alert("TRANSACTION SUCCESSFUL!!!");
}
function insufficient(){
alert("Insufficient Balance!!!");
}
function wrong(){
alert("Amount does not correspond, Try Again!!!");
}
let accnt = 1000;
function result(){
var amount= prompt("Type in your amount");
if(amount!==""){
var confirm = prompt("Confirm the amount");
if(confirm == amount && confirm <= accnt){
right();
}
else if(confirm == amount && confirm > accnt){
insufficient();
}
else{
wrong();
}
}else{
docume.write("TRANSACTION CANCELLED!!!");
}
}
function bal(){
let b = prompt("Type in the last amount Transacted");
b = accnt - b;
if(b!=""){
alert(`Your Ledger Balance is $ ${b}`);
}else{
document.write("Error 404!!!");
}
}
