import React, { useState } from "react";
import singleQuestion from "./Question";
import data from "./Data";
import Question from "./Question";

function App() {
  const [isAnswer, setIsAnswer] = useState(false);
  return (
    <main>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="question">
              <section>
                <Question key={item.id} title={item.title} info={item.info} />
                <button
                  onClick={() => {
                    setIsAnswer(true);
                  }}
                  className="btn"
                >
                  +
                </button>
              </section>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
