import React, { useState, useEffect } from "react";
import Question from "./Question";

export default function Main() {
    const [questions, setQuestions ] = useState([])
    useEffect(() => {
        fetch('https://the-trivia-api.com/v2/questions')
        .then(res => res.json())
        .then(data => setQuestions(data))
        .catch(err => console.log(err.message))
    }, [])

    console.log(questions)

    

    return (
        <main>
            {questions.map(item => <Question 
                                            key={item.id}
                                            question={item.question.text}
                                            category={item.category}
                                            difficulty={item.difficulty}
                                            correctAnswer={item.correctAnswer}
                                            incorrectAnswers={item.incorrectAnswers}/>)}
        </main>
    )
}