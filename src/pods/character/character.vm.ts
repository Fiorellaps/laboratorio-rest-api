export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  type: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  bestSentences: string[];
  url: string;
  created: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
  origin: { name: '', url: '' },
  location: { name: '', url: '' },
  episode: [],
  created: '',
  bestSentences: [],
  url: '',
});
