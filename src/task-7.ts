/*
Задача 7

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

Завдання:

Створіть інтерфейс User, який описує структуру об’єкта з іменем і віком.
Типізуйте змінну users.
Додайте ще одного користувача до масиву, дотримуючись структури.
Переконайтеся, що TypeScript не дозволяє додати об’єкт без обов’язкових полів (name, age).
*/
interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Polly", age: 33 },
];

users.push({ name: "SomeName", age: 22 });
console.log("users:", users);

// users.push({ name: "name" });
