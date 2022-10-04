import React, { useState, useEffect } from 'react';
import Password from '../../assets/password.png';
import BannerImg from '../../assets/bannerImg.webp';
import BastaLogo from '../../assets/bastalogo.jpg'
import '../Login/login.css'
import Select from 'react-select';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Mail from '../../assets/mail.png';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import randomWords from 'random-words';
import Paper from '@mui/material/Paper';
import CachedIcon from '@mui/icons-material/Cached';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { RadioGroup } from '@mui/material';

import Radio from '@mui/material/Radio';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Login = () => {
  const [captcha, setCaptcha] = useState('Click refresh to generate captcha');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [check, setCheck] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [values, setValues] = useState({
    showPassword: false,
  });
  const [open, setOpen] = React.useState(false);

  let firstNo = Math.floor(Math.random(3, 10) * 10)
  let lastNo = Math.floor(Math.random(3, 10) * 127)


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  const generateCaptcha = () => {
    setCaptcha(`${firstNo}` + `${randomWords()}` + `${lastNo}`);
  }


  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="mainScreen">
        <div className="left">
          <h3 className="leftHeading">
            You have to believe in yourself when no one else does..
          </h3>
          <img src={BannerImg}  className='banner'  />
        </div>
        <div className="right">
          <div className="content">
            <img src={BastaLogo} width={132} height={132} style={{ borderRadius: 10 , marginLeft:'40%' }} alt="bastalogo"/>
          <Container component="main" maxWidth="xs" style={{marginBottom:'150px'}}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                <FormControl fullWidth sx={{ m: 1, width: '45ch' }} variant="outlined">
                  <OutlinedInput
                    margin="normal"
                    style={{ backgroundColor: '#efedff' }}
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    startAdornment={<InputAdornment position="start">{<MailIcon />}</InputAdornment>}
                  />

                </FormControl>

                <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                  <OutlinedInput
                    width='450px'
                    margin="normal"
                    style={{ backgroundColor: '#efedff' }}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    required
                    fullWidth
                    id="password"
                    name="password"
                    // autoComplete="email"
                    autoFocus
                    startAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                          edge="start"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>


                {/* <Grid> */}
                <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'row' }} columns={{ sm: 2 }}>
                  <Grid item xs>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                      sx={{ mt: 3, mr: 4, ml: 2 }}
                    />
                  </Grid>
                  <Grid item sx={{ mt: 4, mr: 2 }} onClick={handleClickOpen} style={{ cursor: 'pointer' , textDecoration:'none'}}>
                    Forget Password
                  </Grid>
                </Grid>



                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                  >Forgot your Password</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      If you can't log into your Basta because you forgot your password, you can reset it now.
                      Please enter your username or email address.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <RadioGroup
                    row
                    defaultValue="message"
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <FormControlLabel value="message" control={<Radio />} label="via Message" />
                    <FormControlLabel value="end" control={<Radio />} label="via Email" />

                  </RadioGroup>
                  <DialogActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                  </DialogActions>
                </Dialog>


                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Item style={{ color: '#2e1cc4' }}>{captcha}</Item>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} sx={{ mt: 1 }} style={{ height: '25px' }}>
                    <Grid item xs={6}>
                      <Item style={{ height: '35px' }}>
                        <input style={{ height: '25px', width: '165px', color: check == captcha ? 'green' : 'red', border: 'none' }} value={check} onChange={(e) => setCheck(e.target.value)} />
                      </Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item style={{ height: '35px' }}>
                        {<VolumeUpIcon />}
                      </Item>
                    </Grid>

                    <Grid item xs={2} >
                      <Item onClick={() => generateCaptcha()} style={{ height: '35px' }}>{<CachedIcon />}</Item>
                    </Grid>
                    <Grid item xs={2}>
                      <Item style={{ height: '35px' }}><img src='/circle.png' width={15} height={15} /></Item>
                    </Grid>

                  </Grid>
                </Box>



                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: '#2e1cc4' }}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container style={{display:'flex', alignItems:'center' , justifyContent:'center' , textDecoration:'none'}}>
                    <Link to="/signup"  variant="body2">
                  <Grid item >
                      {"Don't have an account? Register Now"}
                  </Grid>
                    </Link>
                </Grid>
              </Box>
            </Box>

            <Box>
              <Grid container spacing={3} sx={{ mt: 3, ml: -2 }}>
                <Grid item style={{ color: '#2e1cc4', cursor: 'pointer' }} >
                  Terms of use
                </Grid>

                <Grid item style={{ color: '#2e1cc4', cursor: 'pointer' }} sx={{ ml: 3 }}>
                  Privacy Policy
                </Grid>

                <Grid item style={{ color: '#2e1cc4', cursor: 'pointer' }} sx={{ ml: 3 }}>
                  Contact us
                </Grid>

              </Grid>
            </Box>
            <Divider style={{ marginTop: '15px' }} />
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


