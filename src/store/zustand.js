import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

//filtrar por nombre de autor
export const useFilterStore = create((set) => ({
  author: "",
  setName: (author) => set({ author }),
}));

//filtrar por generos
export const useFilterGenreStore = create((set) => ({
  genre: "",
  setGenre: (genre) => set({ genre }),
}));

//agregar y eliminar de la lista de libros
export const useReadingBookStore = create(
  persist(
    (set) => ({
      books: [],
      addBook: (newBook) => {
        set((state) => {
          // Comprobamos si el libro ya está en el array
          const bookExists = state.books.some(
            (book) => book.title === newBook.title
          );
          if (!bookExists) {
            return { books: [...state.books, newBook] };
          } else {
            return state;
          }
        });
      },
      deleteBook: (bookTitle) => {
        set((state) => ({
          books: state.books.filter((book) => book.title !== bookTitle),
        }));
      },
    }),
    {
      name: "readingBook",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
