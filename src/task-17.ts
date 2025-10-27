/*
Задача 17

Функція fetchUsers повертає проміс, який через fetch отримує список користувачів з API.

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

fetchUsers().then((users) => console.log(users));

Завдання:

Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
Типізуйте функцію fetchUsers.
*/
