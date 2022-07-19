
// Task 1 ============================================
/* Создайте блок div-1. 
Добавьте на него событие touchstart. 
Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').textContent = 'touch';
}

document.querySelector('.div-1').ontouchstart = t1;

// Task 2 ============================================
/* Создайте блок div-2. 
Добавьте на него событие touchstart. 
Выведите в out-2 число срабатываний события. */

let touchCounter = 0;
function t2() {
    document.querySelector('.out-2').textContent = ++touchCounter;
}

document.querySelector('.div-2').ontouchstart = t2;


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. 
Добавьте на них событие touchstart. 
Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(event) {
    let out = document.querySelector('.out-3');

    switch(event.target.className) {
        case 'div-3_1 block':
            out.textContent = 1;
            break;
        case 'div-3_2 block':
            out.textContent = 2;
            break;
    }
}

document.querySelector('.div-3_1').ontouchstart = t3;
document.querySelector('.div-3_2').ontouchstart = t3;


// Task 4 ============================================
/*  Создайте блок div-4. 
И кнопку b-4. 
При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. 
При событии происходит вывод текста touch в out-4.  */

function t4() {
    document.querySelector('.out-4').textContent = 'touch';
}

document.querySelector('.b-4').onclick = function() {
    document.querySelector('.div-4').ontouchstart = t4;
}

// Task 5 ============================================
/*  Дана кнопка b-5. 
При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').ontouchstart = false;
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. 
При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').textContent = 'touchend';
}

document.querySelector('.div-4').ontouchend = t6;


// Task 7 ============================================
/*  Дан блок div-7. 
Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    this.style.backgroundColor = 'red';
}

document.querySelector('.div-7').ontouchstart = t7;

// Task 8 ============================================
/*  Дан блок div-8. 
Добавьте на него событие touch, которое при срабатывании 
окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
    this.style.backgroundColor = a8[Math.floor(Math.random() * a8.length)];
}

document.querySelector('.div-8').ontouchstart = t8;


// Task 9 ============================================
/* Дан блок div-9. 
Добавьте событие ontouch. 
Выводите количество одновременных касаний в out-9. */

function t9(event) {
    document.querySelector('.out-9').textContent = event.touches.length;
}

document.querySelector('.div-9').ontouchstart = t9;


// Task 10 ============================================
/*  Дан блок div-10. 
Добавьте на него событие touchmove. 
При срабатывании события - увеличивайте его ширину на 1. */
let block10Width = document.querySelector('.div-10').offsetWidth;

function t10(event) {
    this.style.width = block10Width++ + 'px';
}

document.querySelector('.div-10').ontouchmove = t10;

// Task 11 ============================================
/*  Дан блок div-11. 
Добавьте на него событие touch. 
При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
    console.log(event);
    document.querySelector('.out-11').textContent = event.touches[0].radiusX + ' , ' + event.touches[0].radiusY;
}

document.querySelector('.div-11').ontouchstart = t11;

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
Изучите html код внутри div-12-wrapper.
1. Добавьте на кнопку nex событие click, touch так, 
чтобы при событии запускалась функция nextFunction и 
активным становилось изображение следующее за выделенным классом active-img (рамкой). 
Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.
2. Добавьте на кнопку prev событие click, touch так, 
чтобы при событии запускалась функция prevFunction и 
активным становилось изображение до выделенного классом active-img (рамкой). 
Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.
3. Учтите краевые эффекты - когда мы доходим до конца или начала, 
то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.
4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. 
5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. 
Т.е. произошло событие - заменилась главная картинка.
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const mainImage = document.querySelector('.img-12-max');

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function setActiveElement(count) {
    images.forEach(function(item) {
        item.classList.remove('active-img');
    });

    images[count].classList.add('active-img');
    mainImage.setAttribute('src', images[count].getAttribute('src'));
}

function nextFunction() {
    count++;

    if(count < images.length) {
        setActiveElement(count);
    }

    if(count == images.length) {
        count = 0;
        setActiveElement(count);
    }
}

function prevFunction() {
    count--;

    if(count >= 0) {
        setActiveElement(count);
    }

    if(count == -1) {
        count = images.length - 1;
        setActiveElement(count);
    }
}


function resetFunction() {
    count = 0;
    setActiveElement(count);
}
