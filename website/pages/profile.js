import React, { useState } from 'react';
import { Input, AppBar, TextField, Toolbar, Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import QRCode from 'qrcode.react';

export default function Register() {

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    location: '',
    age: '',
    image: '',
  });

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            AR Business Card
        </Typography>
        </Toolbar>
      </AppBar>

      <Grid container
        style={{
          display: 'flex', flexDirection: 'column', justifyContent: "center",
          width: "100%", alignItems: 'center', paddingTop: '20px'
        }}>
        <Grid>
          <Typography align="center" variant="h3" style={{ paddingBottom: '10px' }}>Profile</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                type="text"
                onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
                variant="outlined"
                style={{ paddingBottom: '10px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                type="text"
                onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
                style={{ paddingBottom: '10px' }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="text"
                onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
                style={{ paddingBottom: '10px' }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Website"
                type="text"
                onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
                style={{ paddingBottom: '10px' }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Location"
                type="text"
                onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
                style={{ paddingBottom: '10px' }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Age"
                type="number"
                onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
                style={{ paddingBottom: '10px' }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ padding: '15px' }}>
          <Button
            variant="contained"
            component="label"
          >
            Select Image
              <input
              type="file"
              hidden
              name="image"
              onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
            />
          </Button>
          <Typography>Selected Image: {data.image}</Typography>
        </Grid>
        <Button variant='contained'>Save Details</Button>
      </Grid>
    </>
  );
}