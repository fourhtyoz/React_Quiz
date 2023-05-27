import React, { useEffect, useState } from "react";

export default function Question(props) {
    const answers = [...props.incorrectAnswers, props.correctAnswer]
    const randomAnswers = answers.map(item => ({ item, sort: Math.random() }))
                               .sort((a, b) => a.sort - b.sort)
                               .map(({item}) => item)
    const [options, setOptions] = useState(randomAnswers)
    
    let score = 0
    const [clicked, setClicked] = useState(false)
    function giveAnswer(event) {
        if (event.target.textContent === props.correctAnswer) {
            setOptions(prev => {
                // console.log(prev)
                setClicked(() => true)
                console.log(score+1)
                event.target.onclick = ''
                event.target.id = 'correct'
                return prev
            })
            // console.log('correct')
        } else {
            setOptions(prev => {
                // console.log('wrong')
                setClicked(() => true)
                event.target.id = 'incorrect'
                return prev
            })
        }
    }
    
    return (
        <div className="question-box">
            <div className="question-question">{props.question}</div>
            <div className="question-answers">
                {options.map(question => <div className="question-answer" onClick={event=>giveAnswer(event)}>{question}</div>)}
            </div>
        </div>
    )
}