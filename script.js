const form = document.getElementById("form");
const outputDiv = document.getElementById ("output");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const userInput = form.querySelectorAll("input");
    var output = "";
    userInput.forEach(function (input) {
        console.log(input.value);
        output += input.placeholder +": "+input.value + "<br>";
        console.log("hello World")
    });
    outputDiv.innerHTML = output;
})