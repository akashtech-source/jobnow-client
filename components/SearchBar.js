import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function FreeSolo() {
  return (
    <div style={{ width: 300, marginLeft: 500, marginTop: 20 }}>
      
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Jobs"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}


const top100Films = [
  { title: 'Brand Ambassador', year: 1994 },
  { title: 'Customer Happiness Agent', year: 1972 },
  { title: 'Marketing Executive', year: 1974 },
  { title: 'Content Lead', year: 2008 },
  { title: 'Growth Oparations Associate', year: 1957 },
  { title: "Culture and People Coordinator", year: 1993 },
  
]