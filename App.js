import React, { useState } from 'react';
import {TextField,Button} from '@mui/material'
import { Autocomplete } from '@mui/material';

const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Orange', 'Pome'];

function App() {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello. ${name}! Your favorite fruit is ${fruit}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your name and favourite fruit:</h2>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        data-testid="name"
      /><br></br>
      <Autocomplete
        options={fruitOptions}
        value={fruit}
        onChange={(event, value) => setFruit(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a fruit"
            data-testid="autocomplete"
          />
        )}
      /><br></br>
      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
    </form>
  );
}

export default App;