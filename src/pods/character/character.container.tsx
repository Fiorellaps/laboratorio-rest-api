import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { Character } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { CharacterComponent } from './character.component';
import { createEmptyCharacter } from './character.vm';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] =
    React.useState<Character>(createEmptyCharacter);
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  const handleEditCharacter = async (character: Character) => {
    const success = await api.saveCharacter(character);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save hotel');
    }
  };
  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return (
    <CharacterComponent
      character={character}
      onEditCharacter={handleEditCharacter}
    />
  );
};
