
export type FetchCharacters = {
  characters: Characters
}
export type Characters = {
  info: Info;
  results: CharactersResult[];
};

export type Info = {
  prev: any;
  pages: number;
  next: number;
  count: number;
};

export type CharactersResult = {
  type: string;
  status: string;
  image: string;
  gender: string;
  episode: Episode[];
  name: string;
  id: string;
};

export type Episode = {
  episode: string;
  name: string;
  id: string;
};
