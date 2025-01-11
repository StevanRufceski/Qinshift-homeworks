function numberToWords(num) {
  if (num === "0") return "zero";

  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const thousands = ["", "thousand"];

  function convertHunderds(n) {
      if (n === 0) 
        return "";
      else if (n < 20) 
        return ones[n] + " ";
      else if (n < 100) 
        return tens[Math.floor(n / 10)] + "-" + convertHunderds(n % 10);
      else 
        return ones[Math.floor(n / 100)] + " hundred " + convertHunderds(n % 100);
  }
  let words = "";
  let i = 0;
  while (num > 0) {
      if (num % 1000 !== 0) {
        words = convertHunderds(num % 1000) + thousands[i] + " " + words;
      }
      num = Math.floor(num / 1000);
      i++;
  }
  return words.trim();
}
// -------------- C & del --------------
let c = document.getElementById("c");
c.addEventListener("click", function(){
    document.getElementById("inputNumber").value = "";
    document.getElementById("displayWords").innerText = "";
})
let del = document.getElementById("del");
del.addEventListener("click", function(){
    if (document.getElementById("inputNumber").value !== "") {
        document.getElementById("inputNumber").value = document.getElementById("inputNumber").value.slice(0,-1);
    }
})
// ------------ READING NUMBER ---------
let inputBox = document.getElementById("inputNumber");
let invalidChars = ["-", "+", "e", "E", "."];
inputBox.addEventListener("keydown", function(e) {
  if ((invalidChars.includes(e.key))||(document.getElementById("inputNumber").value[0]==="0")||(document.getElementById("inputNumber").value.length>=6)){
    e.preventDefault();
  } 
})
// ------------ PROCESSING NUMBER ---------
let convert = document.getElementById("convert");
convert.addEventListener("click", function(){
  if (document.getElementById("inputNumber").value !== "") {
    let number = document.getElementById("inputNumber").value;
    document.getElementById("displayWords").innerText = numberToWords(number);
  } else {
    alert ("Please input the number you want to convert to words!")
  }
})






