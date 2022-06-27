export interface IBooksData {
  items: Array<IBook>;
}

export interface IBooksState {
  booksArray: Array<IBook>;
}

interface IBook {
  id: string;
  etag: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    categories: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
}

export interface ISearchFields {
  searchField: string;
  category: string;
  sortingBy: string;
  booksLoaded: number;
}

export interface IOptionsList {
  id: string;
  label: string;
  values: Array<string>;
}
