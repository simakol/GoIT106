/**
 * Синтаксис async/await
 * try...catch
 */

/*
 - async/await - фактично це імітація синхронності асинхронного коду (послідовність, як .then)
 - async - оператор який оголошує асинхронну фукнцію. В асинхронних функція можна використовувати оператор await (І ТІЛЬКИ В НИХ). Будь-яка асинхронна фукнція повертає Promise (завжди)!!!
===
async function foo(){
  return 5;
}

foo().then(console.log)
===

- await - оператор який можна використовувати тільки в асинхронних фукнція. Цей оператор пишеться перед асинхроними операціями (промісами) і заморожує виконання фукнції до ти пір поки проміс не виконається (не перейде в стан Fullfilled або Rejected). І як тільки проміс виконається оператор await буде повертати відразу дані промісу. Але якщо статус промісу реджектед - то у нас примусово викидується помилка, яку треба обробити

*/
//* with async

// робимо асинхронну фукнцію для того щоб синтаксично писати "синхронних код"
const fetchTodos = async () => {
  // заморозили функцію до тих пір поки сервер на віддав нам дані, після чого ми ці дані записали в константу response
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  // перевіряємо статус відповіді від серверу, якщо він не окей (наприклад, 404), то примусово викидуємо помилку
  if (!response.ok) {
    throw new Error(response.status);
  }

  // заморожуємо виконання фукнції поки метод json не поверне валідні дані з серверу, після чого зберегіаємо ці дані в константу data
  const data = await response.json();

  return data;
};

//? var 1
// fetchTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//? var 2
async function start() {
  try {
    console.log("Посилаємо запит на тудушки!");

    const todos = await fetchTodos();
    console.log(todos);

    console.log("Отримали всі результати без помилок!");
  } catch (err) {
    console.log("Отримали помилку під час запиту:", err);
  }
}

start();

//! without async

// const fetchTodos = () => {
//   return fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return;
//     });
// };

// fetchTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
