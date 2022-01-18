import React from "react";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home(props) {
  const navigate = useNavigate();
  let marks=0;
  const questions = [
    {
      id: 1,
      q: "A valid react component can return only __________ element.",
      options: ["1", "2", "3", "4"],
      result:false,
      selected:"",
      ans: "1",
    },
    {
      id: 2,
      q: "A state in React.js is also known is  __________",
      options: [
        "A permanent storage.",
        "An Internal storage of the component.",
        "An External storage of the component.",
        "All of the above",
      ],
      result:false,
      selected:"",
      ans: "An Internal storage of the component.",
    },
    {
      id: 3,
      q: "What function allows you to render React content in an HTML page?",
      options: [
        "React.render()",
        "ReactDOM.render()",
        "ReactDOM.start()",
        " React.mount()",
      ],
      result:false,
      selected:"",
      ans: "ReactDOM.render()",
    },
    {
      id: 4,
      q: "Everything in react is a __________ ",
      options: ["Class", "Module", "Package", "Component"],
      result:false,
      selected:"",
      ans: "Component",
    },
    {
      id: 5,
      q: "React.js Covers only the view layer of the app.",
      options: ["True", "False"],
      result:false,
      selected:"",
      ans: "True",
    },
  ];

  const evaluation =()=>{
    // 0 is the qNO and 1 is the selected
    console.log("Inside summa")
    for(var i of answerSheet){
      if(i[1]===questions[i[0]]["ans"]){
        console.log(true)
       questions[i[0]]["result"]=true;
       marks++;
      }else{
        console.log(false);
      }
    }
    props.setAnswerSheet(answerSheet);
    props.setMarks(marks);
    navigate("/result");
}

  let answerSheet = new Map();

  const setQuestionWithAnswer = (qNo, opt) => {
      questions[qNo]["selected"]=opt;
     answerSheet.set(qNo, opt);
  };

  const handler = () => {
    // props.setQuestions(questions);
    if (answerSheet.size>4) {
      
      evaluation();
    } else {
      // navigate("/result");
      console.log("Inside else handler")
    }

    props.setQuestions(questions);
  };

  const radioChangeHandler = (qNo, opt) => {
    setQuestionWithAnswer(qNo, opt);
    
  };
  return (
    <>
      <div id="heading">
        <h1>ReactJS QUIZ</h1>
      </div>
      {questions.length > 0 ? (
        questions.map((lst, qNo) => (
          <>
            <div class="card">
              <h5 class="card-header">{"Question " + lst.id}</h5>
              <div class="card-body">
                <h5 class="card-title">{lst.q}</h5>
                {lst.options.length > 0 ? (
                  lst.options.map((opt) => (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name={qNo + "radioButton"}
                        value={opt}
                        onChange={() => radioChangeHandler(qNo, opt)}
                      />
                      <label class="form-check-label">{opt}</label>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        ))
      ) : (
        <></>
      )}
      <button
        id="submitButton"
        type="button"
        class="btn btn-primary btn-lg"
        onClick={handler}
      >
        Submit
      </button>
    </>
  );
}
