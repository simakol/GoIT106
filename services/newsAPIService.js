const BASE_URL = "http://newsapi.org";
const ENDPOINT = "v2/everything";
const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

axios.defaults.baseURL = BASE_URL;

function getNews({ q = "", page = 1, pageSize = 5 } = {}) {
  return axios
    .get(ENDPOINT, {
      params: {
        apiKey: API_KEY,
        q,
        page,
        pageSize,
        language: "en",
      },
    })
    .then(({ data }) => data);
}

export { getNews };
