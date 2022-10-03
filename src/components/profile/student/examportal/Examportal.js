import { Button, MenuItem, TextField  } from '@mui/material';
import { useRouter } from 'next/router';
import Router from 'next/router';
import axios from 'axios'
import ErrorMessage from '../../../../components/common/ErrorMessage/ErrorMessage';
import React, {useState , useEffect} from 'react'
import Header from '../../../../components/common/Header/Header'
import styles from '../../../../styles/Exam.module.css';
import Categories from '../../../../components/common/Data/categories'

export default function Examportal() {
  const router = useRouter();
  // const Router = withRouter();
  
  
  
  
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const [score , setScore] = useState(0);
  const [questions, setQuestions] = useState();
  // console.log(category)
  
  
  
  const fetchQuestions = async () =>{
    
    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      )
      
      setQuestions(data.results);
      
    }
    // let opt = []
    // questions && opt.push(questions[0].incorrect_answers.map(item=>item));
    // questions && opt.push(questions[0].correct_answers.map(item=>item))

    
    
    console.log(questions && questions[0])
    function sendProps(){
      Router.push({
        pathname : '/profile/student/examportal/examsection/exam',
        // query : {
        //   firstName,
        //   questions:questions[0].question,
        //   correct:questions[0].correct_answer,
        //   incorrect:questions[0].incorrect_answer,
        //   options : Array[questions[0].correct_answer,questions[0].incorrect_answer],
        //   setQuestions:setQuestions,
        //   setScore:setScore,
        //   score:score
        // }
      })
    }
    const handleSubmit = () => {
      
      if (!category || !difficulty ) {
        setError(true);
        return;
      } else {
        // fetchQuestions;
        setError(false);
        sendProps();
        // 
        // history.push("/quiz");
      }
    };
    // console.log(questioniare);
    
    useEffect(()=>{
      fetchQuestions();
    },[category , difficulty])
    

  
  const data = router.query;
  const {firstName} = data;

  return (
    <>
    <div className={styles.examContainer}>
      <Header/>
      <div className={styles.content}>
      <div className={styles.settings}>
      <div className={styles.settings__select}>
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
            onClick={handleSubmit}
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
