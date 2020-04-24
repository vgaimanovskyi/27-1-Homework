/*
// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
const shoppingList = [{
    "product name": "apples",
    number: 10,
    bought: 1,
}, {
    "product name": "milk",
    number: 2,
    bought: 1,
}, {
    "product name": "cheese",
    number: 400,
    bought: 0,
}, {
    "product name": "bread",
    number: 1,
    bought: 1,
}, {
    "product name": "beer",
    number: 2,
    bought: 0,
}];
console.log(shoppingList);

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
let newShoppingList = shoppingList.sort((a, b) => {
    return a.bought - b.bought;
})
// console.log(newShoppingList);

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
function addProduct(arr, item, n) {
    for (let i in arr) {
        if (arr[i]["product name"] === item) {
            arr[i].number += n;
            return arr;
        }
    }
    let newProduct = {
        "product name": item,
        number: n,
        bought: 1,
    }
    arr.push(newProduct);
    return arr;
}
// console.log(addProduct(shoppingList, "milk", 4));
// console.log(addProduct(shoppingList, "water", 4));

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function buyProduct(arr, item) {
    for (let i in arr) {
        if (arr[i]["product name"] === item) {
            if (arr[i].bought === 1) {
                alert(`${item} have been bought earlier`);
                return arr;
            } else {
                arr[i].bought += 1;
                return arr;
            }
        }
    }
    let n = +prompt(`Enter number of ${item}`);
    return addProduct(arr, item, n)
}
// console.log(buyProduct(shoppingList, "beer"));


// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
// количества и цены за единицу товара. Написать следующие функции:
const check = [{
    "product name": "apples",
    number: 10,
    price: 15,
}, {
    "product name": "milk",
    number: 2,
    price: 24,
}, {
    "product name": "cheese",
    number: 400,
    price: 36,
}, {
    "product name": "bread",
    number: 1,
    price: 8,
}, {
    "product name": "beer",
    number: 2,
    price: 22,
}];
// Распечатка чека на экран;
function displayCheck(arr) {
    let result = '';
    for (let i of arr) {
        console.log(i);
    }
}
// displayCheck(check);

// Подсчет общей суммы покупки;
function summCheck(arr) {
    let result = 0;
    for (let i in arr) {
        result += arr[i].price;
    }
    return result;
}
// console.log(summCheck(check));

// Получение самой дорогой покупки в чеке;
function maxCheck(arr) {
    let result = 0;
    for (let i in arr) {
        result = Math.max(result, arr[i].price);
    }
    return result;
}
// console.log(maxCheck(check));

// Подсчет средней стоимости одного товара в чеке
function avSummCheck(arr) {
    let result = 0;
    for (let i in arr) {
        result += arr[i].price;
    }
    return result / arr.length;
}
// console.log(avSummCheck(check));


// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p> </p>,
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
// !!! error !!!
let css = [{
    name: "color",
    value: "red",
}, {
    name: "font-size",
    value: "18px",
}, {
    name: "font-weight",
    value: "bold",
}, {
    name: "text-decoration",
    value: "underline",
}]

// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20)
// и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним:
let academy = [{
    "classroom #": 104,
    seats: 18,
    faculty: "Technical",
}, {
    "classroom #": 110,
    seats: 10,
    faculty: "Technical",
}, {
    "classroom #": 206,
    seats: 15,
    faculty: "Management",
}, {
    "classroom #": 221,
    seats: 18,
    faculty: "Management",
}, {
    "classroom #": 312,
    seats: 20,
    faculty: "Finance",
}, {
    "classroom #": 410,
    seats: 10,
    faculty: "Economics",
}, {
    "classroom #": 404,
    seats: 18,
    faculty: "Economics",
}, {
    "classroom #": 512,
    seats: 17,
    faculty: "IT",
}]
// Вывод на экран всех аудиторий;
function info(arr) {
    for (let i in arr) {
        console.log(arr[i]);
    }
}
// info(academy);

// Вывод на экран аудиторий для указанного факультета;
function facultyClassroom(arr, item) {
    for (let i in arr) {
        if (arr[i].faculty === item) {
            console.log(arr[i]);
        }
    }
}
// facultyClassroom(academy, "Technical");

// Вывод на экран только тех аудиторий, которые подходят для переданной группы.
// Объект-группа состоит из названия, количества студентов и названия факультета;
function availableClassroom(arr, num, item) {
    for (let i in arr) {
        if ((arr[i].faculty === item) && (arr[i].seats >= num)) {
            console.log(arr[i]);
        }
    }
}
// availableClassroom(academy, 15, "Technical")

// Функция сортировки аудиторий по количеству мест;
let seatsSort = academy.sort((a, b) => {
    return b.seats - a.seats;
})
console.log(seatsSort);

// Функция сортировки аудиторий по названию (по алфавиту).
let classroomSort = academy.sort((a, b) => {
    return a["classroom #"] - b["classroom #"];
})
console.log(classroomSort);
*/