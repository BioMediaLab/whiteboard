import React from 'react'
import { SettingToggle, TextField, Title } from 'components'
import './Question.css'

const Question = ({
  question,
  onUpdateQuestion,
  onUpdateChoice,
  onToggleAnswer
}) => {
  return (
    <div className="Question">
      <div className="Question__question">
        <TextField
          value={question.question}
          onChange={value => {
            onUpdateQuestion(question.key, value)
          }}
        />
      </div>
      <div className="Question__choices">
        <Title element="h6">Choices</Title>
        <QuestionChoices
          question={question}
          onUpdateChoice={onUpdateChoice}
          onToggleAnswer={onToggleAnswer}
        />
      </div>
    </div>
  )
}

const QuestionChoices = ({ question, onUpdateChoice, onToggleAnswer }) => {
  return question.choices.map((choice, index) => {
    const matchingAnswers = question.answers.filter(
      answer => answer.key === choice.key
    )
    const isAnswer = !!matchingAnswers.length
    const styleAsEnabled = !isAnswer

    return (
      <SettingToggle
        key={`choice-${choice.key}`}
        subdued
        enabled={styleAsEnabled}
        action={{
          content: isAnswer ? 'Correct' : 'Incorrect',
          onAction: () => {
            onToggleAnswer(question.key, choice)
          }
        }}
      >
        <div className="Question__key-val">
          <span className="Question_key">{choice.key}</span>
          <div className="Question__value">
            <TextField
              label={choice.key}
              value={choice.value}
              labelHidden
              onChange={value => {
                onUpdateChoice(question.key, {
                  ...choice,
                  value
                })
              }}
            />
          </div>
        </div>
      </SettingToggle>
    )
  })
}

export default Question
