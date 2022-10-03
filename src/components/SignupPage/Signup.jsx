import React, { useState } from 'react';
import { Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import BastaLogo from '../../assets/bastalogo.jpg'
import styles from './signup.css'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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
import Password from '../../assets/password.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import randomWords from 'random-words';
import Paper from '@mui/material/Paper';
import CachedIcon from '@mui/icons-material/Cached';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { width } from '@mui/system';



export default function SignIn() {
    const [selectedBtn, setSelectedBtn] = useState('');
    const [values, setValues] = useState('');
    
    const navigation = useNavigate();
    
    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };
    
    const [formData , setFormData] = useState({firstName :'' , lastName : '' , email :'', password :'', phone_no:''});
    //   console.log(formData.firstName)
    let handleSelected = (val) => {
        setSelectedBtn(val)
        // setChangeBackgroundColor({...changeBackgroundColor ,color : 'yellow'})
        // changeBackgroundColor(...backgroundColor , selectedBtn = 'yellow')

    }
    
    const handleSubmit = () => {
        navigation('/profile', {state:{
            firstName : formData.firstName,
            lastName : formData.lastName,
            email:formData.email,
            password:formData.password,
            phone_no:formData.phone_no,
            selectedVal : selectedBtn

        }})

        return formData
        
    };


    const [changeBackgroundColor, setChangeBackgroundColor] = useState({ backgroundColor: '#2e1cc4' })


    let buttonList1 = [
        {
            title: "teacher",
            backgroundColor: selectedBtn == '' ? '#2e1cc4' : ' #87C1FF',
            color: 'black'

        },
        {
            title: "student",
            backgroundColor: selectedBtn == '' ? '#2e1cc4' : ' #87C1FF',
            color: 'black'
        },
        {
            title: "counsellor",
            backgroundColor: selectedBtn == '' ? '#2e1cc4' : ' #87C1FF',
            color: 'black'
        },
        {
            title: "principal",
            backgroundColor: selectedBtn == '' ? '#2e1cc4' : ' #87C1FF',
            color: 'black'
        },
        {
            title: "parent",
            backgroundColor: selectedBtn == '' ? '#2e1cc4' : ' #87C1FF',
            color: 'black'
        }
    ]



    const buttonList = [
        "Teacher",
        "Student",
        "Counsellor",
        "Principal",
        "Parent"
    ]


    return (
        <div className="signinContainer">
            <div className="signinWrapper">
                <div className="SignInContent">
                    {/* <div className="logo"> */}
                        <img src={BastaLogo} width={132} height={132} style={{ borderRadius: 10 , display:'flex' , alignContent:'center' , paddingLeft:'40%'}} />
                    {/* </div> */}

                    <div className="heading">
                        <h3 style={{color:'#2e1cc4'}}>Welcome to Basta,  Please Select First, who are you & Register !
                        </h3>
                    </div>
                    <div className="buttons">
                        {buttonList1.map(item => {
                            return (
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" value={item.title} onClick={(e) => handleSelected(e.target.value)}
                                        style={{ margin: 21, backgroundColor: selectedBtn == '' ? changeBackgroundColor.backgroundColor : (selectedBtn === item.title ? item.backgroundColor : '#2e1cc4') }}
                                    >{item.title}</Button>
                                </Stack>

                            )
                        })}
                    </div>

                    <div className="formContent">
                        <Box component="form"  noValidate sx={{ mt: 1 }} >
                            <FormControl sx={{ m: 1, width: '55ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
                                <OutlinedInput
                                    margin="normal"
                                    style={{ backgroundColor: '#efedff', width: '450px' }}
                                    value={formData.firstName}
                                    onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
                                    required
                                    id="first_name"
                                    name="first_name"
                                    placeholder='First Name'
                                    autoFocus
                                />

                                <OutlinedInput
                                    margin="normal"
                                    style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
                                    value={formData.lastName}
                                    onChange={(e) =>setFormData({...formData , lastName: e.target.value})}
                                    required
                                    id="last_name"
                                    name="last_name"
                                    placeholder='Last Name'
                                // autoFocus
                                />

                            </FormControl>

                            <FormControl sx={{ m: 1, width: '55ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
                                <OutlinedInput
                                    margin="normal"
                                    style={{ backgroundColor: '#efedff', width: '850px' }}
                                    onChange={(e) =>setFormData({...formData , email: e.target.value})}
                                    required
                                    id="email"
                                    value={formData.email}

                                    name="email"
                                    placeholder='Enter your email address'
                                // autoFocus
                                />



                            </FormControl>

                            <FormControl sx={{ m: 1, width: '55ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
                                <OutlinedInput
                                    margin="normal"
                                    style={{ backgroundColor: '#efedff', width: '850px' }}
                                    required
                                    id="phone_no"
                                    name="phone_no"
                                    value={formData.phone_no}
                                    onChange={(e) =>setFormData({...formData , phone_no: e.target.value})}

                                    placeholder='Phone Number'
                                // autoFocus
                                />



                            </FormControl>





                            <FormControl sx={{ m: 1, width: '55ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
                                <OutlinedInput
                                    margin="normal"
                                    style={{ backgroundColor: '#efedff', width: '450px' }}
                                    required
                                    id="password"
                                    name="password"
                                    type='password'
                                    value={formData.password}
                                    onChange={(e) =>setFormData({...formData , password: e.target.value})}
                                    placeholder='Password'
                                // autoFocus
                                />

                                <OutlinedInput
                                    margin="normal"
                                    style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
                                    required
                                    type="password"
                                    id="confirm_password"
                                    name="confirm_password"
                                    placeholder='Confirm Password'
                                // autoFocus
                                />

                            </FormControl>
                            
                            <FormControl sx={{ m: 1, width: '55ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined">
                                {/* <Link to="/profile"  firstName = {formData.firstName}> */}
                                {/* <Link href={{ pathname :`/profile/${selectedBtn}`, query:{firstName :formData.firstName , lastName:formData.lastName , email:formData.email , password:formData.password , phone_no:formData.phone_no ,selectedVal : selectedBtn}} }> */}
                                    
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        style={{ backgroundColor: '#2e1cc4' }}
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={()=>{handleSubmit()}}
                                    >
                                        Sign up
                                    </Button>
                                
                                
                                {/* </Link> */}

                            </FormControl>

                        </Box>
                    </div>

                    <div className="bottomContent">

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

                    </div>







                </div>

            </div>

        </div>
    )
}
