/*
Задача 8

enum Role {
  Admin,
  User,
  Guest
}

Завдання:

1. Створіть функцію getPermissions, яка приймає параметр role типу Role.

2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:

Admin має права: "create", "read", "update", "delete"
User має права: "read", "update"
Guest має лише право: "read"
3. Типізуйте параметр і тип повернення функції getPermissions.

4. Перевірте, що TypeScript не дозволяє передати в getPermissions значення, якого немає в Role.
*/

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function getPermissions(role: Role): string[] {
  let permissions: string[] = [];
  if (role === "ADMIN") {
    permissions = ["create", "read", "update", "delete"];
  } else if (role === "USER") {
    permissions = ["read", "update"];
  } else if (role === "GUEST") {
    permissions = ["read"];
  }
  return permissions;
}
const adminPermission = getPermissions(Role.Admin);
console.log("adminPermission:", adminPermission);

const userPermission = getPermissions(Role.User);
console.log("userPermission:", userPermission);

const guestPermission = getPermissions(Role.Guest);
console.log("guestPermission:", guestPermission);

enum Role1 {
  Admin,
  User,
  Guest,
}

function getPermissions1(role: Role1): string[] {
  switch (role) {
    case Role1.Admin:
      return ["create", "read", "update", "delete"];
    case Role1.User:
      return ["read", "update"];
    case Role1.Guest:
      return ["read"];
    default:
      return [];
  }
}

console.log(getPermissions1(Role1.Admin));
console.log(getPermissions1(Role1.User));
console.log(getPermissions1(Role1.Guest));

//Перелічення (Enums)

//Частина I: Числові та Рядкові Enums

/*
Числовий Enum:
Створіть числовий enum WeekDay з членами Monday, Tuesday, Wednesday.
Оголосіть змінну today типу WeekDay і присвойте їй значення Tuesday.
*/

enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
}

let today: WeekDay = WeekDay.Tuesday;
console.log("today:", today); //1

/*
Числовий Enum з Ініціалізацією:
Створіть числовий enum HttpStatusCode, який починається зі значення 500 (ServerError). Наступні члени: NotFound (має бути 501) та Success (має бути 502).
*/
enum HttpStatusCode {
  ServerError = 500,
  NotFound = 501,
  Success = 502,
}

/*
Рядковий Enum (Рекомендований):
Створіть рядковий enum Color з членами Red, Green, Blue, присвоївши їм відповідні рядкові значення.
Створіть функцію printColor для цього типу.
*/

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

function printColor(color: Color): void {
  console.log("Color:", color);
}

printColor(Color.Red);
printColor(Color.Green);
printColor(Color.Blue);

/*
Зворотне Відображення (Числовий Enum):
Використовуючи WeekDay з Завдання 1, виведіть у консоль назву дня, знаючи його числовий індекс (наприклад, 1).
*/

console.log(WeekDay[1]); //Tuesday

//Частина II: Enums у Функціях та Об'єктах

/*
Enum у Типі Об'єкта:
Використовуючи Color з Завдання 3, створіть інтерфейс Shape з полями name: string та fillColor: Color.
Створіть об'єкт square цього типу.
*/

interface Shape {
  name: string;
  fillcolor: Color;
}

const square: Shape = {
  name: "square",
  fillcolor: Color.Red,
};
console.log("square:", square);

/*
Enum та if/else:

Створіть функцію getDirectionVector, яка приймає direction типу Direction (з теорії) і повертає рядок ("X-axis" або "Y-axis") залежно від того, чи це Left/Right чи Up/Down.
*/

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

function getDirectionVector(direction: Direction): string {
  let msg = "";
  if (direction === Direction.Left || direction === Direction.Right) {
    msg = "X-axis";
  } else if (direction === Direction.Up || direction === Direction.Down) {
    msg = "Y-axis";
  }

  return msg;
}

console.log(getDirectionVector(Direction.Up)); //Y-axis

/*
Enum та switch:

Створіть функцію handleStatus, яка приймає status типу HttpStatusCode (з Завдання 2).
Використайте оператор switch для виведення повідомлення: "Client Error" для NotFound та "OK" для Success.
*/

// enum HttpStatusCode {
//   ServerError = 500,
//   NotFound = 501,
//   Success = 502,
// }

function handleStatus(status: HttpStatusCode): string {
  switch (status) {
    case HttpStatusCode.ServerError:
      return "Server Error";
    case HttpStatusCode.NotFound:
      return "Client Error";
    case HttpStatusCode.Success:
      return "OK";
  }
}

console.log(handleStatus(HttpStatusCode.NotFound)); //Client Error
console.log(handleStatus(HttpStatusCode.Success)); //OK

//Частина III: Складне Використання

/*
Створіть функцію checkColor, яка приймає color як рядок.

Типізуйте повернення функції так, щоб вона повертала true, якщо рядок відповідає одному зі значень Color (з Завдання 3), інакше false.
*/

function checkColor(color: Color | string): boolean {
  switch (color) {
    case Color.Red:
      return true;
    case Color.Green:
      return true;
    case Color.Blue:
      return true;
    default:
      return false;
  }
}

console.log(checkColor(Color.Red)); //true
console.log(checkColor("color")); //false

/*
Опціональність (Optionality) з Enum:

Створіть інтерфейс Settings з обов'язковим полем id: number.
Додайте необов'язкове поле logLevel типу Color (з Завдання 3).
*/

interface Settings {
  id: number;
  logLevel?: Color;
}

/*
Використання const enum:

Створіть const enum (константне перелічення) UserRole з членами Admin, Editor.
Поясніть, чим const enum відрізняється від звичайного enum.
*/

const enum UserRole {
  Admin,
  Editor,
}
//для типобезпеки
