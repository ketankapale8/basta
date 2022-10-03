import React from 'react';
import { useState } from 'react';
import axios from 'axios'
// import Navbar from '../../../components/common/Navbar';
import { useRouter } from 'next/router';
import Examportal from './Examportal'



export default function Student() {
  const router = useRouter();
  const data = router.query;

  // const [score , setScore] = useState(0);
  // const [questions, setQuestions] = useState();

  // const fetchQuestions = async (category="", difficulty="") =>{
    
  //   const {data} = await axios.get(
  //     `https://opentdb.com/api.php?amount=10${
  //       category && `&category=${category}`
  //     }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  //   )

  //   setQuestions(data.results);

  // }

  return (
    <>
     <Examportal 
      // fetchQuestions={fetchQuestions}
      // questions={questions}
     />
    
    </>
  )
}