import React, { useState } from 'react';
import BastaLogo from '../../../assets/bastalogo.jpg';
import Subjects from '../../../assets/sports.png'
import Sports from '../../../assets/subjects.png'
import Activities from '../../../assets/activities.png';
import { useLocation } from 'react-router-dom';

import Talents from '../../../assets/talents.png'

import Divider from '@mui/material/Divider';
// import Navbar from './Navbar';
import './studentssub.css';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
// import Mail from '../../public/mail.png';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
// import Password from '../../public/password.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import randomWords from 'random-words';
import Paper from '@mui/material/Paper';
import CachedIcon from '@mui/icons-material/Cached';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Navbar from '../../../components/common/Navbar';
import MiniDrawer from '../../../components/common/Sidebar';

// import ParentSub from '../../pages/profile/parent/parentsub';
// import PyschologistSub from '../../pages/profile/counsellor/counsellorsub';
// import TeacherSub from '../../pages/profile/teacher/teachersub';

export default function StudentSub() {
    let location = useLocation();

  const [showExam , setShowExam] = useState(true)
//   const router = useRouter();
//   const data = router.query
const { firstName, lastName, email, phone_no, selectedVal } = location.state;

  return (
    <>
      {/* <Navbar data={data} /> */}
      <MiniDrawer showExam={showExam} firstName={firstName}/>
      <div className="profileContainer">
        <div className="profileWrapper">
          <div className="profileContent">
            <div className="left">
              <div className="leftContainer">
                <div className="logo" >
                  <img src={BastaLogo} width={122} height={122} style={{ borderRadius: 80}} />
                </div>
                  <div className="name">
                    <h2>{firstName} {lastName}</h2>
                  </div>
                <div className="leftBottomContainer">
                  
                  <h5>Email Address</h5>
                  <h5>{email}</h5>
                  <br />
                  <h5>Phone Number</h5>
                  <h5>{phone_no}</h5>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="formContent">
                <Box component="form" noValidate sx={{ mt: 1 }} >
                  <Typography style={{ padding: '10px', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    Personal Details
                  </Typography>
                  <div className="formValues">
                    <div className="formItems">
                      <img src={Subjects} width="24px" height="24px" />
                      <Typography style={{ paddingLeft: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Math , History
                      </Typography>
                    </div>
                  </div>
                  <div className="formValues">
                    <div className="formItems">
                      <img src={Sports} width="24px" height="24px" />
                      <Typography style={{ paddingLeft: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Basketball , cricket
                      </Typography>
                    </div>
                  </div>


                  <div className="formValues">
                    <div className="formItems">
                      <img src={Activities} width="24px" height="24px" />
                      <Typography style={{ paddingLeft: '10px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Reading Books , Listening to music
                      </Typography>
                    </div>
                  </div>

                  <div className="keysAndSchoolInfo">
                    <Typography style={{ paddingLeft: '10px', fontWeight: 'bold', fontSize: '1.5rem' }}>
                      Kendriya Vidyalaya, Vasant Kunj
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '20px' }}>

                      <OutlinedInput
                        margin="normal"
                        style={{ backgroundColor: '#efedff', width: '250px' }}
                        // value={formData.firstName}
                        // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
                        required
                        id="key"
                        name="key"
                        placeholder='Enter Key given by your teacher'
                      />
                      <Button
                        type="button"
                        variant="contained"
                        style={{ backgroundColor: '#2e1cc4', width: '45px' }}
                        sx={{ ml: 3 }}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="keysAndSchoolInfo">
                   <Button
                    variant="contained"
                    style={{ backgroundColor: '#2e1cc4' }}
                    sx={{ mt: 1, mb: 2 }}
                   >
                    Click and Share this key with your Parents 
                   </Button>
                  </div>

                  <div className="updatebuttons">
                  <Button
                        type="button"
                        variant="contained"
                        style={{ backgroundColor: '#2e1cc4' }}
                        sx={{ ml: 3 ,mt:10}}
                      >
                        Change Password
                      </Button>
                    
                      <Button
                        type="button"
                        variant="contained"
                        style={{ backgroundColor: '#2e1cc4' }}
                        sx={{ ml: 3,mt:10 }}
                      >
                        Update Profile
                      </Button>

                  </div>
                </Box>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
