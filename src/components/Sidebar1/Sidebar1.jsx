import React, { useState } from "react";
import BastaLogo from '../../assets/bastalogo.jpg';
import bg from '../../assets/containerBg.jpg';
import { useNavigate } from 'react-router-dom';
// import './styles.css'
// import {makeStyles} from "@mui/styles/makeStyles";
import "./sidebar.css";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Drawer,
  Typography
} from "@mui/material";

import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home,
  Dashboard,
  CalendarMonth,
  EventNote,
  Recommend,
  History,
  Inbox,
  AccountBox,
  Settings,
  Quiz

} from "@mui/icons-material";
import { useEffect } from "react";

const sideBarArray = [
  // {
  //     listText: "Christen Stewart"
  // },
  {
    listText: "Dashboard",
    listIcon: <Dashboard />
  },
  {
    listText: "Timetable",
    listIcon: <CalendarMonth />
  }, {
    listText: "Dairy",
    listIcon: <EventNote />
  },
  {
    listText: "Recommendations",
    listIcon: <Recommend />
  },
  {
    listText: "History",
    listIcon: <History />
  },
  {
    listText: "My Inbox",
    listIcon: <Inbox />
  },
  {
    listText: "Profile",
    listIcon: <AccountBox />

  },
  {
    listText: "Settings",
    listIcon: <Settings />

  }
]

const dashboardComponent = [
  {
    listText: "Practice Test",
    listIcon: <Quiz />
  }
]


const listItems = [
  {
    listIcon: <Home />,
    listText: "Home"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts"
  }
];

export default function App({ showExam, firstName }) {
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState('')
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const mins = new Date().getMinutes();
  const today = `${date}/${month}/${year}`

  useEffect(() => {
    checkTime()
  }, [])

  function checkTime() {
    if (hours > 12 && hours < 24) {
      setTimer('pm')
    } else if (hours > 0 && hours < 12) {
      setTimer('am')
    }
  }


  const moveToExamPortail = () => {
    navigation('/exam', {
      state: {
        firstName: firstName
      }
    })
  }

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className="menuSliderContainer" component="div" style={{ height: '100%', width: '400px', backgroundImage: `url(${bg})` }}>
      {/* <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
      /> */}
      <Divider />
      <div className="logo" style={{ display: 'flex', flexDirection: 'column' }} >
        <img src={BastaLogo} width={122} height={122} style={{ borderRadius: 80 }} />
        <Typography style={{ paddingLeft: '10%', paddingTop: '3%', fontWeight: 'bold' }}>{firstName}</Typography>
      </div>
      <List>
        {sideBarArray.map((listItem, index) => (
          <ListItem className="listItem" button key={index} >
            <ListItemIcon className="listItem" style={{ color: 'black' }}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} style={{ color: 'black' }} />
          </ListItem>
        ))}
        <Divider />
        {showExam && (
          <>
            {dashboardComponent.map((listItem, index) => (
              <ListItem className="listItem" button key={index} onClick={() => moveToExamPortail()}>
                <ListItemIcon className="listItem" style={{ color: 'black' }}      >
                  {listItem.listIcon}
                </ListItemIcon>
                <ListItemText primary={listItem.listText} style={{ color: 'black' }} />
              </ListItem>
            ))}
          </>

        )}
        <Typography style={{ display: 'flex', flexDirection: 'column', paddingTop: '30px', paddingLeft: '25%' }}>
          © 2022 | All Rights Reserved
        </Typography>

      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <Box component="nav">
        <AppBar position="static" style={{backgroundColor:'#2e1cc4'}}>
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu style={{color:'white'}} />
            </IconButton>
            <div className="navbar">
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                  <Typography style={{ paddingLeft: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    Gurukul School
                  </Typography>
                </div>
                <div style={{ display: 'flex', flex: 0.5 }}>

                  <Typography style={{ paddingLeft: '70%', fontWeight: 'bold' }}>
                    {today}
                  </Typography>

                  <Typography style={{ paddingLeft: '20px', fontWeight: 'bold' }}>
                    {hours}:{mins} {timer}
                  </Typography>
                </div>
              </div>
            </div>
            <Drawer open={open} anchor="left" onClose={toggleSlider} >
              {sideList()}
            </Drawer>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
