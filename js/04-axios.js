/**
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

axios.defaults.baseURL = "https://668582b2b3f57b06dd4cfd5f.mockapi.io/books";

/**
 * Read (GET)
 */

async function fetchBooks() {
  return (await axios.get("books")).data;
  // аксіос відразу повртає джс обʼєкт з інформацією про запит та даними з серверу, тому не потрібно викликати метод .json() + в бібліотеці аксіос вирішена проблема з 404 помилкою, тому не потрібно робити додаткові перевірки на if(!res.ok).

  // дані від серверу зберігаються у властивості data обʼєкту відповіді

  // return fetch("/books").then((res) => res.json());
}

async function fetchBookById(bookId) {
  return (await axios.get(`books/${bookId}`)).data;

  // return fetch(`/books/${bookId}`).then((res) => res.json());
}

// fetchBooks().then(console.log).catch(console.log);
// fetchBookById(2).then(console.log).catch(console.log);
// fetchBookById(4).then(console.log).catch(console.log);

/**
 * Create (POST)
 */

async function addBook(book) {
  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(book),
  // };

  // return fetch(`${BASE_URL}/books`, options).then((res) => res.json());

  return (await axios.post("books", book)).data;
}

// addBook({
//   title: "Тестова книга з CSS 1111111",
//   author: "Я",
//   genres: ["CSS"],
//   Rating: 9,
// })
//   .then((book) => {
//     console.log("Прийшла відповідь від бекенда можна малювати");
//     console.log(book);
//   })
//   .catch((error) => console.log(error));

// addBook({
//   title: "Тестова книга з HTML",
//   author: "Я",
//   genres: ["HTML"],
//   Rating: 7,
// }).then((book) => {
//   console.log("Прийшла відповідь від бекенда можна малювати");
//   console.log(book);
// });

/**
 * Update (PUT/PATCH)
 */

async function updateBookById(book, bookId) {
  // const options = {
  //   метод: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(update),
  // };

  // return fetch(`/books/${bookId}`, options).then((res) => res.json());

  return (await axios.patch(`books/${bookId}`, book)).data;
}

// updateBookById({ title: "Велика нова книга по NODEJS" }, 1)
//   .then(console.log)
//   .catch(console.log);

// updateBookById({ rating: 1 }, 2).then(console.log).catch(console.log);

// updateBookById({ rating: 4, author: "Манго" }, 3)
//   .then(console.log)
//   .catch(console.log);

/**
 * Delete (DELETE)
 */

function removeBook(bookId) {
  // const options = {
  //   method: "DELETE",
  // };

  // return fetch(`/books/${bookId}`, options).then((res) => res.json());

  return axios.delete(`books/${bookId}`);
}

removeBook(1).then(console.log).catch(console.log);

removeBook(99).then(console.log).catch(console.log);
