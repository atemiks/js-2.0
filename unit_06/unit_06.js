//  Task 1
// С помощью вложенных циклов, нарисуйте строку:
// ***_***_***_
// где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, 
// а _ с помощью внешнего.

function t1() {
    let temp = '';

    for(let i = 0; i < 3; i++) {
        for(let k = 0; k < 3; k++) {
            temp += '*'
        }

        temp += '_'
    }

    document.querySelector('.out-1').innerHTML = temp;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// С помощью вложенных циклов, нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. 
// Внешний цикл выводит цифру и перенос строки br, 
// внутренний - *_, и после этого внешний - знак переноса.
function t2() {
    let temp = '';

    for(let i = 0; i < 3; i++) {
        temp += i + '<br>';

        for(let k = 0; k < 3; k++) {
            temp += '*_';
        }

        temp += '<br>';
    }


    document.querySelector('.out-2').innerHTML = temp;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// С помощью вложенных циклов, нарисуйте строку:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// Решить задачу с помощью вложенных циклов. 
// Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.
function t3() {
    let temp = '';

    for(let i = 0; i < 4; i++) {
        for(let k = 0; k < 3; k++) {
            temp += '*_';
        }

        temp += '<br>';
    }

    document.querySelector('.out-3').innerHTML = temp;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// С помощью вложенных циклов, нарисуйте строку:
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
    let temp = '';

    for(let i = 1; i <= 3; i++) {
        temp += i + '_';

        for(let k = 1; k <= 5; k++) {
            temp += k + '*';
        }
    }

    document.querySelector('.out-4').innerHTML = temp;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// С помощью вложенных циклов, нарисуйте строку:

// 101010
// 101010
// 101010

// Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. 
// Внешний цикл - br.
function t5() {
    let temp = '';

    for(let i = 0; i < 3; i++) {
        for(let k = 0; k < 6; k++) {
            if(k % 2 == 0) {
                temp += '1';
            } else {
                temp += '0';
            }
        }

        temp +=  '<br>';
    }

    document.querySelector('.out-5').innerHTML = temp;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// С помощью вложенных циклов, нарисуйте строку:

// 10x01x
// 10x01x
// 10x01x


function t6() {
    let temp = '';

    for(let i = 0; i < 3; i++) {
        for(let k = 0; k < 2; k++) {
            if(k % 2 == 0) {
                temp += '10x';
            } else {
                temp += '01x';
            }
        }

        temp +=  '<br>';
    }

    document.querySelector('.out-6').innerHTML = temp;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// С помощью вложенных циклов, нарисуйте строку:

// *
// **
// ***
// ****

function t7() {
    let temp = '';

    for(let i = 1; i <= 4; i++) {
        for(let k = 0; k < i; k++) {
            temp += '*'
        }

        temp +=  '<br>';
    }

    document.querySelector('.out-7').innerHTML = temp;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra
// С помощью вложенных циклов, нарисуйте строку:

// *****
// ****
// ***
// **
// *

function t8() {
    let temp = '';

    for(let i = 5; i > 0; i--) {
        for(let k = i; k > 0; k--) {
            temp += '*'
        }

        temp +=  '<br>';
    }

    document.querySelector('.out-8').innerHTML = temp;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// С помощью вложенных циклов, нарисуйте строку:

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {
    let temp = '';

    for(let i = 1; i <= 5; i++) {
        for(let k = 1; k <= i; k++) {
            temp += k + '_';
        }

        temp +=  '<br>';
    }

    document.querySelector('.out-9').innerHTML = temp;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// С помощью вложенных циклов, нарисуйте строку:

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_


function t10() {
    let temp = '';

    for(let i = 0; i < 5; i++) {
        for(let k = 1; k <= 10; k++) {
            if(k == 10) {
                temp += i + 1 + '0_';
                break;
            }

            temp += i + '' + k + '_';
        }

        temp +=  '<br>';
    }

    document.querySelector('.out-10').innerHTML = temp;
}

document.querySelector('.b-10').onclick = t10;