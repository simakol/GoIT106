/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */

function getPicturesByQuery(query) {
  const API_KEY = "33291155-7539ac0bf1c0d1be65bb6c22f";

  return fetch(`https://pixabay.com/api?key=${API_KEY}&q=${query}`).then(
    (res) => {
      //res - відповідь від серверу (обʼєкт типу Response)
      console.log(res);

      // додаткова перевірка для помилки 404 (для того щоб ми попали в блок catch)
      if (!res.ok) {
        throw new Error(res.status); // викид помилки - моментально перерхдимо в блок кетч
      }

      // json() - це метод який викликається на обʼєкті відповіді від серверу та парсить відповідь з джсону в звичайний джс обʼєкт. Повертає проміс
      return res.json();
    }
  );
}

getPicturesByQuery("blue+car")
  .then((data) => console.log(data))
  .catch((err) => console.error("Fetch Error: ", err));
