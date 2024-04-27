// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import { Box, Button, TextField, Typography, Grid, Paper } from '@mui/material';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const loginForm = useRef(null)
    const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false); // State to handle error visibility
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const login = async (evt) => {
    evt.preventDefault(); // Prevent the default form submit action
    const formData = {
      usuario: usuario,
      password: password
    };
  
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // Set content type to JSON
        },
        body: JSON.stringify(formData) // Convert data to JSON string
      });
      const data = await response.json(); // Parsing the JSON response
  
      if (data.token) {
        // Successful login
        localStorage.setItem("token", data.token); // Storing the token in localStorage
        navigate("/dashboardAlumnosPythonI"); // Navigating to the dashboard route
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
                  id="usuario"
                  label="Usuario"
                  name="usuario"
                  autoComplete="usuario"
                  autoFocus
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="password"
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
