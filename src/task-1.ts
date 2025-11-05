/*
Задача 1

Опис: Є об'єкт settings, який містить налаштування.

const settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};

Завдання:

Створіть тип Settings, який описує цей об'єкт.
Типізуйте settings через цей тип.
*/

type Settings = {
  darkMode: boolean;
  fontSize: number;
  language: string;
};

const settings: Settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};
console.log("settings:", settings);

// **************
// 10 Типових Завдань для Самоперевірки

// Частина I: Основи та Модифікатори
/*
Створіть інтерфейс Product з двома обов'язковими полями: name (рядок) і price (число).
*/

interface Product {
  name: string;
  price: number;
}

/*
Створіть об'єкт laptop і типізуйте його за допомогою інтерфейсу Product.
*/

const laptop: Product = {
  name: "Product-1",
  price: 300,
};
console.log("laptop:", laptop);

/*
Оновіть інтерфейс Product, додавши поле id типу number і зробіть його тільки для читання (readonly).
*/

interface Product1 {
  readonly id: number;
  name: string;
  price: number;
}

const laptop1: Product1 = {
  id: 111,
  name: "Product-1",
  price: 300,
};
console.log("laptop:", laptop1);

/*
Створіть інтерфейс Config і додайте до нього необов'язкове поле debugMode типу boolean.
*/

interface Config {
  debugMode?: boolean;
}

/*
Створіть об'єкт projectConfig типу Config і опустіть поле debugMode.
*/

const projectConfig: Config = {};
console.log("projectConfig:", projectConfig);

//Частина II: Складні Типи

/*
Створіть псевдонім типу Coordinates для об'єкта з полями lat (число) та lon (число).
*/

type Coordinates = {
  lat: number;
  lon: number;
};

/*
Створіть інтерфейс GeoUser, який містить обов'язкове поле location типу Coordinates.
*/

interface GeoUser {
  location: Coordinates;
}

const geoUser: GeoUser = {
  location: {
    lat: 111,
    lon: 222,
  },
};
console.log("geoUser:", geoUser);

/*
Створіть інтерфейс HttpRequest, який дозволяє мати необмежену кількість додаткових заголовків, де ключ та значення є рядками (використовуйте індексовані властивості).
*/

interface HttpRequest {
  [key: string]: string;
}

const httpRequest: HttpRequest = {
  http1: "http-1",
  http2: "http-2",
};
console.log("httpRequest:", httpRequest);

//Частина III: Спадкування та Об'єднання

/*
Створіть інтерфейс Logger з одним методом log(message: string): void.
*/

interface Logger {
  log(message: string): void;
}

/*
Створіть новий тип LoggableProduct шляхом об'єднання (інтерсекції) типів Product (з Завдання 3) та Logger (з Завдання 9).
*/

type LoggableProduct = Product1 & Logger;

const loggableProduct: LoggableProduct = {
  id: 222,
  name: "product-X",
  price: 33,
  log(message) {
    console.log(message);
  },
};

console.log("loggableProduct:", loggableProduct);
loggableProduct.log("Hello");

// ********************************

//Типізація Масивів та Масивів Об'єктів

// Частина I: Прості та Об'єднані Масиви

/*
Оголосіть змінну namesList як масив, що містить тільки рядки, і присвойте їй 3 рядкові значення.
*/

const namesList: string[] = ["name1", "name2", "name3"];
console.log("namesList:", namesList);

/*
Оголосіть змінну ages як масив, що містить тільки числа, використовуючи синтаксис Array<T>.
*/

const ages: Array<number> = [22, 33, 44];
console.log("ages:", ages);

/*
Створіть масив dataPoints, який може містити елементи number або null.
*/

const dataPoints: (number | null)[] = [1, 2, null, 4, null];
console.log("dataPoints:", dataPoints);

/*
Створіть функцію getFirst<T>, яка приймає масив будь-якого типу T[] і повертає перший елемент.
*/
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirst([1, 2, 3]);
const firstString = getFirst(["a", "b", "c"]);
console.log("firstNumber:", firstNumber);
console.log("firstString:", firstString);

//Частина II: Масиви Об'єктів

/*
Створіть інтерфейс Task з полями id (number) та description (string).
*/

interface Task {
  id: number;
  description: string;
}

/*
Оголосіть змінну todoList як масив типу Task[] та ініціалізуйте її двома тестовими елементами.
*/

const todoList: Task[] = [
  { id: 1, description: "descr-1" },
  { id: 2, description: "descr-2" },
];

console.log("todoList:", todoList);

/*
Створіть інтерфейс Point3D з полями x, y, z (всі number).
*/

interface Point3D {
  x: number;
  y: number;
  z: number;
}

/*
Створіть функцію getCoordinatesSum, яка приймає масив Point3D[] і повертає суму всіх x координат.
*/

function getCoordinatesSum(arr: Point3D[]): number {
  return arr.reduce((sum, point) => {
    return sum + point.x;
  }, 0);
}

const pointsArray: Point3D[] = [
  { x: 1, y: 5, z: 2 },
  { x: 2, y: 1, z: 8 },
  { x: 3, y: 0, z: 3 },
];

const totalXSum = getCoordinatesSum(pointsArray); // Результат: 10 + 20 + 5 = 35
console.log("totalXSum:", totalXSum);

//Частина III: Складні Структури

/*
Створіть інтерфейс Category з полями name (string) та products (масив, що містить об'єкти Product з Завдання 6).
*/

interface Category {
  name: string;
  products: Product1[];
}

const category: Category = {
  name: "category1",
  products: [
    { id: 1, name: "prod-1", price: 33 },
    { id: 2, name: "prod-2", price: 22 },
  ],
};

console.log("category:", category);

/*
Оголосіть змінну shopStructure як масив типу Category[] і створіть один тестовий об'єкт, що містить масив продуктів.
*/

const shopStructure: Category[] = [
  {
    name: "category1",
    products: [
      { id: 1, name: "prod-1", price: 33 },
      { id: 2, name: "prod-2", price: 22 },
    ],
  },
];

console.log("shopStructure:", shopStructure);
