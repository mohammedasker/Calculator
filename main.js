// User inputs the numbers
function number(value) {
    document.form1.result.value +=value;
}

// Clear the display
function cle(value) {
	document.form1.result.value = value;
}
 
// Calculate the numbers
function evalua() {
	document.form1.result.value = eval(
	document.form1.result.value)
}

// Make an error if user input incorrectly
/*if the inputs is not correct
produce error warning
display "Invalid number"*/


if (form1.result.value != value.result.value) {
	//return ('Syntax_Error')
	console.log('not typed correctly');
}

// Set digit input limits up to 15

// Scale down the dight size when it exceeds 13 digits

