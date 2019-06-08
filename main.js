// user inputs the numbers
 
 /*user enters the number
 the numbers will appear on the display
 */

// calculate the numbers
/*operate the calulation starts here
number plus number equals number added
number minus number equals number subtracted
number times number equals number multipled
number divided by number equals number divided

the calculated number displays the result*/

// make an error if user type incorrectly

/*if the inputs is not correct
produce error warning
display "Invalid number"*/

const calculator = document.queryselector('.calculator')
const keys = calculator.queryselector('calculator_keys')

keys.addEventListener('click'. e =>  {
	if (e.target.matches('button')) {
		//do something
	}
})

const key = e.target
const action = key.dataset.action

if (!action) {
	console.log('number key!')
}

if (
	action === 'add' ||
	action === 'subtract' ||
	action === 'multiply' ||
	action === 'division'
	) {
	console.log('operator key!')
}

if (action === 'decimal') {
	console.log('decimal key!')
}

if (action === 'clear') {
	console.log('clear key!')
}

if (action === 'calculate') {
	console.log('equal key!')
}

