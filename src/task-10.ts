/*
Задача 10

У вас є масив імен користувачів:

const users = ["alice", "bob", "charlie"];

Завдання:

1. Створіть типізовану функцію toUserObjects, яка приймає масив рядків (імен користувачів).

2. Усередині функції переберіть масив імен та для кожного імені створи об’єкт з такими властивостями:

id — порядковий номер (починаючи з 1),
name — саме ім’я користувача (рядок з масиву).
3. Функція повинна повертати масив отриманих об’єктів.

4. Переконайтеся, що результат функції має правильну типізацію, а TypeScript не видає помилок.

Приклад виклику:

toUserObjects(users);
// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]

*/

const users: string[] = ["alice", "bob", "charlie"];

interface UserObject {
  id: number;
  name: string;
}
function toUserObjects(arr: string[]): UserObject[] {
  return arr.map((name, idx) => ({
    id: idx + 1,
    name: name,
  }));
}

console.log(toUserObjects(users));

//Перетворення та З'єднання Масивів

//Перетворення .map()

/*
Форматування Ціни:

Створіть інтерфейс Product з полями name: string та price: number.
Створіть функцію formatPrices, яка приймає масив Product[] і повертає масив рядків у форматі: "Назва: $Ціна.00".
*/

interface Product {
  name: string;
  price: number;
}

function formatPrices(arr: Product[]): string[] {
  return arr.map((product) => `${product.name}: $${product.price}.00`);
}

console.log(
  formatPrices([
    { name: "name-1", price: 10 },
    { name: "name-2", price: 20 },
  ])
); //['name-1: $10.00', 'name-2: $20.00']

/*
Видобуток Поля:

Використовуючи інтерфейс Product, створіть функцію getProductNames, яка приймає Product[] і повертає масив лише з іменами продуктів (string[]).
*/

function getProductNames(arr: Product[]): string[] {
  return arr.map((product) => product.name);
}

console.log(
  getProductNames([
    { name: "name-1", price: 10 },
    { name: "name-2", price: 20 },
  ])
); //['name-1', 'name-2']

/*
Перетворення Типу:

Створіть функцію toStatus, яка приймає масив чисел (number[]) і повертає масив об'єктів. Кожен об'єкт має бути типу { id: number, status: "pending" }.
*/
interface NumberObjects {
  id: number;
  status: "pending";
}
function toStatus(arr: number[]): NumberObjects[] {
  return arr.map((number) => ({
    id: number,
    status: "pending",
  }));
}

console.log(toStatus([1, 2, 3, 4, 5]));

/*
Умовне Значення:
Створіть функцію checkStock, яка приймає масив чисел (number[]) – кількості товару на складі.Поверніть масив булевих значень (boolean[]), де true, якщо кількість $> 10$, інакше false.
*/

function checkStock(arr: number[]): boolean[] {
  return arr.map((element) => element > 10);
}

console.log(checkStock([5, 20, 9, 30])); //[false, true, false, true]

//Фільтрація та Агрегація

/*
Фільтрація за Умовою:

Створіть інтерфейс Task з полями title: string та isDone: boolean.
Створіть функцію getPendingTasks, яка приймає Task[] і повертає масив, що містить лише невиконані завдання (isDone: false).
*/

interface Task {
  title: string;
  isDone: boolean;
}

function getPendingTasks(arr: Task[]): Task[] {
  return arr.filter((task) => task.isDone === false);
}

console.log(
  getPendingTasks([
    { title: "title-1", isDone: true },
    { title: "title-2", isDone: false },
    { title: "title-3", isDone: true },
    { title: "title-4", isDone: false },
  ])
);

/*
Фільтрація за Типом (Narrowing):

Створіть функцію filterNumbers, яка приймає масив (number | string)[].
Використовуйте .filter() та typeof для повернення масиву, що містить лише числа (number[]).
*/

function filterNumbers(arr: (number | string)[]): number[] {
  return arr.filter((element) => typeof element === "number");
}

console.log(filterNumbers([1, "2", 3, "4", 5])); //[1, 3, 5]

/*
Обчислення Суми (Reduce):

Використовуючи інтерфейс Product, створіть функцію calculateTotalPrice, яка приймає Product[] і повертає загальну суму цін усіх продуктів (число).
*/

function calculateTotalPrice(arr: Product[]): number {
  return arr.reduce((total, { price }) => {
    return total + price;
  }, 0);
}

console.log(
  calculateTotalPrice([
    { name: "name-1", price: 10 },
    { name: "name-2", price: 20 },
  ])
); //30
//я не дуже впевнений щодо правильності застосування { price }. покажи як буде правильно

//Складна Комбінація та Union Types

/*
Перетворення та Union Type:

Створіть функцію processResponses, яка приймає масив об'єктів { success: boolean, data: number | string }[].
Поверніть масив, що містить лише дані (data) з успішних відповідей (success: true). Результат має мати тип (number | string)[].
*/
interface Process {
  success: boolean;
  data: number | string;
}

function processResponses(arr: Process[]): (number | string)[] {
  return arr
    .filter((element) => element.success === true)
    .map((element) => element.data);
}

console.log(
  processResponses([
    { success: true, data: 1 },
    { success: false, data: 2 },
    { success: true, data: "3" },
    { success: false, data: "4" },
  ])
); //[1, '3']

/*
Створення Словника (Reduce):

Використовуючи інтерфейс Product, створіть функцію productsToMap, яка приймає Product[] і повертає об'єкт-словник, де ключ — це name продукту, а значення — це сам об'єкт Product.
Типізуйте повернення як індексований тип: { [key: string]: Product }.
*/

interface Product {
  name: string;
  price: number;
}

type ProductDictionary = { [key: string]: Product };

function productsToMap(arr: Product[]): ProductDictionary {
  return arr.reduce((acc, product) => {
    acc[product.name] = product;

    return acc;
  }, {} as ProductDictionary);
}

const productList = [
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 50 },
];

const productMap = productsToMap(productList);

console.log("productMap:", productMap);

/*
З'єднання Об'єктів:

Створіть інтерфейси UserBasic (id: number) та UserDetail (email: string).

Створіть функцію combineData, яка приймає два масиви: UserBasic[] та UserDetail[] (припускаючи, що вони мають однакову довжину і порядок).

Функція має повернути масив типу UserBasic & UserDetail (використовуйте .map() та об'єднання об'єктів).
*/

interface UserBasic {
  id: number;
}

interface UserDetail {
  email: string;
}

type FullUser = UserBasic & UserDetail;

function combineData(
  basicData: UserBasic[],
  detailData: UserDetail[]
): FullUser[] {
  return basicData.map((basicUser, idx) => {
    const detailUser = detailData[idx];

    return {
      ...basicUser, // { id: ... }
      ...detailUser, // { email: ... }
    } as FullUser;
  });
}

const basic = [{ id: 1 }, { id: 2 }];
const details = [{ email: "a@test.com" }, { email: "b@test.com" }];

const fullUsers = combineData(basic, details);
console.log("fullUsers:", fullUsers);
