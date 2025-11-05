/*
Задача 2

Опис: Є функція, яка приймає суму (число) та тип валюти.

function convertCurrency({amount, currency}) {
  console.log(`Converting ${amount} to ${currency}`);
}

Завдання:

Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
Типізуйте повернення функції.
*/

// Варіант 1

function convertCurrency1({
  amount,
  currency,
}: {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency1({ amount: 20, currency: "USD" });

// Варіант 2

interface ConvertCurrency2 {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}

function convertCurrency2({ amount, currency }: ConvertCurrency2): void {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency2({ amount: 20, currency: "USD" });

/*
Це більш чистий та рекомендований підхід. 
Ви відокремлюєте оголошення структури (interface Convert) від оголошення функції. 
Якщо вам знадобиться використати цей тип аргументу деінде, ви можете легко його імпортувати.
*/

//Частина I: Об'єднані Типи (Union Types - |)

/*
Створіть псевдонім типу Input, який може бути string, number або boolean.
*/

type Input = string | number | boolean;

/*
Створіть функцію printId, яка приймає id: string | number і виводить його в консоль.
*/
type StringOrNumber = string | number;

function printId(id: StringOrNumber): void {
  console.log(id);
}

printId(10);
printId("10");

/*
Створіть інтерфейс SuccessResponse з полями: status: "success" та data: object.
*/

interface SuccessResponse {
  status: "success";
  data: { userCount: number };
}

/*
Створіть інтерфейс ErrorResponse з полями: status: "error" та message: string.
*/

interface ErrorResponse {
  status: "error";
  message: string;
}

/*
Створіть об'єднаний тип APIResult, який може бути SuccessResponse або ErrorResponse.
*/

type APIResult = SuccessResponse | ErrorResponse;

//Частина II: Типи Перетину (Intersection Types - &)

/*
Створіть інтерфейс User з полями: id: number та name: string.
*/

interface User {
  id: number;
  name: string;
}

/*
Створіть інтерфейс Admin з полем: permissions: string[].
*/

interface Admin {
  permission: string[];
}

/*
Створіть тип перетину AdminUser, який поєднує User та Admin. Створіть змінну цього типу.
*/
type AdminUser = User & Admin;

/*
Створіть інтерфейс Resizable з методом resize(factor: number): void.
*/

interface Resizable {
  resize(factor: number): void;
}

/*
Створіть тип перетину ResizableProduct, який поєднує ваш попередній тип Product (з попередніх завдань, наприклад, { name: string, price: number }) та Resizable.
*/
interface Product {
  name: string;
  price: number;
}

type ResizableProduct = Product & Resizable;

//Звуження Типів (Type Narrowing)

/*
Створіть функцію handleAPIResult, яка приймає result: APIResult (тип з Завдання I.5).

Усередині функції handleAPIResult використайте конструкцію if / else if для перевірки значення result.status (літеральне поле).

Якщо status — "success", виведіть result.data. Якщо status — "error", виведіть result.message.
*/

function handleAPIResult(result: APIResult): void {
  if (result.status === "success") {
    console.log("Успіх! Отримано дані:", result.data);
    console.log("Кількість користувачів:", result.data.userCount);
  } else if (result.status === "error") {
    console.error("Помилка! Повідомлення:", result.message);
  }
}

const successfulResult: APIResult = {
  status: "success",
  data: { userCount: 42 },
};
handleAPIResult(successfulResult);

const errorResult: APIResult = {
  status: "error",
  message: "Resource not found on server.",
};
handleAPIResult(errorResult);
