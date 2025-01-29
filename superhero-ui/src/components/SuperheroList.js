import { useEffect, useState } from 'react';
import { fetchSuperheroes } from '../api';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const SuperheroList = ({ refresh }) => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetchSuperheroes().then(setSuperheroes);
  }, [refresh]);

  return (
    <>
      <Typography variant="h6">Superhero List</Typography>
      <List>
        {superheroes.map((hero) => (
          <ListItem key={hero.id}>
            <ListItemText primary={`${hero.name} - ${hero.superpower} (Humility: ${hero.humilityScore})`} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SuperheroList;