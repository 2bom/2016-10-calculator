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

	var calculator = function (numForOperating, num, operator, val, errorMessage, result){
		if(result){
				console.log(operator);
				console.log(Boolean(operator));
			if(operator){
				if (operator === '/'){
					if (num === '0'){
						resultWindow.innerHTML = errorMessage;
					} else {
						result = parseFloat(numForOperating) / parseFloat(num);

					}
				} else if (operator === 'x'){
					result = parseFloat(numForOperating) * parseFloat(num);

				} else if (operator === '-'){
					result = parseFloat(numForOperating) - parseFloat(num);

				} else {
					result = parseFloat(numForOperating) + parseFloat(num);

				}
			} else {
				result = num;
			}

			resultWindow.innerHTML = result;
		} else {
			if (operator === '/'){
				if (num === '0'){
					resultWindow.innerHTML = errorMessage;
				} else {
					numForOperating = parseFloat(numForOperating) / parseFloat(num);
				}
			} else if (operator === 'x'){
				numForOperating = parseFloat(numForOperating) * parseFloat(num);
			} else if (operator === '-'){
				numForOperating = parseFloat(numForOperating) - parseFloat(num);
			} else {
				numForOperating = parseFloat(numForOperating) + parseFloat(num);
			}

			resultWindow.innerHTML = numForOperating;
		}
	};


	for (var i = 0; i < buttons.length; i++) {

		buttons[i].onclick = function () {

			var val = this.innerHTML;

			if ((/\d/).test(val)) {
                // console.log('operator : ' + operator);
                console.log(num);
                // console.log(val.constructor);

				num = (num === '0' ? val : num + val);

				resultWindow.innerHTML = num;

				// console.log('num : ' + num);
			} else if (val === '.') {
				if (num.indexOf('.') === -1) {
					num += val;
				}

				resultWindow.innerHTML = num;

				// console.log('. : ' + num);
			} else if (val === 'c') {
				num = num.slice(0, num.length - 1);
                if(num === ''){
                    num = '0';
                }

				resultWindow.innerHTML = num;
				// console.log(num.constructor);
			} else if (val !== '=') {
				if (!operator){
					numForOperating = num;
					// console.log('operator none');
				} else {
					calculator(numForOperating, num, operator, val, errorMessage);
				}

				num = '0';
				operator = val;
				// console.log(operator);
			} else {
				calculator(numForOperating, num, operator, val, errorMessage, true);

				numForOperating ='';
				num = '0';
				operator = '';
				// console.log('= : ' + num);
			}

            // console.log(resultWindow.innerHTML);
            // console.log(num);


		}

	}



};