/*
Задача 9

Завдання:

1. Створіть інтерфейс Container, що містить:

масив items однакового типу для зберігання елементів.
метод addItem, який додає елемент до контейнера.
метод getItem, який повертає елемент за індексом.
2. Створіть два контейнери:

numberContainer, який містить числа та використовує відповідну типізацію.
stringContainer, який містить рядки та також використовує відповідну типізацію.
3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

Примітка:

Контейнер має підтримувати тільки один тип елементів.
*/
interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3, 4, 5],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

numberContainer.addItem(6);
console.log("numberContainer:", numberContainer);
console.log(numberContainer.getItem(0)); //1

const stringContainer: Container<string> = {
  items: ["1", "2", "3", "4", "5"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

stringContainer.addItem("6");
console.log("stringContainer:", stringContainer);
console.log(stringContainer.getItem(0)); //"1"

function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}
const lastNumberElement = getLastElement([1, 2, 3, 4, 5]);
console.log("lastNumberElement:", lastNumberElement); //5

const lastStrElement = getLastElement(["1", "2", "3", "4", "5"]);
console.log("lastStrElement:", lastStrElement); //'5'

//Generics (Базовий Рівень)

//Частина I: Generics у Функціях

/*
Функція identity:

Створіть узагальнену функцію getValue<T>, яка приймає один аргумент типу T і повертає його.
*/

function getValue<T>(arg: T): T {
  return arg;
}
console.log(getValue<string>("lalala"));
console.log(getValue<number>(22));

/*
Функція для Масивів:

Створіть узагальнену функцію reverseArray<T>, яка приймає масив типу T[] і повертає його, типізуючи повернення як T[].
*/

function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverseArray<string>(["1", "2", "3", "4", "5"]));
console.log(reverseArray<number>([1, 2, 3, 4, 5]));

/*
Перший Елемент:

Створіть узагальнену функцію getFirstElement<T>, яка приймає масив T[] і повертає його перший елемент (T).
*/

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<string>(["1", "2", "3", "4", "5"]));
console.log(getFirstElement<number>([1, 2, 3, 4, 5]));

/*
Типізована Пара:

Створіть узагальнену функцію createPair<T, U>, яка приймає два аргументи різних типів T і U і повертає їх у вигляді кортежу [T, U].
*/

function createPair<T, U>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2];
}

console.log(createPair<string, number>("string", 2)); //['string', 2]

//Частина II: Generics в Інтерфейсах та Типах

/*
Generic-Інтерфейс Контейнера:

Створіть Generic-інтерфейс DataContainer<T> з однією властивістю data типу T.
Створіть змінну idContainer типу DataContainer<number>.
*/

interface DataContainer<T> {
  data: T;
}

const idContainer: DataContainer<number> = {
  data: 1,
};

console.log("idContainer:", idContainer);

/*
Generic-Інтерфейс Масиву:

Створіть Generic-інтерфейс List<T> з однією властивістю items типу T[].
*/

interface List<T> {
  items: T[];
}

const list: List<number> = {
  items: [1, 2, 3, 4, 5],
};

console.log("list:", list);

/*
Generic-Інтерфейс Функції:

Створіть Generic-інтерфейс Processor<T> для функції, яка приймає аргумент типу T і повертає boolean.
*/

interface Processor<T> {
  processor(arg: T): boolean;
}

//Частина III: Обмеження та Практика

/*
Створіть узагальнену функцію mergeObjects<T, U>, яка приймає два об'єкти T і U і повертає їх перетин T & U.

Обмежте T і U так, щоб вони могли бути лише об'єктами (T extends object, U extends object).
*/

function mergeObjects<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

/*
Обмеження extends з Ключем:

Створіть інтерфейс Named з полем name: string.
Створіть узагальнену функцію getName<T extends Named>, яка приймає об'єкт T і повертає лише його властивість name.
*/

interface Named {
  name: string;
}

function getName<T extends Named>(obj: T): string {
  return obj.name;
}

/*
Generic-Інтерфейс для Словника:

Створіть Generic-інтерфейс Dictionary<T>, де ключі завжди є рядками, а значення мають бути типу T.
Створіть змінну numberDictionary типу Dictionary<number>.
*/

interface Dictionary<T> {
  [key: string]: T;
}

const numberDictionary: Dictionary<number> = {
  val1: 1,
  val2: 2,
  val3: 3,
  val4: 4,
};
console.log("numberDictionary:", numberDictionary);
