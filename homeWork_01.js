// Задание 1 – Создать объект counter всеми возможными способами;

const counter1 = {
    count: 0,
};

function Counter() {
    this.count = 0;
}

const counter2 = new Counter()

const counter3 = Object.create(counter1)

const counter4 = Object.assign(counter1)


// Задание 2 – Скопировать объект counter всеми возможными способами;

const counterCopy1 = {...counter1}

const counterCopy2 = Object.assign(counter1)

const counterCopy3 = {};

for (let key in counter1) {
    counterCopy3[key] = counter1[key];
}

const counterCopy4 = structuredClone(counter1)

const counterCopy5 = JSON.parse(JSON.stringify(counter1))


// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

function makeCounter() {
    let count = 0
    return function() {
        return count++
    }
}

const makeCounter = function() {
    let count = 0
    return function() {
        return count++
    }
}

const makeCounter = function makeAnotherCounter() {
    let count = 0
    return function() {
        return count++
    }
}

const makeCounter = () => {
    let count = 0
    return function() {
        return count++
    }
}

function Counter() {
    this.count = 0;
}

(function () {
    let count = 0
    return function() {
        return count++
    }
})()

let count = 0;
let makeCounter = new Function ('return count++')


// Бонус Задание 1 – Написать функцию глубокого сравнения двух объектов:

const obj1 = {
    here: {
        is: "on",
        other: "3"
      },
    object: 'Z',
  };

  const obj2 = {
    here: {
        is: "on",
        other: "2"
      },
    object: 'Z',
  };


let coincidences = [];

const deepEqual = (obj1, obj2) => {
    const firstEntries = Object.entries(obj1)
    const secondEntries = Object.entries(obj2)
    let isEqual;

    if (firstEntries.length === secondEntries.length) {
      firstEntries.map((key, index) => {

        if (key[0] === secondEntries[index][0] && key[1].length === undefined) {
            deepEqual(key[1], secondEntries[index][1])
            }
        else if (key[0] === secondEntries[index][0] && key[1] === secondEntries[index][1]) {
            isEqual = true
            coincidences.push(isEqual)
            }
        else {
            isEqual = false
            coincidences.push(isEqual)
        }
        })
    }
    return (coincidences.every((element) => element === true)) ? 'Объекты равны' : 'Объекты не равны';
  };


// Бонус Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
    return str.split('').reverse().join('')
}

//  почему Number([5]) это 5, а Number([5, 6] это NaN)

// Так как массивы это те же объекты, то процесс преобразования будет следующий:
// 1) сначала вызовется метод valueOf(), который вернет этот же массив
// 2) так как массив это не примитив, далее вызовется метод toString(), который вернет строку '5,6'
// 3) запятая не является числовым разделителем, поэтому js не сможет преобразовать строку к числу
