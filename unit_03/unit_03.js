// task 1
// Создайте переменную a = 4. 
// Используя конструкцию if проверьте что a == 4. 
// Выведите сообщение в консоль.
let a = 4;

if (a == 4) {
    console.log('a == 4');
}


// task 2
// Создайте b = 8 и с = 10. 
// С помощью if, else выведите в консоль сообщение 
// о том, какая из переменных больше.
let b = 8,
    c = 10;

if (b > c) {
    console.log('b > c');
} else {
    console.log('b < c');
}

// task 3
// Используя else if добавьте в предыдущую задачу 
// проверку на равенство.
if (b > c) {
    console.log('b > c');
} else if (b < c) {
    console.log('b < c');
} else {
    console.log('b == c');
}


// task 4
// Создайте на странице 2 input, 
// куда пользователь может вводить числа. 
// Добавьте кнопку. 
// При нажатии кнопки выполняйте функцию, 
// которая сравнит два числа и выведет большее на страницу. 
// Если числа равны - выводится строка "равны".
let input4First = document.querySelector('.input-4-1'),
    input4Second = document.querySelector('.input-4-2'),
    btn4 = document.querySelector('.btn-4'),
    out4 = document.querySelector('.out-4');

btn4.onclick = () => {
    let val1 = +input4First.value,
        val2 = +input4Second.value;

    if(val1 > val2) {
        out4.innerHTML = 'val1 > val2';
    } else if(val1 < val2) {
        out4.innerHTML = 'val1 < val2';
    } else {
        out4.innerHTML = 'val1 == val2';
    }
}


// task 5
// Создайте на странице input, 
// куда пользователь может вводить год рождения. 
// Добавьте кнопку. 
// При нажатии кнопки выполняйте функцию, 
// которая если год рождения меньше 2000 выводит на страницу 
// возраст пользователя (2019 - введенный год рождения), 
// если год рождения больше или равен 2000 - выводит в консоль 
// возраст пользователя.
let input5 = document.querySelector('.input-5'),
    btn5 = document.querySelector('.btn-5'),
    out5 = document.querySelector('.out-5');

btn5.onclick = () => {
    let val = +input5.value;

    if (val < 2000) {
        out5.innerHTML = 2022 - val;
    } else {
        console.log(2022 - val)
    }
}


// task 6
// Создайте input куда пользователь может ввести номер квартиры.
// Если квартира от 1 до 32 - то выводите сообщение, 
// о том, что такая квартира есть,
// если другое число - сообщение о том, что квартира не существует.
let input6 = document.querySelector('.input-6'),
    btn6 = document.querySelector('.btn-6'),
    out6 = document.querySelector('.out-6');

btn6.onclick = () => {
    let val = +input6.value;

    if (val >= 1 && val <= 32) {
        out6.innerHTML = 'Квартира есть';
    } else {
        out6.innerHTML = 'Квартира не найдена';
    }
}


// task 7
// Создайте input куда пользователь может ввести число. 
// После нажатия кнопки - на страницу должно выводиться сообщение 
// - большие или меньше нуля это число.
let input7 = document.querySelector('.input-7'),
    btn7 = document.querySelector('.btn-7'),
    out7 = document.querySelector('.out-7');

btn7.onclick = () => {
    let val = +input7.value;

    if (val > 0) {
        out7.innerHTML = 'Больше 0';
    } else {
        out7.innerHTML = 'Меньше 0';
    }
}


// task 8
// Создайте input куда пользователь может ввести число. 
// После нажатия кнопки - на страницу должно выводиться сообщение 
// - четное или нет это число. 
// Определить четное или нет число в JS очень просто. 
// Нужно получить целый остаток от деления (читать за оператор), 
// для этого используется оператор % . 
// И проверить. 
// Если остаток от деления 0 - то число четное, если нет - не четное.
let input8 = document.querySelector('.input-8'),
    btn8 = document.querySelector('.btn-8'),
    out8 = document.querySelector('.out-8');

btn8.onclick = () => {
    let val = +input8.value;

    if (val % 2 == 0) {
        out8.innerHTML = 'Четное число';
    } else {
        out8.innerHTML = 'Нечетное число';
    }
}


// task 9
// Создайте 2 инпута. 
// Если оба инпута заполнены (не равны пустой строке), 
// то по нажатию кнопки число из первого инпута возведите 
// в степень из второго input. 
// Результат выведите на страницу. 
// Как возвести в степень? Читаем!
let input9First = document.querySelector('.input-9-1'),
    input9Second = document.querySelector('.input-9-2'),
    btn9 = document.querySelector('.btn-9'),
    out9 = document.querySelector('.out-9');

btn9.onclick = () => {
    let val1 = +input9First.value,
        val2 = +input9Second.value;

    if(val1 && val2) {
        out9.innerHTML = Math.pow(val1, val2);
    }
}


