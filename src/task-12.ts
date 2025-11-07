/*
Задача 12

Є функція sendDoneStatus:

function sendDoneStatus(callback) {
  callback("done");
}

Завдання:

Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
*/

function sendDoneStatus(callback: (str: string) => void): void {
  callback("done");
}

sendDoneStatus((val) => {
  console.log(val);
});
