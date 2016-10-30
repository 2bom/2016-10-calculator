/**
 * Created by diana on 16. 10. 28.
 */
var result = '';

var calculate = function () {
    var buttons = document.getElementsByTagName("button");
    
    var window = document.getElementById("result");
	var num = '';
	var operator;

	for (var i = 0; i < buttons.length; i++) {

		buttons[i].onclick = function () {

			var val = this.innerHTML;
			if ((/\d/).test(val)) {
                console.log(num.constructor);
                console.log(val.constructor);
                num = (num === '0' ? val : num + val);
				result = num;
				console.log('num : ' + num);
			} else if (val === '.') {
				if (num.indexOf('.') === -1) {
					num += val;
					result = num;
				}
				console.log('. : ' + num);
			} else if (val === 'c') {
				num = num.slice(0, num.length - 1);
                if(num === ''){
                    num = '0';
                }
				result = num;
				console.log(num.constructor);
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
            
            window.innerHTML = num;
            
            console.log(window.innerHTML);
            console.log(num);
            

		}

	}



};