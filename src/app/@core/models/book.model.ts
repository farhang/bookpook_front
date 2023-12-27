export interface GetBookResponse {
  fiction: Book[],
  libgen: Book[]
}

export interface Book {
  Title: string;
  Coverurl: string;
  Author: string;
  Year: string;
  Extension?: string;
  MD5?: string;
  Language?: string;
  PagesInFile?: number;
  Filesize?: number;
}
