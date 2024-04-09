import React, { useState, useRef } from 'react';
import { Box, Button, TextField, Typography, Grid, Paper } from '@mui/material';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const loginForm = useRef(null)
    const navigate = useNavigate();
  const [error, setError] = useState(false); // State to handle error visibility
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async (evt) => {
    evt.preventDefault(); // Prevent the default form submit action
    const form = new FormData(loginForm.current); // Create FormData object from form
    console.log(form); // Logging the FormData object (for debugging, might want to remove in production)

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: form // Sending the form data
        });
        const data = await response.json(); // Parsing the JSON response

        if (data.token) {
            // Successful login
            localStorage.setItem("token", data.token); // Storing the token in localStorage
            navigate("/home"); // Navigating to the home route
        } else {
            alert("Usuario o contraseña incorrectos"); // Displaying error message
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Login failed"); // Fallback error message
    }
};


  return (
    <>
      <Header />
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#0053B1' }}>
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Paper elevation={6} style={{ padding: '20px' }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              paddingBottom={2}
            >
              <Typography variant="h5" color="primary">Login</Typography>
              <Box component="form" ref={loginForm} onSubmit={login} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <Typography color="error" align="center">
                    Incorrect username or password
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
