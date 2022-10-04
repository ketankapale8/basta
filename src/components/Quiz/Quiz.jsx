// import { CircularProgress } from "@mui/material/CircularProgress";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar1 from '../Sidebar1/Sidebar1'
import Question from "../Question/Question";
import "./quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  

  const location = useLocation();

  const {firstName} = location.state;
  console.log(firstName)

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <>
    <Sidebar1 firstName={firstName}/>
    <div className="quiz">
      <span className="subtitle">Welcome, {firstName}</span>
      <span style={{fontWeight:'bolder', paddingTop:'30px'}}>Practice Test</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span style={{fontWeight:'bold'}}>Topic :-{questions[currQues].category}</span>
            <span style={{fontWeight:'bold'}}>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
    </>
  );
};

export default Quiz;