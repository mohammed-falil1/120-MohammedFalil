import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home"
import Result from "./Pages/Result"

function App() {

  const[answerSheet,setAnswerSheet]=useState();
  const[questions,setQuestions]=useState();
  const[marks,setMarks]=useState(0);

  return (
    <Routes>
      <Route exact path="/" element={<Home setQuestions={setQuestions} answerSheet={answerSheet} setMarks={setMarks} setAnswerSheet={setAnswerSheet}/>}/>
      <Route exact path="/result" element={<Result questions={questions} answerSheet={answerSheet} marks={marks} />}/>
    </Routes>
  );
}

export default App;
