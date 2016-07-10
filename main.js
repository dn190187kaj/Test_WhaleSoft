var x = Math.floor(Math.random()*51);
var count, number1, number2, i;
console.log(x); //число которое загадал компьютер
	count = prompt('Сколько Вам нужно попыток, чтобы угадать число?', '10');
	number1 = prompt('Я загадала число, угадывай Пользователь', 'Укажите число от 0 до 50');
	if (x == number1) {
		alert('Угадал, хитрец, за 1 попытку.');
	} else if (count == 1) {
		alert('Вы не угадали число, начните игру с начала!');
	} else {
		number2 = prompt('Не верно, попробуй еще раз', 'Укажите число от 0 до 50');
		for (i = 1; i < count; i++) {
			if (x == number2) {
				alert('Угадал, хитрец, за ' + (i+1) + ' попыток.');
				console.log('i = ' + i);
				break;
			}
			if (Math.abs(number2-x) < Math.abs(number1-x)) {
				number1 = number2;
				number2 = prompt('Теплее', 'Укажите число от 0 до 50');
				console.log('number1 = ' + number1);
				console.log('number2 = ' + number2);
			} else {
				number1 = number2;
				number2 = prompt('Холоднее', 'Укажите число от 0 до 50');
				console.log('number1 = ' + number1);
				console.log('number2 = ' + number2);
			}
			if (x == number2) {
				alert('Угадал, хитрец, за ' + (i+2) + ' попыток.');
				console.log('i = ' + i);
				break;
			}
		}
		if (i > count) {
		alert('Вы не угадали число, начните игру с начала!');
		}
	}