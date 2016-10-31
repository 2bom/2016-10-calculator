/**
 * Created by diana on 16. 10. 28.
 */

var calculate = function () {
	var buttons = document.getElementsByTagName("button");

	var resultWindow = document.getElementById("result");
	var num = '0';
	var numForOperating = '';
	var operator = '';
	var errorMessage = 'ERROR';

	var result = '';

	// var calculator = function (numForOperating, num, operator, val, errorMessage, result){
	// 	if(result){
	// 			// console.log(operator);
	// 			// console.log(Boolean(operator));
	// 		if(operator){
	// 			if (operator === '/'){
	// 				if (num === '0'){
	// 					resultWindow.innerHTML = errorMessage;
	// 				} else {
	// 					result = parseFloat(numForOperating) / parseFloat(num);
	//
	// 				}
	// 			} else if (operator === 'x'){
	// 				result = parseFloat(numForOperating) * parseFloat(num);
	//
	// 			} else if (operator === '-'){
	// 				result = parseFloat(numForOperating) - parseFloat(num);
	//
	// 			} else {
	// 				result = parseFloat(numForOperating) + parseFloat(num);
	//
	// 			}
	// 		} else {
	// 			result = num;
	// 		}
	//
	// 		resultWindow.innerHTML = result;
	// 	} else {
	// 		console.log('num : ' + num);
	// 		console.log('numFO : ' + numForOperating);
	// 		if (operator === '/'){
	// 			if (num === '0'){
	// 				resultWindow.innerHTML = errorMessage;
	// 			} else {
	// 				numForOperating = parseFloat(numForOperating) / parseFloat(num);
	// 			}
	// 		} else if (operator === 'x'){
	// 			numForOperating = parseFloat(numForOperating) * parseFloat(num);
	// 		} else if (operator === '-'){
	// 			numForOperating = parseFloat(numForOperating) - parseFloat(num);
	// 		} else {
	// 			numForOperating = parseFloat(numForOperating) + parseFloat(num);
	// 		}
	//
	// 		resultWindow.innerHTML = numForOperating;
	// 	}
	// };
	//

	for (var i = 0; i < buttons.length; i++) {

		buttons[i].onclick = function () {

			var val = this.innerHTML;

			if ((/\d/).test(val)) {
				if (operator === '='){
					num = '0';
					numForOperating = '';
					operator = '';
				}
				num = (num === '0' ? val : num + val);

				resultWindow.innerHTML = num;

			} else if (val === '.') {
				if (num.indexOf('.') === -1) {
					num += val;
				}

				resultWindow.innerHTML = num;

			} else if (val === 'c') {
				num = num.slice(0, num.length - 1);
				if(num === ''){
					num = '0';
				}

				resultWindow.innerHTML = num;
			} else {

				if (!operator){
					val === '=' ? result = num : numForOperating = num;
				} else {
					if (num !== ''){
						if( ((numForOperating).split(/\./g)[1] && (num).split(/\./g)[1]) && !(operator === '/' && num === '0')){
							var numFOFloatLength = (numForOperating).split(/\./g)[1].length;
							var numFloatLength = (num).split(/\./g)[1].length;
							var resultRange;

							resultRange = (numFOFloatLength > numFloatLength ? numFOFloatLength : numFloatLength);
						}

						if (operator === '/'){
							if (num === '0'){
								console.log(operator);
								console.log(num);
								resultWindow.innerHTML = errorMessage;
							} else {
								var operated =( resultRange ? (parseFloat(numForOperating) / parseFloat(num)).toFixed(resultRange) : (parseFloat(numForOperating) / parseFloat(num)));
								val === '=' ? result = operated : numForOperating = operated;
							}
						} else if (operator === 'x'){
							var operated =( resultRange ? (parseFloat(numForOperating) * parseFloat(num)).toFixed(resultRange) : (parseFloat(numForOperating) * parseFloat(num)));
							val === '=' ? result = operated : numForOperating = operated;
						} else if (operator === '-'){
							var operated =( resultRange ? (parseFloat(numForOperating) - parseFloat(num)).toFixed(resultRange) : (parseFloat(numForOperating) - parseFloat(num)));
							val === '=' ? result = operated : numForOperating = operated;
						} else if (operator === '+'){
							var operated =( resultRange ? (parseFloat(numForOperating) + parseFloat(num)).toFixed(resultRange) : (parseFloat(numForOperating) + parseFloat(num)));
							val === '=' ? result = operated : numForOperating = operated;
						} else {
							numForOperating = result;
						}
					}
				}

				num = '0';
				operator = val;

				if(resultWindow.innerHTML !== errorMessage){
					resultWindow.innerHTML = (val === '=' ? result : numForOperating);
				}
			}

		}

	}



};