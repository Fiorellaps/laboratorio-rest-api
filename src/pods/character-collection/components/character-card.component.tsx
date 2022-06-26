import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './characer-card.styles';

interface Props {
  character: CharacterEntityVm;
  onView: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onView } = props;

  return (
    <Card>
      <CardHeader title={character.name} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.picture}
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
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onView(character.id)}>
          <RemoveRedEyeIcon color="action" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
