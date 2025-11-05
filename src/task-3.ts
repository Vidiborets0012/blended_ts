/*
Задача 3

Опис: Є об’єкт користувача:

const user= { id: "1", name: "Charlie", age: 25, active: true };

Завдання:

Типізуйте user.
Зробіть властивість id тільки для читання.
*/

interface User {
  readonly id: string;
  name: string;
  age: number;
  active: boolean;
}

const user: User = { id: "1", name: "Charlie", age: 25, active: true };
console.log("user:", user);

//Типізація об'єктів

/*
Створіть функцію updateUsername, яка приймає об'єкт користувача (User з попереднього завдання) та нове ім'я (newName: string).
Функція повинна повернути новий об'єкт користувача з оновленим ім'ям, але не змінювати оригінальний об'єкт (функція повинна бути чистою).
Додаткова вимога: Зробіть властивість age в інтерфейсі User необов'язковою (?).
*/

interface User1 {
  readonly id: string;
  name: string;
  age?: number;
  active: boolean;
}

const user1: User1 = { id: "1", name: "Charlie", age: 25, active: true };

function updateUsername(user: User1, newName: string): User1 {
  return { ...user, name: newName };
}

const updatedUser = updateUsername(user1, "Dave_Modified");

console.log("Оригінальний (незмінний):", user1);
console.log("Оновлений:", updatedUser);
