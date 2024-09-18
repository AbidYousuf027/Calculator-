let string = "";
let buttons = document.querySelectorAll(".button");
let lastCharIsOperator = false;
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const inputField = document.querySelector("input");

    
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        inputField.value = string;
      } catch (err) {
        inputField.value = "Error";
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      inputField.value = string;
      lastCharIsOperator = false;
    }else if (e.target.innerHTML == "C"){
        string = string.slice(0, -1);
        inputField.value = string;
        lastCharIsOperator = false;
    }  
     else if ("+ - * / ".includes(e.target.innerHTML)) {
      if (!lastCharIsOperator) {
        string = string + e.target.innerHTML;
        inputField.value = string;
        lastCharIsOperator = true;
      } else {
        string = string.slice(0, -1) + e.target.innerHTML;
        inputField.value = string;
      }
    }else if (e.target.innerHTML == "%"){
      if(!lastCharIsOperator && string !== ""){
        string = string + "/100";
        inputField.value = eval(string)
      }
    }
     else {
      string = string + e.target.innerHTML;
      inputField.value = string;
      lastCharIsOperator = false;
    }
  });
});




