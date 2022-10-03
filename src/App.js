import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { useState } from 'react';
import Login from './components/Login/Login';
import Signup from './components/SignupPage/Signup';
import Profile from './components/common/Profile/Profile';
import StudentSub from './components/ProfileSubComponents/Students/StudentSub';
import Exam from '../src/components/common/Exam/Exam';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';

function App() {

  const [questions, setQuestions] = useState();
  // const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  console.log(questions)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile/student" element={<StudentSub/>}/>
          <Route path="/exam" element={<Exam  fetchQuestions={fetchQuestions}/>} 
              // name={name}
              // setName={setName}
              
          />
          <Route path="/quiz" element={<Quiz  questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}/>}
              
            />
          <Route path="/result" element={<Result score={score} />}
            
          
          />
            



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
