/*
Задача 6

const user = {
  name: "Alice",
  address: {
    city: "Kyiv"
  }
};

console.log(user.address?.city);

Завдання:

Створіть тип для user.
Зробіть address необов’язковим.
Перевірте, що user.address?.city не викликає помилки.
*/
interface User {
  name: string;
  address?: { city: string };
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log(user.address?.city);

//Частина I: Необов'язкові Властивості (?)

/*
Необов'язкове Поле:
Створіть інтерфейс Profile з обов'язковим полем username: string та необов'язковим полем bio: string.
Створіть два об'єкти типу Profile: один з bio, інший без.
*/

interface Profile {
  username: string;
  bio?: string;
}

const user1: Profile = {
  username: "Name1",
};
const user2: Profile = {
  username: "Name2",
  bio: "lalala",
};
console.log("user1:", user1);
console.log("user2:", user2);

/*
Необов'язковий Об'єкт:
Створіть інтерфейс Car з обов'язковим полем make: string.
Додайте необов'язкове поле engine типу { cylinders: number }.
*/
interface Car {
  make: string;
  engine?: { cylinders: number };
}
const car: Car = { make: "lalala" };
console.log("car:", car);

/*
Необов'язковий Масив:
Створіть інтерфейс UserStats з обов'язковим полем lastLogin: Date.
Додайте необов'язкове поле recentActivity типу масив рядків (string[]).
*/

interface UserStats {
  lastLogin: Date;
  recentActivity?: string[];
}

/*
Необов'язковий Метод:
Створіть інтерфейс Notifier з обов'язковим полем send(msg: string): void.
Додайте необов'язковий метод setup(): void.
*/
interface Notifier {
  send(msg: string): void;
  setup?(): void;
}

//Частина II: Опціональний Ланцюжок (?.)

/*
Доступ до Властивості:
Використовуючи інтерфейс Car (з Завдання 2), створіть змінну carA без поля engine.
Виведіть у консоль carA.engine?.cylinders. Поясніть, чому не виникає помилка.
*/

const carA: Car = { make: "tototo" };
console.log(carA.engine?.cylinders);
// при використанні опціонального ланцюжка операція негайно зупиняється і замість помилки повертається undefined

/*
Ланцюжок з Декількома Рівнями:
Створіть інтерфейс DeepData з необов'язковим полем user типу { profile?: { email: string } }.
Створіть об'єкт data без поля profile.
Виведіть у консоль data.user?.profile?.email.
*/

interface DeepData {
  user?: { profile?: { email: string } };
}

const data: DeepData = {};
console.log(data.user?.profile?.email); //undefined

/*
Виклик Необов'язкового Методу:
Використовуючи інтерфейс Notifier, створіть об'єкт slackNotifier, який не має методу setup.
Викличте метод безпечно: slackNotifier.setup?.().
*/
const slackNotifier: Notifier = {
  send(message) {
    console.log(message);
  },
};
slackNotifier.setup?.();

/*
Доступ до Елементів Масиву:
Створіть функцію getSecondElement, яка приймає масив arr: string[] | undefined.
Використайте ?. для безпечного доступу до другого елемента (індекс 1) масиву.
*/

function getSecondElement(arr: string[] | undefined): void {
  console.log(arr?.[1]);
}
getSecondElement(["lalala", "tototo"]);
getSecondElement(["lalala"]);

//Частина III: Комбіноване Використання

/*
Необов'язкова Властивість та Об'єднання:
Створіть інтерфейс RequestParams з необов'язковим полем timeout типу number | undefined.
Створіть функцію handleRequest, яка приймає цей об'єкт і використовує оператор нульового злиття (??) для встановлення timeout на 5000, якщо він не був переданий.
*/

interface RequestParams {
  timeout?: number | undefined;
}
function handleRequest(requestParams: RequestParams): void {
  setTimeout(() => {
    console.log(`---> Виконано (Затримка): 5000ms`);
  }, requestParams?.timeout ?? 5000);
}
const requestParams1: RequestParams = {};
const requestParams2: RequestParams = {
  timeout: 5000,
};

handleRequest(requestParams1);
handleRequest(requestParams2);

/*
Деструктуризація з Необов'язковим Значенням:
Створіть об'єкт defaults з обов'язковим полем mode: "fast" | "slow".
Створіть функцію processSettings, яка приймає об'єкт UserPreferences (з Завдання 2) і використовує деструктуризацію з значеннями за замовчуванням для fontSize, якщо воно відсутнє.
*/
interface UserPreferences {
  theme: "light" | "dark";
  fontSize?: number | string; // 👈 Це поле використовується
}

interface Defaults {
  mode: "fast" | "slow";
}
const defaults: Defaults = {
  mode: "fast",
};

function processSettings(settings: UserPreferences): void {
  const { theme, fontSize = "16px" } = settings;

  console.log(`Тема: ${theme}`);
  console.log(`Розмір шрифту: ${fontSize}`);
}

processSettings({ theme: "dark", fontSize: 20 });
processSettings({ theme: "light" });
