// task 1
// Создайте две переменные a = 7 и b = 9. 
// Выведите в консоль результа умножения a на b.
let a = 7,
    b = 9;

console.log(a * b);

// task 2
// Создайте две переменные c = 7 и d = 9. 
// Выведите на страницу результат деления c на d.
let c = 7,
    d = 9,
    out2 = document.querySelector('.out-2');

out2.innerHTML = c / d;


// task 3
// Создайте две переменные e = 3 и f = 5. 
// Выведите на страницу результат сложения e + f.
let e = 3,
    f = 5,
    out3 = document.querySelector('.out-3');

out3.innerHTML = e + f;


// task 4
// Создайте две переменные e1 = '3' и f1 = 5. 
// Выведите на страницу результат сложения e1 + f1. 
// Объясните разницу.
let e1 = '3',
    f1 = 5,
    out4 = document.querySelector('.out-4');

out4.innerHTML = e1 + f1;


// task 5
// Создайте две переменные e2 = 3 и f2 = 0. 
// Выведите на страницу результат деления e2 на f2.
let e2 = 3,
    f2 = 0,
    out5 = document.querySelector('.out-5');

out5.innerHTML = e2 / f2;


// task 6
// Создайте две переменные e3 = 3 и f3 = 'Hello'. 
// Выведите на страницу результат сложения двух переменных.
let e3 = 3,
    f3 = 'Hello',
    out6 = document.querySelector('.out-6');

out6.innerHTML = e3 + f3;


// task 7
// Создайте две переменные e4 = 3 и f4 = 'Hello'. 
// Выведите на страницу результат умножения двух переменных.
let e4 = 3,
    f4 = 'Hello',
    out7 = document.querySelector('.out-7');

out7.innerHTML = e4 * f4;


// task 8
// Создайте input и кнопку. 
// По нажатию на кнопку выполняется функция, 
// которая выводит в консоль то, что пользователь ввел в input.
let input8 = document.querySelector('.input-8'),
    button8 = document.querySelector('.button-8');

button8.onclick = function() {
    console.log(input8.value);
}

// task 9
// Создайте input и кнопку. 
// По нажатию на кнопку выполняется функция, 
// которая выводит на страницу, что пользователь ввел в input. 
// Добавьте очистку input после нажатия кнопки.
let input9 = document.querySelector('.input-9'),
    button9 = document.querySelector('.button-9');

button9.onclick = function() {
    console.log(input9.value);
    input9.value = '';
}


// task 10
// Создайте input и кнопку. 
// По нажатию на кнопку выполняется функция, 
// которая выводит на страницу число, 
// которое ввел пользователь умноженное на 10.
let input10 = document.querySelector('.input-10'),
    button10 = document.querySelector('.button-10'),
    out10 = document.querySelector('.out-10');

button10.onclick = function() {
    out10.innerHTML = +input10.value * 10;
}


// task 11
// Создайте input и кнопку. 
// По нажатию на кнопку выполняется функция, 
// которая выводит на страницу число, 
// которое ввел пользователь и к нему добавленное число 10.
let input11 = document.querySelector('.input-11'),
    button11 = document.querySelector('.button-11'),
    out11 = document.querySelector('.out-11');

button11.onclick = function() {
    out11.innerHTML = +input11.value + 10;
}


// task 12
// Создайте два input и кнопку. 
// В первый input пользователь вводит имя, во второе фамилию. 
// При нажатии кнопки выполняется функция, 
// которая выводит в консоль строку 'Hello имя фамилия', 
// где имя - имя пользователя и фамилия - введенная фамилия.
let input12Name = document.querySelector('.input-12-1'),
    input12Surname = document.querySelector('.input-12-2'),
    button12 = document.querySelector('.button-12');

button12.onclick = function() {
    console.log('Hello ' + input12Name.value + ' ' + input12Surname.value)
}


