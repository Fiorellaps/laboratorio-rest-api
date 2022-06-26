import React from 'react';
import { Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { Character } from './character.vm';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';

interface Props {
  character: Character;
  onEditCharacter: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onEditCharacter } = props;
  const history = useHistory();
  const [characterEdited, setCharacterEdited] =
    React.useState<Character>(character);
  const [newSentence, setNewSentence] = React.useState<string>('');

  React.useEffect(() => {
    setCharacterEdited(character);
  }, [character]);

  const onInputChangeEditSentence = (e, index) => {
    const bestSentencesArray: string[] = characterEdited.bestSentences;
    bestSentencesArray[index] = e.target.value;
    setCharacterEdited({
      ...characterEdited,
      bestSentences: bestSentencesArray,
    });
  };

  const onInputChangeAddSentence = (e) => {
    const bestSentencesArray: string[] = characterEdited.bestSentences;
    bestSentencesArray.push(newSentence);
    setCharacterEdited({
      ...characterEdited,
      bestSentences: bestSentencesArray,
    });
  };

  return (
    <Card>
      <Button
        variant="contained"
        onClick={(e) => history.push(linkRoutes.root)}
      >
        Go Back
      </Button>
      <CardHeader title={character.name} />
      <CardContent>
        <div>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />

          <Typography variant="subtitle1" gutterBottom>
            Especie: {character.species}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Género: {character.gender}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Estado: {character.status}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Type: {character.type}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Best Sentences:
            <div>
              <ul>
                {characterEdited.bestSentences.map((sentence, index) => (
                  <li>
                    <input
                      onChange={(e) => onInputChangeEditSentence(e, index)}
                      name="sentences"
                      type="text"
                      value={sentence}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label>New sentences</label>
              <input
                onChange={(e) => setNewSentence(e.target.value)}
                id="add-sentence"
                name="sentences"
                value={newSentence}
              />
              <button onClick={(e) => onInputChangeAddSentence(e)}>
                Add sentence
              </button>
            </div>
            <button onClick={(e) => onEditCharacter(characterEdited)}>
              Save all sentences
            </button>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Origin: {character.origin.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Location: {character.location.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Episodes:
            <ul>
              {character.episode.map((e) => (
                <li>{e}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Created: {character.created}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
