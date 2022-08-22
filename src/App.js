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
        <h3>Questions and Answers</h3>
        <section className="info"></section>
      </div>
    </main>
  );
}

export default App;
