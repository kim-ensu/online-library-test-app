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
  startIndexForLoad: number;
  amountToLoad: number;
}

export interface IOptionsList {
  name: string;
  id: string;
  label: string;
  values: Array<string>;
}
