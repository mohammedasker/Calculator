// user inputs the numbers
function number(value) {
    document.form1.result.value +=value;
}

// clear the display
function cle(value) {
	document.form1.result.value = value;
}
 
// calculate the numbers
function evalua() {
	document.form1.result.value = eval(
	document.form1.result.value)
}

// make an error if user type incorrectly

/*if the inputs is not correct
produce error warning
display "Invalid number"*/