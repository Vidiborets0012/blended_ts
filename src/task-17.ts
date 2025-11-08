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

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();
  return data;
};

fetchUsers().then((users) => console.log(users));
