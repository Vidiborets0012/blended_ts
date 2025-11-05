/*
Задача 5

function createUser({name, age}) {
  return {
    name,
    age,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });

Завдання:

Типізуйте функцію повністю: параметри і повернення функції.
*/
interface UserParams {
  name: string;
  age: number;
}

interface NewUser {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({ name, age }: UserParams): NewUser {
  return {
    name,
    age,
    isAdmin: false,
  };
}

const newUser = createUser({ name: "Alice", age: 30 });
console.log("newUser:", newUser);

//Частина I: Основи Об'єктів та Модифікатори

/*
Типізація та readonly:
Створіть інтерфейс Point з полями x: number та y: number.
Створіть об'єкт origin, типізуйте його як Point, і зробіть властивість x тільки для читання (readonly).
*/
interface Point {
  readonly x: number;
  y: number;
}

const origin: Point = {
  x: 10,
  y: 20,
};

console.log("origin:", origin);

/*
Необов'язковість та Union:
Створіть інтерфейс UserPreferences з обов'язковим полем theme: "light" | "dark".
Додайте необов'язкове поле fontSize типу number або string.
*/

interface UserPreferences {
  theme: "light" | "dark";
  fontSize?: number | string;
}

const userPreferences: UserPreferences = {
  theme: "dark",
  fontSize: "24px",
};
console.log("userPreferences:", userPreferences);

/*
Індексовані Властивості:
Створіть інтерфейс Headers для об'єкта, який може мати будь-яку кількість рядкових ключів, 
а значення цих ключів можуть бути лише рядками або числами.
*/

interface Headers {
  [key: string]: string | number;
}

const headers: Headers = {
  header: "header",
  header1: "1",
  header2: 2,
};
console.log("headers:", headers);

//Частина II: Функції, Масиви та Літеральні Типи
/*
Типізація Параметрів та Повернення:
Створіть функцію calculateArea, яка приймає width: number та height: number і повертає їхній добуток.
Додайте типізацію.
*/

function calculateArea(width: number, height: number): number {
  return width * height;
}

const area = calculateArea(10, 10);
console.log("area:", area);

/*
Union Type у Масиві:
Створіть змінну searchResults, яка є масивом, що містить елементи типу string або null.
Заповніть його двома рядками та одним null.
*/

const searchResults: (string | null)[] = ["str1", "str2", null];
console.log("searchResults:", searchResults);

/*
Функція з Літеральним Типом:
Створіть функцію logLevel, яка приймає один аргумент level.
Типізуйте level так, щоб він міг приймати лише три конкретні рядкові значення: "info", "warn", "error".
*/

function logLevel(level: "info" | "warn" | "error"): void {
  console.log(level);
}

logLevel("info");

/*
Масив Об'єктів:
Створіть інтерфейс Book з полями title: string та year: number.
Створіть змінну library як масив типу Book[] та ініціалізуйте її двома елементами.
*/

interface Book {
  title: string;
  year: number;
}

const library: Book[] = [
  { title: "title-1", year: 2025 },
  { title: "title-2", year: 2024 },
];
console.log("library:", library);

//Частина III: Складна Логіка та Звуження Типів

/*
Об'єкт з Метод-функцією:
Створіть інтерфейс Counter з полем value: number та методом increment(by: number): void.
Реалізуйте об'єкт myCounter типу Counter.
*/

interface Counter {
  value: number;
  increment(by: number): void;
}

const myCounter: Counter = {
  value: 10,
  increment(by) {
    console.log(this.value + by);
  },
};

myCounter.increment(2);

/*
Звуження Типів (typeof):
Створіть функцію processValue, яка приймає input: string | number.
Якщо input є числом, виведіть його квадрат.
Якщо input є рядком, виведіть його довжину.
*/

function processValue(input: string | number): void {
  if (typeof input === "number") {
    console.log(input * input);
  } else if (typeof input === "string") {
    console.log(input.length);
  }
}

processValue(2);
processValue("lalala");

/*
Дискримінантне Об'єднання (Advanced Narrowing):
Створіть інтерфейси Circle (kind: "circle", radius: number) та 
Square (kind: "square", side: number).
Створіть об'єднаний тип Shape = Circle | Square.
Створіть функцію getArea для типу Shape та використайте оператор switch на полі kind для обчислення площі. 
(Формули: $Area_{\text{circle}} = \pi \cdot r^2$; $Area_{\text{square}} = s^2$).
*/

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square;

function getArea(obj: Shape): void {
  switch (obj.kind) {
    case "circle":
      let circle = 3.14 * obj.radius * obj.radius;
      console.log(`Площа круга: ${circle}`);
      break;
    case "square":
      let square = obj.side * obj.side;
      console.log(`Площа квадрата: ${square}`);
      break;
    default:
      console.log("Введіть правильні дані");
  }
}

const circle: Shape = { kind: "circle", radius: 3 };
const square: Shape = {
  kind: "square",
  side: 2,
};

getArea(circle);
getArea(square);
