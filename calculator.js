function add(num1, num2) {
	var answer = num1 + num2
	return answer;
}

function subtract(num1, num2) {
	var answer = Math.abs(num1 - num2)
	return answer;
}

function multiply(num1, num2) {
	var answer = num1 * num2
	return answer;
}

function divide(num1, num2) {
	var answer = num1 / num2
	return answer;
}

module.exports = {
	add: add,
	subtract: subtract,
	multiply: multiply,
	divide: divide
}