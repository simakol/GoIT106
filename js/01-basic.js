/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

const list = document.querySelector(".todo-list");

// створення розмітки однієї лішки
const createLiMarkup = ({ completed, title }) =>
  `<li class=${completed ? "done" : "in-progress"}>${title}</li>`;

// створення розмітки усього списку
const createListMarkup = (liArr) => liArr.map(createLiMarkup).join("");

// fetch - асинхронна операція, тому завжди повертається проміс

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    //res - відповідь від серверу (обʼєкт типу Response)
    console.log(res);

    // додаткова перевірка для помилки 404 (для того щоб ми попали в блок catch)
    if (!res.ok) {
      throw new Error(res.status); // викид помилки - моментально перерхдимо в блок кетч
    }

    // json() - це метод який викликається на обʼєкті відповіді від серверу та парсить відповідь з джсону в звичайний джс обʼєкт. Повертає проміс
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const listMarkup = createListMarkup(data);
    list.insertAdjacentHTML("beforeend", listMarkup);
  })
  .catch((err) => console.error("Fetch Error:", err));

/**
 * Всередині функції запит, зовні обробка
 */
const fetchTodos = () => {};

// fetchTodos().then().catch()
