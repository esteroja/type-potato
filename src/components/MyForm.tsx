import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Stack component="form"
            sx={{ 
                bgcolor: '#cfe8fc',
                textAlign: 'center',
                justifyContent: "center",
                alignItems: "center"
            }} spacing={2} 

        >
        
            <TextField id="outlined-basic" label="Eesnimi" defaultValue="Ester" variant="outlined"/>
            <TextField id="outlined-basic" label="Perenimi" defaultValue="Ojala"/>

            <Button variant="contained">Logi sisse</Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
}