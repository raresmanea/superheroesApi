import { useState } from 'react';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';
import { Container, Typography } from '@mui/material';

function App() {
  const [refresh, setRefresh] = useState(0);

  //CSS Needs to be added here too :) . And the refresh is rudimentary, but for this kind of load it works.
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 3 }}>Humble Superhero API</Typography>
      <SuperheroForm onSuperheroAdded={() => setRefresh((prev) => prev + 1)} />
      <SuperheroList refresh={refresh} />
    </Container>
  );
}

export default App;