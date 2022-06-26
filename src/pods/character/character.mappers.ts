import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id.toString(),
  gender: character.gender,
  image: character.image,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  origin: character.origin,
  location: character.location,
  episode: character.episode,
  bestSentences: character.bestSentences,
  created: character.created,
  url: character.url,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  ({
    ...character,
    id: parseInt(character.id),
  } as unknown as apiModel.Character);
