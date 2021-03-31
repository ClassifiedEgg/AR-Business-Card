import React, { useState } from 'react';
import { Container, AppBar, TextField, Toolbar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function Index() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            AR Business Card
        </Typography>
        </Toolbar>
      </AppBar>
      <Container
        style={{
          display: 'flex', flexDirection: 'column', justifyContent: "center",
          width: "100%", alignItems: 'center', height: '80%'
        }}>
        <Typography align="center" variant="h3" style={{ paddingBottom: '10px' }}>Login</Typography>
        <TextField
          label="Email"
          type="email"
          onChange={e => setEmail(e.target.value)}
          style={{ paddingBottom: '10px' }}
        />
        <TextField
          label="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          style={{ paddingBottom: '10px' }}
        />
        <Button variant='contained'>Login</Button>
      </Container>
    </>
  );
}