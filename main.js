// User inputs the numbers
function number(value) {
    document.form1.result.value +=value;
    console.log(document);
    console.log(form1);
    console.log(result);
    console.log(value);
}

// Clear the display
function cle(value) {
	document.form1.result.value = value;
    console.log(document);
    console.log(form1);
    console.log(result);
    console.log(value);
    
}
 
// Calculate the numbers
function evalua() {
	document.form1.result.value = eval(
	document.form1.result.value)
    console.log(form1);

    
}

// Make an error if user input incorrectly
/*if the inputs is not correct
produce error warning
display "Invalid number"*/


// Set digit input limits up to 15

// Scale down the dight size when it exceeds 13 digits
/*function isOverflown(result) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
let el = document.getElementById('result');
let fontSize = parseInt(el.style.fontSize);
for (let i = fontSize; i >= 0; i--) {
    let overflow = isOverflown(el);
    if (overflow) {
     fontSize--;
     el.style.fontSize = fontSize + "px";
    }
}*/


