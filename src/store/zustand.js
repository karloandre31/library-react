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
      addBook: (book) => {
        set((state) => ({ books: [...state.books, book] }));
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

export const useEnableStore = create(
  persist(
    (set) => ({
      enable: false,
      setEnable: (bool) => set({ enable: bool }),
    }),
    {
      name: "enable",
      storage: createJSONStorage(() => localStorage),
    }
  ) 
);


