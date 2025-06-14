import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../utils/userLogSlice';


const defaultTheme = createTheme();

export default function DistributorLogin() {
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const [distributorLoginData, setDistributorLoginData]=React.useState({
    email:'',
    password:'',
   });

  function handleChange(e) {
    const { name, value } = e.target;
    setDistributorLoginData({
      ...distributorLoginData,
      [name]: value,
    })
  }
 
  const handleSubmit =async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(process.env.API_URI+'/api/distributor/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(distributorLoginData),
        credentials: 'include',
      });
      const apiresponse = await response.json();

      if (!response.ok) {
        toast.error(apiresponse.message);
        throw new Error('Network response was not ok');

      }
      toast.success(apiresponse.message);
      dispatch(userLogout('logout'));
      navigate('/distributor/restaurant');

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in as distributor
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={distributorLoginData.email}
              onChange={handleChange}
              autoComplete="email"
              sx={{ mt: 3, mb: 2 }}
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={distributorLoginData.password}
              onChange={handleChange}
              autoComplete="new-password"
              sx={{ mt: 3}}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/distributor/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}