/**
 * Created by diana on 16. 10. 28.
 */
var result = '';

var calculate = function () {
	var buttons = document.getElementsByTagName('button');
	var num = '';
	var operator;

	for (var i = 0; i < buttons.length; i++) {

		buttons[i].onclick = function () {

			var val = this.innerHTML;
			if ((/\d/).test(val)) {
				num += val;
				result = num;
				console.log('num : ' + num);
			} else if (val === '.') {
				if (num.indexOf('.') === -1) {
					num += val;
					result = num;
				}
				console.log('. : ' + val);
			} else if (val === 'c') {
				num = num.slice(0, num.length - 1);
				result = num;
				console.log('c : ' + val);
			} else if (val === '=') {
				console.log('= : ' + num);
			} else {
				if (val === '%') {
					console.log(val);
				} else if (val === 'X') {
					console.log(val);
				} else if (val === '-') {
					console.log(val);
				} else {
					console.log(val);
				}
			}

		}

	}



};