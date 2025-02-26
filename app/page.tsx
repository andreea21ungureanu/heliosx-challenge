"use client";

import { useEffect, useState } from "react";
import {
  PEAR_ALLERGY_QUESTIONS,
  QUESTIONS_ANSWERS_OPTIONS,
} from "../utils/constants";

type QuestionAnswers = "Yes" | "No";
type AnswersList = { [key: string]: QuestionAnswers };

export default function Consultation() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(() => {
    const storedAnswers = localStorage.getItem("answers");
    return storedAnswers ? JSON.parse(storedAnswers) : {};
  });

  // Update local storage with given answers as the user progresses through the questionnaire
  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  const handleAnswer = (answer: QuestionAnswers) => {
    setAnswers((prev: AnswersList) => ({
      ...prev,
      [PEAR_ALLERGY_QUESTIONS[currentQuestion]]: answer,
    }));

    if (currentQuestion < PEAR_ALLERGY_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {currentQuestion < PEAR_ALLERGY_QUESTIONS.length ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">
            {PEAR_ALLERGY_QUESTIONS[currentQuestion]}
          </h2>
          <div className="flex gap-4 justify-center">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-green-600 font-semibold"
              onClick={() => handleAnswer("Yes")}
            >
              {QUESTIONS_ANSWERS_OPTIONS.Yes}
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-red-600 font-semibold"
              onClick={() => handleAnswer("No")}
            >
              {QUESTIONS_ANSWERS_OPTIONS.No}
            </button>
          </div>
        </div>
      ) : (
        "Done"
      )}
    </div>
  );
}
