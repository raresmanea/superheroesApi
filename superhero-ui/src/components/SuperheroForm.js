import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { addSuperhero } from '../api';

const SuperheroForm = ({ onSuperheroAdded }) => {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !superpower || humilityScore < 1 || humilityScore > 10) {
      alert('Please enter valid superhero details.');
      return;
    }
    
    const newHero = { name, superpower, humilityScore: Number(humilityScore) };
    await addSuperhero(newHero);
    onSuperheroAdded();
    setName('');
    setSuperpower('');
    setHumilityScore('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Superpower" value={superpower} onChange={(e) => setSuperpower(e.target.value)} required />
      <TextField label="Humility Score (1-10)" type="number" value={humilityScore} onChange={(e) => setHumilityScore(e.target.value)} required />
      <Button type="submit" variant="contained">Add Hero</Button>
    </Box>
  );
};

export default SuperheroForm;