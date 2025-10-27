/*
Задача 13

Є функція reducer:

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

Завдання:

Типізуйте state як число.
Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
Типізуйте функцію повністю.
*/