// task 10
// Есть поле input куда пользователь может ввести свое имя. 
// Нужно при нажатии кнопки - сказать с помощью 
// alert('Hello имя_пользователя'), 
// но хитрые пользователи часто нажимают несколько раз пробел. 
// Вроде ничего и не ввел, 
// но программа считывает пробелы и пытается работать. 
// Напишите проверку, которая выводит предупреждение 
// если пользователь ничего не ввел, 
// или ввел один пробел. 
// В остальных случаях - Hello...
let input10 = document.querySelector('.input-10'),
    btn10 = document.querySelector('.btn-10');

btn10.onclick = () => {
    let val = input10.value;

    if(val != '' && val != ' ') {
        alert('Hello ' + val);
    } else {
        alert('Введите имя пользователя');
    }
}


// task 11
// Хитрый пользователь научился обходить нашу предыдущую задачу, 
// и начал вводить где 3, а где и 5 пробелов. 
// Напишите программу, 
// которая проверяет пробелы или нет введены в строку. 
// Как защититься от пробелов? 
// Обрезать их. 
// Допустим вы получили значение из input в переменную a. 
// Теперь напишите a = a.trim(); - это обрежет пробелы 
// и результат запишет в переменную a. 
// Теперь просто сравните переменную a c пустой строкой. 
// Если она равна - выведите ошибку, если нет - сообщение с содержимым input.
let input11 = document.querySelector('.input-11'),
    btn11 = document.querySelector('.btn-11');

btn11.onclick = () => {
    let val = input11.value.trim();

    if(val != '') {
        alert('Hello ' + val);
    } else {
        alert('Введите имя пользователя');
    }
}


// task 12
// Пользователь может ввести число от 1 до 3. 
// Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д. 
// Для решения используйте switch.
let input12 = document.querySelector('.input-12'),
    btn12 = document.querySelector('.btn-12');

btn12.onclick = () => {
    let val = +input12.value;

    switch(val) {
        case 1:
            console.log('Один');
            break;
        case 2:
            console.log('Два');
            break;
        case 3:
            console.log('Три');
            break;
        default:
            console.log('Введите число от 1 до 3х');
    }
}


// task 13
// Пользователь может ввести номер дома. 
// Если дом от 1 до 5 - то улица 1, 
// если от 6 до 11 - улица 2, 
// если от 11 до 20 - улица 3. 
// Используя if, elseif - реализуйте программу, 
// которая будет указывать улицу в зависимости от введенного дома.
let input13 = document.querySelector('.input-13'),
    btn13 = document.querySelector('.btn-13'),
    out13 = document.querySelector('.out-13');

btn13.onclick = () => {
    let val = +input13.value;

    // if (val >= 1 && val <= 5) {
    //     out13.innerHTML = 'Улица 1';
    // } else if (val >= 6 && val < 11) {
    //     out13.innerHTML = 'Улица 2';
    // } else if (val >= 11 && val <= 20) {
    //     out13.innerHTML = 'Улица 3';
    // }

    switch(true) {
        case val >= 1 && val <= 5: 
            out13.innerHTML = 'Улица 1';
            break;
        case val >= 6 && val < 11:
            out13.innerHTML = 'Улица 2';
            break;
        case val >= 11 && val <= 20:
            out13.innerHTML = 'Улица 3';
            break;
    }
}


// task 14
// Создайте input куда пользователь может ввести количество рентген. 
// Это число от 0 и до 1000. 
// С помощью if, else if реализуйте вывод по таблице: 
// от 0 до 25 - не обнаруживается 
// до 50 - снижение числа лимфоцитов 
// до 100 - вялость, рвота, 
// до 150 - смертность 5%, 
// до 350 - смертность 50% за 30 суток, 
// до 600 - 90% смертность за 2 недели. 
// Больше 600 - смертность 100%. 
// Вывод результатов сделайте на страницу.
let input14 = document.querySelector('.input-14'),
    btn14 = document.querySelector('.btn-14'),
    out14 = document.querySelector('.out-14');

btn14.onclick = () => {
    let val = +input14.value;

    // if (val >= 600) {
    //     out14.innerHTML = 'Cмертность 100%';
    // } else if (val >= 350) {
    //     out14.innerHTML = '90% смертность за 2 недели';
    // } else if (val >= 150) {
    //     out14.innerHTML = 'Смертность 50% за 30 суток';
    // } else if (val >= 100) {
    //     out14.innerHTML = 'Смертность 5%';
    // } else if (val >= 50) {
    //     out14.innerHTML = 'Вялость, рвота';
    // } else if (val >= 25) {
    //     out14.innerHTML = 'Снижение числа лимфоцитов';
    // } else if (val > 0) {
    //     out14.innerHTML = 'Не обнаруживается';
    // }

    switch(true) {
        case val >= 600:
            out14.innerHTML = 'Cмертность 100%';
            break;
        case val >= 350:
            out14.innerHTML = '90% смертность за 2 недели';
            break;
        case val >= 150:
            out14.innerHTML = 'Смертность 50% за 30 суток';
            break;
        case val >= 100:
            out14.innerHTML = 'Смертность 5%';
            break;
        case val >= 50:
            out14.innerHTML = 'Вялость, рвота';
            break;
        case val >= 25:
            out14.innerHTML = 'Снижение числа лимфоцитов';
            break;
        default: 
            out14.innerHTML = 'Не обнаруживается';
    }
}


