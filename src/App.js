import React, { useState } from "react";
import singleQuestion from "./Question";
import data from "./Data";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  const [isAnswer, setIsAnswer] = useState(false);
  return (
    <main>
      <div className="container">
        <h3>Frequently Asked Questions</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
