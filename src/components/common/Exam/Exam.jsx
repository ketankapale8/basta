import { Button, MenuItem, TextField  } from '@mui/material';
// import { useRouter } from 'next/router';
// import Router from 'next/router';
import axios from 'axios'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import React, {useState , useEffect} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import Header from '../Header/Header'
import './exam.css'
import Categories from '../Data/categories'

export default function Examportal({ fetchQuestions }) {

    const location = useLocation();
    const {firstName} = location.state;
    const navigate = useNavigate();

    

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const [score , setScore] = useState(0);
  const [questions, setQuestions] = useState();
 
    
  const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz');
    }
  };
    // console.log(questioniare);
    
  


  return (
    <>
    <div className="examContainer">
      <Header/>
      <div className="content">
      <div className="settings">
      <div className="settings__select">
      {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
        <TextField
          style={{ marginBottom: 25 , width:'215px' }}
          label={firstName}
          variant="outlined"
        />

          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 25 , width:'215px' }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 , width:'215px' }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ backgroundColor:'#2e1cc4'}}
            onClick={()=>handleSubmit()}
          >
            Start Quiz
          </Button>
      </div>

      </div>
      </div>
    </div>
    </>
  )
}