// task 13
// Создайте два input и кнопку. 
// В input пользователь вводит числа. 
// При нажатии кнопки выполняется функция, 
// которая выводит сумму данных двух чисел на страницу.
let input13First = document.querySelector('.input-13-1'),
    input13Second = document.querySelector('.input-13-2'),
    button13 = document.querySelector('.button-13'),
    out13 = document.querySelector('.out-13');

button13.onclick = function() {
    out13.innerHTML = +input13First.value * +input13Second.value;
}


// task 14
// Создайте input и пропишите ему в html value = 77. 
// С помощью JS измените value на 'Hello'.
let input14 = document.querySelector('.input-14'),
    button14 = document.querySelector('.button-14');

button14.onclick = function() {
    input14.value = 'Hello';
}


// task 15
// Создайте input и получите его в переменную y. 
// В js выполните следующее присвоение: 
// y.style.border = '2px solid red' . 
// Изучите результат операции.
let y = document.querySelector('.input-15');

y.style.border = '2px solid red';

// task 16
// Создайте два input type=number, 
// куда пользователь может ввести числа. 
// Выведите на страницу сумму данных чисел.
let input16First = document.querySelector('.input-16-1'),
    input16Second = document.querySelector('.input-16-2'),
    button16 = document.querySelector('.button-16'),
    out16 = document.querySelector('.out-16');

button16.onclick = function() {
    out16.innerHTML = +input16First.value + +input16Second.value;
}

// task 17
// Создайте input type="text" 
// куда пользователь может ввести строку и число. 
// Создайте функцию, которая запускается по нажатию на кнопку. 
// Получите значение из input в переменную t. 
// А затем сделайте операцию t = parseInt(t), 
// и результат операции выведите в консоль. 
// Прочитайте за эту операцию. 
// Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . 
// Изучите вывод.
let input17 = document.querySelector('.input-17'),
    button17 = document.querySelector('.button-17');

button17.onclick = function() {
    let t = input17.value;

    t = parseInt(t, 10);
    console.log(t);
}

// task 18
// Создайте input type="text" 
// куда пользователь может ввести строку и число. 
// Создайте функцию, которая запускается по нажатию на кнопку. 
// Получите значение из input в переменную t. 
// А затем сделайте операцию t = parseFloat(t), 
// и результат операции выведите в консоль. 
// Прочитайте за эту операцию. 
// Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . 
// Изучите вывод.
let input18 = document.querySelector('.input-18'),
    button18 = document.querySelector('.button-18');

button18.onclick = function() {
    let t = input18.value;

    t = parseFloat(t);
    console.log(t);
}


// task 19
// Создайте два input type=number, 
// куда пользователь может ввести отрицательные числа. 
// Выведите на страницу сумму данных чисел. 
// Мы это делали! Зачем? 
// Затем, что нужно понимать как влияет перевод в число 
// с помощью + и parseInt на отрицательные числа!!!
let input19First = document.querySelector('.input-19-1'),
    input19Second = document.querySelector('.input-19-2'),
    button19 = document.querySelector('.button-19'),
    out19 = document.querySelector('.out-19');

button19.onclick = function() {
    let result = +input19First.value + +input19Second.value;
    // let result = parseInt(+input19First.value + +input19Second.value, 10);
    out19.innerHTML = result;
}

// task 20
// Создайте опросник, 
// куда пользователь может ввести 
// имя, фамилию, возраст, род занятий. 
// И кнопку. 
// По нажатию кнопки выведите на страницу предложение 
// 'Уважаемый Иван, Иванов, ваш возраст 33 года, 
// по професси вы ...' 
// куда поставьте соответствующие данные из inputов.
let input20Name = document.querySelector('.input-20-name'),
    input20Surname = document.querySelector('.input-20-surname'),
    input20Age = document.querySelector('.input-20-age'),
    input20Job = document.querySelector('.input-20-job'),
    button20 = document.querySelector('.button-20'),
    out20 = document.querySelector('.out-20');

button20.onclick = function() {
    out20.innerHTML = 'Уважаемый ' + input20Name.value + ' '
    + input20Surname.value + ', '
    + 'ваш возраст ' + input20Age.value + ' года '
    + 'по професси вы ' + input20Job.value;
}