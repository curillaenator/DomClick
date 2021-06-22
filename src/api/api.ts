import axios from "axios";

const base = axios.create({
  baseURL: "https://opentdb.com/api.php?amount=10",
});

export const api = {
  getQuestions: () =>
    base
      .get("")
      .then((res) => res.data.results)
      .catch((e) => alert(`Ошибка ${e.name}: ${e.message}`)),
};
