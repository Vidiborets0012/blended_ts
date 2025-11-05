/*
Задача 4

Опис: Є масив, який містить розміри екрана у пікселях.

const dimensions = [1920, 1080];

Завдання:

Додайте до змінної dimensions явну типізацію.
Переконайтеся, що TypeScript не дозволяє додавати до масиву значення інших типів (наприклад, рядки).
*/

const dimensions: number[] = [1920, 1080];
// dimensions.push('1234')

const dimensions1: Array<number> = [1920, 1080];

console.log("dimensions:", dimensions);
console.log("dimensions1:", dimensions1);
