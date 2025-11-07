/*
Задача 11

1. Створіть власний тип User, який має:

обов'язкове поле username (рядок)
обов'язкове поле age (число)
опціональне поле city (рядок)
2. Створіть літеральний тип Role, який може мати значення "admin", "user", "guest".

3. Оголосіть функцію createUserCard, вона має приймати:

перший параметр — об'єкт типу <User>
другий параметр — роль користувача типу Role
4. Функція повертає рядок у форматі "[username] ([age]) — [role] from [city]”.

Наприклад:

console.log(createUserCard({ username: "Anna", age: 25, city: "Kyiv" }, "admin"));
// Anna (25) — admin from Kyiv

console.log(createUserCard({ username: "Max", age: 30 }, "guest"));
// Max (30) — guest from Unknown

5. Якщо city немає — виводьте "Unknown"
*/

type User = {
  username: string;
  age: number;
  city?: string;
};

type Role = "admin" | "user" | "guest";

function createUserCard(user: User, role: Role): string {
  const city = user.city !== undefined ? user.city : "Unknown";
  // const city = user.city ?? "Unknown";

  return `${user.username} (${user.age}) - ${role} from ${city}`;
}

console.log(
  createUserCard({ username: "Anna", age: 25, city: "Kyiv" }, "admin")
);

console.log(createUserCard({ username: "Max", age: 30 }, "guest"));

//(Об'єкти, Літерали, Опціональність)

//Частина I: Опціональність та Дефолтні Значення

/*
Опціональний Заголовок: 
Створіть інтерфейс Post з обов'язковим body: string та опціональним title?: string. Створіть функцію getPostTitle, яка повертає title або рядок "Untitled Post", якщо title відсутній.
*/
interface Post {
  body: string;
  title?: string;
}

function getPostTitle(obj: Post): string {
  return obj?.title ?? "Untitled Post";
}

const post = {
  body: "lalala",
  title: "title",
};

const post1 = {
  body: "lalala",
};

console.log(getPostTitle(post)); //title
console.log(getPostTitle(post1)); //Untitled Post

/*
Дефолтний Лічильник: 
Створіть інтерфейс Counter з опціональним полем count?: number. Створіть функцію getCount, яка повертає значення count або 0, якщо воно не задане.
*/

interface Counter {
  count?: number;
}

function getCount(obj: Counter): number {
  return obj?.count ?? 0;
}

const count = {
  count: 3,
};

const count1 = {};

console.log(getCount(count)); //3
console.log(getCount(count1)); //0

/*
Опціональні Дати: 
Створіть тип Event з обов'язковим name: string та опціональним endDate?: Date. Напишіть функцію isFinished, яка приймає Event і повертає true, якщо endDate присутня і менша за поточну дату (new Date()), інакше false.
*/

type Event = {
  name: string;
  endDate?: Date;
};

function isFinished(event: Event): boolean {
  return event?.endDate !== undefined && event?.endDate < new Date();
}

//покажи приклад використання

//Частина II: Літеральні Типи та Обробка

/*
Кольорові Типи: 
Створіть літеральний тип TrafficLight з можливими значеннями "red" | "yellow" | "green". Створіть функцію getNextLight, яка приймає поточний колір і повертає наступний колір у циклі (наприклад, green -> yellow).
*/

type TrafficLight = "red" | "yellow" | "green";

function getNextLight(light: TrafficLight | string): string {
  switch (light) {
    case "red":
      return "yellow";
    case "yellow":
      return "green";
    case "green":
      return "red";
    default:
      return "введіть корректний колір";
  }
}

console.log(getNextLight("red")); //yellow
console.log(getNextLight("blue")); //введіть корректний колір

/*
Літеральний Метод: 
Створіть інтерфейс Request з полями url: string та літеральним типом method: "GET" | "POST". Створіть функцію isSafeMethod, яка повертає true, якщо method — "GET".
*/
interface Request {
  url: string;
  method: "GET" | "POST";
}

function isSafeMethod(request: Request): boolean {
  return request.method === "GET";
}

/*
Статус Замовлення: 
Створіть тип OrderStatus як "new" | "processing" | "shipped" | "delivered". Створіть функцію isOrderFinal, яка приймає статус і повертає true, якщо він є "shipped" або "delivered".
*/

type OrderStatus = "new" | "processing" | "shipped" | "delivered";

function isOrderFinal(orderStatus: OrderStatus): boolean {
  return orderStatus === "shipped" || orderStatus === "delivered";
}

//Комбіновані Сценарії

/*
Конфігурація з Дефолтами: 
Створіть інтерфейс AppConfig з обов'язковим port: number та опціональними host?: string і secure?: boolean. Створіть функцію loadConfig, яка приймає частковий об'єкт і повертає повний, використовуючи дефолти: host: "localhost", secure: false.
*/

interface AppConfig {
  port: number;
  host?: string;
  secure?: boolean;
}

type FullConfig = {
  port: number;
  host: string;
  secure: boolean;
};

function loadConfig(partialConfig: AppConfig): FullConfig {
  const defaults = {
    host: "localhost",
    secure: false,
  };

  return {
    ...defaults,
    ...partialConfig,
  } as FullConfig;
}

const finalConfig = loadConfig({ port: 8080, secure: true });
console.log(finalConfig);

/*
Перевірка Літерала в Об'єкті: Створіть інтерфейс UserAction з полем action: "click" | "scroll" | "submit". Створіть функцію handleAction, яка приймає UserAction та використовує оператор switch для обробки кожного літерального типу.
*/
interface UserAction {
  action: "click" | "scroll" | "submit";
}

function handleAction(userAction: UserAction): void {
  switch (userAction.action) {
    case "click":
      console.log(`User action is click ${userAction.action}`);
      break;
    case "scroll":
      console.log(`User action is click ${userAction.action}`);
      break;
    case "submit":
      console.log(`User action is click ${userAction.action}`);
      break;
  }
}

/*
Опціональний Union: 
Створіть інтерфейс Payment з обов'язковим amount: number та опціональним details?: { card: string } | { paypalEmail: string }. Напишіть функцію getPaymentMethod, яка повертає рядок "Card", "PayPal" або "Unknown" (якщо details відсутні).
*/
interface Payment {
  amount: number;
  details?: { card: string } | { paypalEmail: string };
}

function getPaymentMethod({ details }: Payment): string {
  if (details === undefined) {
    return "Unknown";
  }

  if ("card" in details) {
    return "Card";
  }

  return "PayPal";
}

console.log(getPaymentMethod({ amount: 100, details: { card: "1234" } })); // Card
console.log(
  getPaymentMethod({ amount: 200, details: { paypalEmail: "a@b.com" } })
); // PayPal
console.log(getPaymentMethod({ amount: 50 })); //Unknown

/*
Об'єкт з Опціональним Масивом: Створіть інтерфейс Profile з name: string та опціональним tags?: string[]. Створіть функцію getTagsCount, яка повертає кількість тегів або 0, якщо масив tags відсутній.
*/

interface Profile {
  name: string;
  tags?: string[];
}

function getTagsCount({ tags }: Profile): number {
  return tags?.length ?? 0;
}

const fullProfile: Profile = { name: "Alice", tags: ["dev", "ts"] };
const basicProfile: Profile = { name: "Bob" };

console.log("Тегів у Alice:", getTagsCount(fullProfile)); // 2
console.log("Тегів у Bob:", getTagsCount(basicProfile)); // 0
