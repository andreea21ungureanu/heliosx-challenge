"use client";

import { useEffect, useRef, useState } from "react";
import {
  PEAR_ALLERGY_QUESTIONS,
  QUESTIONS_ANSWERS_OPTIONS,
} from "../utils/constants";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button/";

type QuestionAnswers = "Yes" | "No";
type AnswersList = { [key: string]: QuestionAnswers };

export default function Consultation() {
  const router = useRouter();

  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [inProgressConsultation, setInProgressConsultation] = useState(false);
  const [answers, setAnswers] = useState(() => {
    const storedAnswers = localStorage.getItem("answers");
    return storedAnswers ? JSON.parse(storedAnswers) : {};
  });

  // Update local storage with given answers as the user progresses through the questionnaire
  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  const handleAnswer = (questionIndex: number, answer: QuestionAnswers) => {
    setAnswers((prev: AnswersList) => ({
      ...prev,
      [PEAR_ALLERGY_QUESTIONS[questionIndex]]: answer,
    }));

    setTimeout(() => {
      questionRefs.current[questionIndex + 1]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 200); // Delay to ensure re-render before scrolling
  };

  const handleStartConsultation = () => {
    setInProgressConsultation(true);
  };

  const handleSubmitConsultation = () => {
    // Reset local storage once submitted
    localStorage.setItem("answers", JSON.stringify({}));

    router.push("/ty");
  };

  return (
    <div className="flex flex-col items-center p-8">
      {inProgressConsultation ? null : (
        <Button label="Start Consultation" onClick={handleStartConsultation} />
      )}

      {inProgressConsultation &&
        PEAR_ALLERGY_QUESTIONS.map((question, index) => {
          const isAnswered = answers.hasOwnProperty(question);
          const isNextQuestion = index === Object.keys(answers).length;

          // Only show answered + next
          if (!isAnswered && !isNextQuestion) return null;

          return (
            <div
              key={question}
              ref={(el) => (questionRefs.current[index] = el)}
              className="text-center mb-6 max-w-md"
            >
              <h2 className="text-xl font-semibold mb-4">{question}</h2>
              <div className="flex gap-4 justify-center">
                <button
                  className={`px-4 py-2 ${
                    answers[question] === "Yes" ? "bg-green-600" : "bg-blue-600"
                  } text-white rounded-lg hover:bg-green-700 font-semibold`}
                  onClick={() =>
                    handleAnswer(index, QUESTIONS_ANSWERS_OPTIONS.Yes)
                  }
                >
                  {QUESTIONS_ANSWERS_OPTIONS.Yes}
                </button>
                <button
                  className={`px-4 py-2 ${
                    answers[question] === "No" ? "bg-red-600" : "bg-blue-600"
                  } text-white rounded-lg hover:bg-red-700 font-semibold`}
                  onClick={() =>
                    handleAnswer(index, QUESTIONS_ANSWERS_OPTIONS.No)
                  }
                >
                  {QUESTIONS_ANSWERS_OPTIONS.No}
                </button>
              </div>
            </div>
          );
        })}

      {inProgressConsultation &&
        Object.keys(answers).length === PEAR_ALLERGY_QUESTIONS.length && (
          <Button
            label="Submit Consultation"
            onClick={handleSubmitConsultation}
          />
        )}
    </div>
  );
}
