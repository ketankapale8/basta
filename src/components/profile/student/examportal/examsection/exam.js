import React, {useState , useEffect} from 'react';
import QuestionBank  from '../../../../../components/common/QuestionBank.js'
import styles from '../../../../../styles/Examportal.module.css'

import { CircularProgress } from "@mui/material";
import { useRouter } from 'next/router';
// import Question from '../../../../../components/common/Question/Question';

function exam() {
  const [currentQuestion , setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);


  

  const handleAnswerResponse=(isCorrect)=>
  {
      if(isCorrect)
      {
          setScore(score+1);
      }
  
     const nextQuestion= currentQuestion+1;
     if(nextQuestion< QuestionBank.length)
     {
      setCurrentQuestion(nextQuestion);
     }
     else{
      setShowScore(true);
     }
  }
  
  const resetQuiz=()=>
  {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
  }


  return(
    <>
    <div className={styles.examContainer}>
        <div className={styles.questionView}>
            {showScore ? (
                <div className={styles.finalScore}>
                    You have scored {score} out of {QuestionBank.length}
                    <>
                       <button type="submit" style={{backgroundColor :'#2e1cc4', color:'white' }} onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className={styles.question_section}>
                            <div className={styles.examContainer.question_count}>
                               <span>{currentQuestion+1}</span>/{QuestionBank.length}
                            </div>

                            <div className={styles.question_text}>
                             {QuestionBank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className={styles.answer_section}>
                          {QuestionBank[currentQuestion].Answers.map((answer)=>
                          (
                              <button className={styles.button} onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }
            

        </div>
        </div>
        </>

      
  )
  
}

export default exam



// const router = useRouter();
  // const data = router.query;

  // console.log(data)
  // // let {questions,
  // //   setQuestions,
  // //   setScore,
  // //   score,
  // // firstName} = data;

  // // console.log(questions)

  // const {
  //   query : {firstName,
  //     questions,
  //     setQuestions,
  //     setScore,
  //     score,
  //   correct,
  //   options,
  // incorrect}
  // } = router;

  // const props = {questions,
  //   setQuestions,
  //   setScore,
  //   score,
  // firstName,
  // options,
  // correct,
  // incorrect}


  
  
  // // const [options, setOptions] = useState();
  // const [currQues, setCurrQues] = useState(0);
  
  // //   useEffect(() => {
  // //       setOptions(
  // //         props.questions &&
  // //           handleShuffle([
  // //             props.questions.correct_answer,
  // //             props.questions.incorrect_answers,
  // //           ])
  // //       );
  // //     }, [currQues, props.questions]);

  // //     console.log(props.questions)
    


  // // const handleShuffle = (options) => {
  // //   return options.sort(() => Math.random() - 0.5);
  // // };

  // return (
  //   <div className="quiz">
  //     <span className="subtitle">Welcome, {props.firstName}</span>

  //     {props.questions ? (
  //       <>
  //         <div className="quizInfo">
  //           <span>{props.questions.category}</span>
  //           <span>
  //             {props.questions.difficulty}
  //             Score : {score}
  //           </span>
  //         </div>
  //         <Question
  //           currQues={currQues}
  //           setCurrQues={setCurrQues}
  //           questions={props.questions}
  //           options={options}
  //           correct={props.correct}
  //           score={props.score}
  //           setScore={props.setScore}
  //           setQuestions={props.setQuestions}
  //         />
  //       </>
  //     ) : (
  //       <CircularProgress
  //         style={{ margin: 100 }}
  //         color="inherit"
  //         size={150}
  //         thickness={1}
  //       />
  //     )}
  //   </div>
  
  // )