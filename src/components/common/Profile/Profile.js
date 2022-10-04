import React, { useState } from 'react';
import BastaLogo from '../../../assets/bastalogo.jpg';
import {Link, useNavigate} from 'react-router-dom'
// import Image from 'next/image';
// import Navbar from '../Navbar';
import './profile.css';
import { Divider, Typography } from '@mui/material';
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
import { useLocation } from 'react-router-dom';

// import ParentSub from '../../pages/profile/parent/parentsub';
// import PyschologistSub from '../../pages/profile/counsellor/counsellorsub';
// import StudentSub from '../../pages/profile/student/studentsub';
// import TeacherSub from '../../pages/profile/teacher/teachersub';


export default function Profile() {
let location = useLocation();
const navigation = useNavigate();


// console.log(location.state.firstName)
// return null

const { firstName, lastName, email, phone_no, selectedVal } = location.state;
const [studentprofileData , setstudentProfileData] = useState({address: '' , zipcode:'', city:'',state:'', sports:'', subjects:'', hobbies:'', class:'', section:'', schoolName:'', schoolAdd :'', schoolZip:'', schoolcity:'', schoolState:''})

const handleSubmit = () => {
  navigation(`/profile/${selectedVal}`, {state:{
            firstName : firstName,
            lastName : lastName,
            email:email,
            phone_no:phone_no,
            selectedVal : selectedVal,
            address : studentprofileData.address
  }})

  // return formData
  
};

console.log(studentprofileData.address)
  const [submittedProfile, setSubmittedProfile] = useState('');

  let StudentPage = () => {
    return (
      <>
      <div className="formContent">
        <Box component="form" noValidate  >
          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' ,paddingTop:'50px' }} variant="outlined" >
            <Typography style={{ padding: '10px' }}>
              Personal Details
            </Typography>
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px'  }}
              value={studentprofileData.address}
              onChange={(e) =>setstudentProfileData({...studentprofileData , address: e.target.value})}
              required
              id="address_"
              name="address_"
              placeholder='Your Home Address'
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '50ch', display: 'flex', flexDirection: 'row', margin: '30px' , marginTop:'-10px' }} variant="outlined" >
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' , }}
              required
              id="zipcode"
              name="zipcode"
              value={studentprofileData.zipcode}
              onChange={(e)=> setstudentProfileData({...studentprofileData , zipcode: e.target.value})}
              // value={formData.password}
              // onChange={(e) =>setFormData({...formData , password: e.target.value})}
              placeholder='Zipcode'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="city"
              name="city"
              placeholder='City'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="state"
              name="state"
              placeholder='State'
            // autoFocus
            />

          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' , marginTop:'-10px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="first_name"
              name="first_name"
              placeholder='Your Favorite Subjects'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' , marginTop:'-10px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="first_name"
              name="first_name"
              placeholder='Your Favorite Sports'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="hobbies"
              name="hobbies"
              placeholder='Your Hobbies'
              // autoFocus
            />
          </FormControl>

          <Typography style={{ paddingBottom: '20px' , }}>
            Institute Details
          </Typography>
          <FormControl sx={{ m: 1, width: '50ch', display: 'flex', flexDirection: 'row', margin: '30px' , marginTop:'-10px' }} variant="outlined" >
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' ,  }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="class"
              name="class"
              placeholder='Class'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="section"
              name="section"
              placeholder='Section'
            // autoFocus
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' , marginTop:'-10px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="school_name"
              name="school_name"
              placeholder='Your School Name'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' , marginTop:'-10px'}} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="school_address"
              name="school_address"
              placeholder='Your School Address'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '50ch', display: 'flex', flexDirection: 'row', margin: '30px' , marginTop:'-10px' }} variant="outlined" >
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              required
              id="zipcode"
              name="zipcode_school"
              // value={formData.password}
              // onChange={(e) =>setFormData({...formData , password: e.target.value})}
              placeholder='Zipcode'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px'  }}
              required
              type="text"
              id="city_school"
              name="city_school"
              placeholder='City'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="state_school"
              name="state_school"
              placeholder='State'
            // autoFocus
            />

          </FormControl>
          <FormControl sx={{ m: 1, width: '15ch', display: 'flex', justifyContent: 'flex-end', margin: '30px', marginTop:'-10px' }} variant="outlined" >
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                style={{ backgroundColor: '#2e1cc4' }}
                sx={{ mt: 1, mb: 2 }}
                onClick={()=>handleSubmit()}
              >
                Next
              </Button>
            {/* </Link> */}


            {/* </Link> */}

          </FormControl>


        </Box>
      </div>
      </>
    )
  }

  let ParentsPage = () => {
    return (
      <div className="formContent">
        <Box component="form" noValidate sx={{ mt: -2 }} >
          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >
            <Typography style={{ padding: '10px' }}>
              Personal Details
            </Typography>
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="parents_address"
              name="parents_address"
              placeholder='Your Home Address'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              required
              id="zipcode"
              name="zipcode"
              // value={formData.password}
              // onChange={(e) =>setFormData({...formData , password: e.target.value})}
              placeholder='Zipcode'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="city"
              name="city"
              placeholder='City'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="state"
              name="state"
              placeholder='State'
            // autoFocus
            />

          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="profession"
              name="profession"
              placeholder='Your Profession'
            // autoFocus
            />
            {/* </FormControl> */}

            {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="fav_sports"
              name="fav_sports"
              placeholder='Your Favorite Sports'
            // autoFocus
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="highest_degree"
              name="highest_degree"
              placeholder='Highest Degree'
            // autoFocus
            />
            {/* </FormControl> */}

            {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="workExperience"
              name="workExperience"
              placeholder='Work Experience'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="hobbies"
              name="hobbies"
              placeholder='Your Hobbies'
            // autoFocus
            />
            {/* </FormControl> */}

            {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="intrests"
              name="intrests"
              placeholder='Your Intrests'
            // autoFocus
            />
          </FormControl>

          <Typography style={{ padding: '10px' }}>
            Institute Details
          </Typography>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="school_name"
              name="school_name"
              placeholder='Your School Name'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="school_address"
              name="school_address"
              placeholder='Your School Address'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              required
              id="zipcode"
              name="zipcode_school"
              // value={formData.password}
              // onChange={(e) =>setFormData({...formData , password: e.target.value})}
              placeholder='Zipcode'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="city_school"
              name="city_school"
              placeholder='City'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="state_school"
              name="state_school"
              placeholder='State'
            // autoFocus
            />

          </FormControl>
          <FormControl sx={{ m: 1, width: '15ch', display: 'flex', justifyContent: 'flex-end', margin: '30px', }} variant="outlined" >
            {/* <Link href={{ pathname :`/profile/${selectedBtn}`, query:{firstName :formData.firstName , lastName:formData.lastName , email:formData.email , password:formData.password , phone_no:formData.phone_no ,selectedVal : selectedBtn}} }> */}
            {/* <Link href={{ pathname: `/profile/${selectedVal}/parentsub` }}> */}
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                style={{ backgroundColor: '#2e1cc4' }}
                sx={{ mt: 1, mb: 2 }}
              // onClick={handleSubmit}
              >
                Next
              </Button>
            {/* </Link> */}


            {/* </Link> */}

          </FormControl>


        </Box>
      </div>
    )
  }


  let PrincipalPage = () => {
    return (
      <div className="formContent">
        <Box component="form" noValidate sx={{ mt: -2 }} >
          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >
            <Typography style={{ padding: '10px' }}>
              Personal Details
            </Typography>
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="principal_school_address"
              name="rincipal_school_address"
              placeholder='Your Home Address'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              required
              id="zipcode"
              name="zipcode"
              // value={formData.password}
              // onChange={(e) =>setFormData({...formData , password: e.target.value})}
              placeholder='Zipcode'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="city"
              name="city"
              placeholder='City'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="state"
              name="state"
              placeholder='State'
            // autoFocus
            />

          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="profession"
              name="profession"
              placeholder='Your Profession'
            // autoFocus
            />
            {/* </FormControl> */}

            {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="fav_sports"
              name="fav_sports"
              placeholder='Your Favorite Sports'
            // autoFocus
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="highest_degree"
              name="highest_degree"
              placeholder='Highest Degree'
            // autoFocus
            />
            {/* </FormControl> */}

            {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="workExperience"
              name="workExperience"
              placeholder='Work Experience'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="hobbies"
              name="hobbies"
              placeholder='Your Hobbies'
            // autoFocus
            />
            {/* </FormControl> */}

            {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="intrests"
              name="intrests"
              placeholder='Your Intrests'
            // autoFocus
            />
          </FormControl>

          <Typography style={{ padding: '10px' }}>
            Institute Details
          </Typography>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="school_name"
              name="school_name"
              placeholder='Your School Name'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="school_address"
              name="school_address"
              placeholder='Your School Address'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              required
              id="zipcode"
              name="zipcode_school"
              // value={formData.password}
              // onChange={(e) =>setFormData({...formData , password: e.target.value})}
              placeholder='Zipcode'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="city_school"
              name="city_school"
              placeholder='City'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="state_school"
              name="state_school"
              placeholder='State'
            // autoFocus
            />

          </FormControl>
          <FormControl sx={{ m: 1, width: '15ch', display: 'flex', justifyContent: 'flex-end', margin: '30px', }} variant="outlined" >
            {/* <Link href={{ pathname :`/profile/${selectedBtn}`, query:{firstName :formData.firstName , lastName:formData.lastName , email:formData.email , password:formData.password , phone_no:formData.phone_no ,selectedVal : selectedBtn}} }> */}
            {/* <Link href={{ pathname: `/profile/${selectedVal}/principalsub` }}> */}
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                style={{ backgroundColor: '#2e1cc4' }}
                sx={{ mt: 1, mb: 2 }}
              // onClick={handleSubmit}
              >
                Next
              </Button>
            {/* </Link> */}


            {/* </Link> */}

          </FormControl>


        </Box>
      </div>
    )
  }

  let TeacherPage = () => {
      let [branch , addbranch] = useState(false);

      let [classesArray , setClassesArray] = useState([{name:'classes'}, {name :'section'}])
      console.log(classesArray.map(item=>item.name))

      const addClassArray = () =>{
        addbranch(!branch)
        // classesArray.push(classesArray)
      }
    return (
      <div className="formContent">
        <Box component="form" noValidate sx={{ mt: -2 }} >
          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >
            <Typography style={{ padding: '10px' }}>
              Personal Details
            </Typography>
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="first_name"
              name="first_name"
              placeholder='Your Home Address'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              required
              id="zipcode"
              name="zipcode"
              // value={formData.password}
              // onChange={(e) =>setFormData({...formData , password: e.target.value})}
              placeholder='Zipcode'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="city"
              name="city"
              placeholder='City'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="state"
              name="state"
              placeholder='State'
            // autoFocus
            />

          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="profession"
              name="profession"
              placeholder='Your Profession'
            // autoFocus
            />
            {/* </FormControl> */}

            {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="fav_sports"
              name="fav_sports"
              placeholder='Your Favorite Sports'
            // autoFocus
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="highest_degree"
              name="highest_degree"
              placeholder='Highest Degree'
            // autoFocus
            />
            {/* </FormControl> */}

            {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="workExperience"
              name="workExperience"
              placeholder='Work Experience'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="hobbies"
              name="hobbies"
              placeholder='Your Hobbies'
            // autoFocus
            />
            {/* </FormControl> */}

            {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="intrests"
              name="intrests"
              placeholder='Your Intrests'
            // autoFocus
            />
          </FormControl>

          <Typography style={{ padding: '10px' }}>
            Institute Details
          </Typography>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="school_name"
              name="school_name"
              placeholder='Your School Name'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              // value={formData.firstName}
              // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
              required
              id="school_address"
              name="school_address"
              placeholder='Your School Address'
            // autoFocus
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px' }}
              required
              id="zipcode"
              name="zipcode_school"
              // value={formData.password}
              // onChange={(e) =>setFormData({...formData , password: e.target.value})}
              placeholder='Zipcode'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="city_school"
              name="city_school"
              placeholder='City'
            // autoFocus
            />

            <OutlinedInput
              margin="normal"
              style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
              required
              type="text"
              id="state_school"
              name="state_school"
              placeholder='State'
            // autoFocus
            />


          </FormControl>
          <IconButton
            onClick={addClassArray}
            size="small"
            sx={{ ml: 2 }}
            // aria-controls={open ? 'account-menu' : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>+</Avatar>
          </IconButton>
          {branch==true && (
            <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' }} variant="outlined" >
              {classesArray.map(item=>{
                return (
                  <OutlinedInput
                    margin="normal"
                  style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
                  required
                  type="text"
                  value={item.title}
                  onChange={(e)=> setClassesArray({title: e.target.value})}
                  // id={item.title}
                  // name={item.title}
                  placeholder={item.name}
                  />
                )
              })}
            </FormControl>

          )}
          <FormControl sx={{ m: 1, width: '15ch', display: 'flex', justifyContent: 'flex-end', margin: '30px', }} variant="outlined" >
            {/* <Link href={{ pathname :`/profile/${selectedBtn}`, query:{firstName :formData.firstName , lastName:formData.lastName , email:formData.email , password:formData.password , phone_no:formData.phone_no ,selectedVal : selectedBtn}} }> */}
            {/* <Link href={{ pathname: `/profile/${selectedVal}/teachersub` }}> */}
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                style={{ backgroundColor: '#2e1cc4' }}
                sx={{ mt: 1, mb: 2 }}
              // onClick={handleSubmit}
              >
                Next
              </Button>
            {/* </Link> */}


            {/* </Link> */}

          </FormControl>


        </Box>
      </div>
    )
  }

  let CounsellorPage = () => {
    let [branch , addbranch] = useState(false);

    let [classesArray , setClassesArray] = useState([{name:'classes'}, {name :'section'}])
    console.log(classesArray.map(item=>item.name))

    const addClassArray = () =>{
      addbranch(!branch)
      // classesArray.push(classesArray)
    }
  return (
    <div className="formContent">
      <Box component="form" noValidate sx={{ mt: -1 }} >

      <FormControl sx={{ m: 0, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" >
          <Typography style={{ padding: '10px' }}>
            Introduction
          </Typography>
          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px' }}
            multiline
            rows={2}
            // value={formData.firstName}
            // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
            required
            id="introductionCounsellor"
            name="introductionCounsellor"
            placeholder='Give a Brief introduction of yourself (Max 200 characters)'
          // autoFocus
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' ,marginTop:'-30px' }} variant="outlined" >
          <Typography style={{ padding: '10px' }}>
            Personal Details
          </Typography>
          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px' }}
            // value={formData.firstName}
            // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
            required
            id="first_name"
            name="first_name"
            placeholder='Your Home Address'
          // autoFocus
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px',marginTop:'-20px' }} variant="outlined" >
          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px' }}
            required
            id="zipcode"
            name="zipcode"
            // value={formData.password}
            // onChange={(e) =>setFormData({...formData , password: e.target.value})}
            placeholder='Zipcode'
          // autoFocus
          />

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
            required
            type="text"
            id="city"
            name="city"
            placeholder='City'
          // autoFocus
          />

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
            required
            type="text"
            id="state"
            name="state"
            placeholder='State'
          // autoFocus
          />

        </FormControl>

        <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' ,marginTop:'-20px'}} variant="outlined" >

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px' }}
            // value={formData.firstName}
            // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
            required
            id="highest_degree"
            name="highest_degree"
            placeholder=' Highest Degree'
          // autoFocus
          />
          {/* </FormControl> */}

          {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
            // value={formData.firstName}
            // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
            required
            id="work_ex"
            name="work_ex"
            placeholder='Work Experience'
          // autoFocus
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' ,marginTop:'-20px' }} variant="outlined" >

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px' }}
            // value={formData.firstName}
            // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
            required
            id="Diploma"
            name="Diploma"
            placeholder='Diploma in Counselling'
          // autoFocus
          />
          {/* </FormControl> */}

          {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
            // value={formData.firstName}
            // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
            required
            id="Specialization"
            name="Specialization"
            placeholder='Specialization'
          // autoFocus
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px' ,marginTop:'-20px'}} variant="outlined" >

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px' }}
            // value={formData.firstName}
            // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
            required
            id="hobbies"
            name="hobbies"
            placeholder='Your Hobbies'
          // autoFocus
          />
          {/* </FormControl> */}

          {/* <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' }} variant="outlined" > */}

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
            // value={formData.firstName}
            // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
            required
            id="intrests"
            name="intrests"
            placeholder='Your Intrests'
          // autoFocus
          />
        </FormControl>

        <Typography style={{ padding: '10px',marginTop:'-20px' }}>
          Institute Details
        </Typography>

        <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px' ,marginTop:'-5px' }} variant="outlined" >

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px' }}
            // value={formData.firstName}
            // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
            required
            id="school_name"
            name="school_name"
            placeholder='Your School Name'
          // autoFocus
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'column', margin: '30px',marginTop:'-20px' }} variant="outlined" >

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px' }}
            // value={formData.firstName}
            // onChange={(e) =>setFormData({...formData , firstName: e.target.value})}
            required
            id="school_address"
            name="school_address"
            placeholder='Your School Address'
          // autoFocus
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '45ch', display: 'flex', flexDirection: 'row', margin: '30px',marginTop:'-20px' }} variant="outlined" >
          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px' }}
            required
            id="zipcode"
            name="zipcode_school"
            // value={formData.password}
            // onChange={(e) =>setFormData({...formData , password: e.target.value})}
            placeholder='Zipcode'
          // autoFocus
          />

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
            required
            type="text"
            id="city_school"
            name="city_school"
            placeholder='City'
          // autoFocus
          />

          <OutlinedInput
            margin="normal"
            style={{ backgroundColor: '#efedff', width: '450px', marginLeft: '20px' }}
            required
            type="text"
            id="state_school"
            name="state_school"
            placeholder='State'
          // autoFocus
          />
        </FormControl>
        
        <FormControl sx={{ m: 1, width: '15ch', display: 'flex', justifyContent: 'flex-end', margin: '30px',  }} variant="outlined" >
          {/* <Link href={{ pathname :`/profile/${selectedBtn}`, query:{firstName :formData.firstName , lastName:formData.lastName , email:formData.email , password:formData.password , phone_no:formData.phone_no ,selectedVal : selectedBtn}} }> */}
          {/* <Link href={{ pathname: `/profile/${selectedVal}/counsellorsub` }}> */}
            <Button
              type="submit"
              // fullWidth
              variant="contained"
              style={{ backgroundColor: '#2e1cc4' }}
              sx={{ mt: 1, mb: 2 }}
            onClick={handleSubmit}
            >
              Next
            </Button>
          {/* </Link> */}
          {/* </Link> */}
        </FormControl>
      </Box>
    </div>
  )
}

  return (
    <>
      {/* <Navbar data={data} /> */}
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
                  <Divider/>
                <div className="leftBottomContainer" style={{padding:'50px'}}>
                  <h5>Email Address</h5>
                  <h5>{email}</h5>
                  <br />
                  <h5>Phone Number</h5>
                  <h5>{phone_no}</h5>
                </div>
              </div>
            </div>
            <div className="right">
              { selectedVal == "teacher" ? TeacherPage()
              : selectedVal == "student" ? StudentPage()
              : selectedVal == "parent" ? ParentsPage()
              : selectedVal == "principal" ? PrincipalPage()
              : selectedVal == "counsellor" ? CounsellorPage()
              : 'Please select who you are before moving ahead with the profile'
            }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