// task 15
// Создайте переменные x = 1, y = 0. 
// Выведите в консоль результат операции x && y, 
// а затем x || y. 
// Изучите результат.
let x = 1,
    y = 0;

console.log(x && y); // 0
console.log(x || y) // 1


// task 16
// В Казахстане, налог на объем двигателя составляет:
// от 0 до 499 кубов - 2525 тенге
// от 500 до 1199 кубов - 5050 тенге
// от 1200 до 1599 кубов - 8275 тенге
// от 1600 до 1899 кубов - 9675 тенге
// от 1900 до 1999 кубов - 11075тенге
// от 2000 и выше кубов - 15000 тенге
// Напишите программу, где пользователь может ввести в input 
// объем двигателя и получить налог на данный двигатель.
let input16 = document.querySelector('.input-16'),
    btn16 = document.querySelector('.btn-16'),
    out16 = document.querySelector('.out-16');

btn16.onclick = () => {
    let val = +input16.value;

    switch(true) {
        case val >= 2000: {
            out16.innerHTML = '15000 тенге';
            break;
        }
        case val >= 1900: {
            out16.innerHTML = '11075тенге тенге';
            break;
        }
        case val >= 1600: {
            out16.innerHTML = '9675 тенге';
            break;
        }
        case val >= 1200: {
            out16.innerHTML = '8275 тенге';
            break;
        }
        case val >= 500: {
            out16.innerHTML = '5050 тенге';
            break;
        }
        default:
            out16.innerHTML = '2525 тенге';
    }
}


// task 17
// Создайте 2 инпута. 
// В первый пользователь может ввести число денег в долларах. 
// Во второй - строку euro, sterling, uah. 
// Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, 
// которую ввел пользователь. 
// Коэффициенты - найдите в сети интернет.
let input17First = document.querySelector('.input-17-1'),
    input17Second = document.querySelector('.input-17-2'),
    btn17 = document.querySelector('.btn-17'),
    out17 = document.querySelector('.out-17'),
    euro = 0.9,
    sterling = 0.76,
    uah = 29.5;

btn17.onclick = () => {
    let val1 = +input17First.value,
        val2 = input17Second.value;

    if (val2 == 'euro') {
        out17.innerHTML = val1 * euro;
    } else if (val2 == 'sterling') {
        out17.innerHTML = val1 * sterling;
    } else if (val2 == 'uah') {
        out17.innerHTML = val1 * uah;
    } else {
        out17.innerHTML = 'Введите валюту';
    }
}


// task 18
// Проделайте предыдущую задачу с помощью switch case.
let input18First = document.querySelector('.input-18-1'),
    input18Second = document.querySelector('.input-18-2'),
    btn18 = document.querySelector('.btn-18'),
    out18 = document.querySelector('.out-18');

btn18.onclick = () => {
    let val1 = +input18First.value,
        val2 = input18Second.value;

    switch(val2) {
        case 'euro':
            out18.innerHTML = val1 * euro;
            break;
        case 'sterling':
            out18.innerHTML = val1 * sterling;
            break;
        case 'uah':
            out18.innerHTML = val1 * uah;
            break;
        default:
            out18.innerHTML = 'Введите валюту';
    }
}


// task 19
// Создайте 2 input куда пользователь может ввести числа. 
// В третий input - может ввести знак - минус, плюс, умножить, поделить. 
// С помощью if, else if по нажатию кнопки выводите результат 
// выбранной операции на страницу.
let input19First = document.querySelector('.input-19-1'),
    input19Second = document.querySelector('.input-19-2'),
    input19Third = document.querySelector('.input-19-3'),
    btn19 = document.querySelector('.btn-19'),
    out19 = document.querySelector('.out-19');

btn19.onclick = () => {
    let val1 = +input19First.value,
        val2 = +input19Second.value,
        operator = input19Third.value;

    if (operator == '+') {
        out19.innerHTML = val1 + val2;
    } else if (operator == '-') {
        out19.innerHTML = val1 - val2; 
    } else if (operator == '*') {
        out19.innerHTML = val1 * val2; 
    } else if (operator == '/') {
        out19.innerHTML = val1 / val2; 
    } else {
        out19.innerHTML = 'Введите оператор + - * /';
    }
}

// task 20
// Проделайте предыдущую задачу с помощью switch case.
let input20First = document.querySelector('.input-20-1'),
    input20Second = document.querySelector('.input-20-2'),
    input20Third = document.querySelector('.input-20-3'),
    btn20 = document.querySelector('.btn-20'),
    out20 = document.querySelector('.out-20');

btn20.onclick = () => {
    let val1 = +input20First.value,
        val2 = +input20Second.value,
        operator = input20Third.value;

    switch(operator) {
        case '+':
            out20.innerHTML = val1 + val2;
            break;
        case '-':
            out20.innerHTML = val1 - val2;
            break;
        case '*':
            out20.innerHTML = val1 * val2;
            break;
        case '/':
            out20.innerHTML = val1 / val2;
            break;
        default:
            out20.innerHTML = 'Введите оператор + - * /';
    }
}