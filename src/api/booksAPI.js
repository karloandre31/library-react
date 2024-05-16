import axios from "axios";

const booksApi = axios.create({
  baseURL: "https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev/",
  timeout: 2000,
});

export const getBooks = async (author, genre) => {
  const res = await booksApi.get("/");
  let dataRes = res.data.default.library;
  if (author) return dataRes.filter((e) => e.book.author.name.includes(author));
  if (genre) return dataRes.filter((e) => e.book.genre.includes(genre));
  return dataRes;
};
