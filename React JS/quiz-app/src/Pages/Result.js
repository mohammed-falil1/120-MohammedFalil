import react, { useState } from "react";

export default function Result(props) {
  const checking = () => {
    // console.log("inside checking");
    // console.log("answerSheeet "+props.answerSheet);
    // console.log("questions "+JSON.stringify(props.questions));
  };

  // const [marksScored,setMarksScored] = useState(0)
  let total = props.questions.length;
  // const marks=()=>{
  //   console.log("inside marks")

  //   setMarksScored(marksScored+1);
  // }

  return (
    <>
      <div id="heading">
        <h1>ReactJS Answers</h1>
        {checking()}
      </div>
      <div>
        <h3>
          Marks {props.marks}/{total}
        </h3>
      </div>
      {props.questions.length > 0 ? (
        props.questions.map((lst, qNo) => (
          <>
            <div class="card">
              <h5 class="card-header">{"Question " + lst.id}</h5>
              <div class="card-body">
                <h5 class="card-title">{lst.q}</h5>
                {lst.options.map((opt) => (
                  <>
                    {console.log(
                      "answersheet.get " + props.answerSheet.get(qNo)
                    )}
                    {console.log("opt  " + opt)}
                    {console.log("result " + lst.result)}
                    {console.log("selected " + lst.selected)}
                    {opt === props.answerSheet.get(qNo) &&
                    lst.result === true &&
                    opt === lst.selected ? (
                      <>
                        <div
                          class="form-check"
                          style={{ backgroundColor: "green" }}
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name={qNo + "radioButton"}
                            value={opt}
                            checked
                            disabled
                          />
                          <label class="form-check-label">{opt}</label>
                        </div>
                      </>
                    ) : (
                      <>
                        {opt === props.answerSheet.get(qNo) &&
                        lst.result === false &&
                        opt === lst.selected ? (
                          <div
                            class="form-check"
                            style={{ backgroundColor: "red" }}
                          >
                            <input
                              class="form-check-input"
                              type="radio"
                              name={qNo + "radioButton"}
                              value={opt}
                              checked
                              disabled
                            />
                            <label class="form-check-label">{opt}</label>
                          </div>
                        ) : (
                          <>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name={qNo + "radioButton"}
                                value={opt}
                                disabled
                              />
                              <label class="form-check-label">{opt}</label>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                ))}
              </div>
            </div>
          </>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
