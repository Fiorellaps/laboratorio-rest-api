import { Character } from './character.api-model';
import Axios from 'axios';

//const urlCharacterCollection = 'https://rickandmortyapi.com/api/character/';
const urlCharacterCollection = '/api/character/';

export const getCharacter = async (id: string | any): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${urlCharacterCollection}${id}`);
  // console.log('data', data);

  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  console.log('edi', character);
  await Axios.put<Character>(
    `${urlCharacterCollection}${character.id}`,
    character
  );
  return true;
};
