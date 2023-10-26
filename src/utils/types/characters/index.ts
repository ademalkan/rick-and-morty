export type TypeFetchCharacters = {
  characters: TypeCharacters;
};
export type TypeFetchCharacter = {
  character: TypeCharactersResult;
};
export type TypeCharacters = {
  info: TypeInfo;
  results: TypeCharactersResult[];
};

export type TypeInfo = {
  prev: any;
  pages: number;
  next: number;
  count: number;
};

export type TypeCharactersResult = {
  type: string;
  status: string;
  image: string;
  gender: string;
  episode: TypeEpisode[];
  name: string;
  id: string;
};

export type TypeEpisode = {
  episode: string;
  name: string;
  id: string;
};
