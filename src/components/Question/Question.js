import React from 'react'
import { SettingToggle, RadioButton, TextField, Title } from 'components'
import './Question.css'

const Question = ({
  question,
  onUpdateQuestion,
  onUpdateChoice,
  onToggleAnswer,
  choiceType
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
        {
          (choiceType === Question.CHOICES_TYPES.MULTIPLE_CHOICES) && (
            <QuestionMultipleChoices
              question={question}
              onUpdateChoice={onUpdateChoice}
              onToggleAnswer={onToggleAnswer}
            />
          )(choiceType === Question.CHOICES_TYPES.TRUE_FALSE) && (
            <QuestionBooleanChoices
              question={question}
              onUpdateChoice={onUpdateChoice}
              onToggleAnswer={onToggleAnswer}
            />
          )
        }
      </div>
    </div>
  )
}

const QuestionMultipleChoices = ({ question, onUpdateChoice, onToggleAnswer }) => {
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
          id:`choice-${choice.key}`,
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

const QuestionBooleanChoices = ({ question, onUpdateChoice, onToggleAnswer }) => {
  const BOOLEAN_CHOICES = [
    {
      key: 'TRUE',
      value: 'TRUE'
    },
    {
      key: 'FALSE',
      value: 'FALSE'
    }
  ]
  return BOOLEAN_CHOICES.map((choice, index) => {
    const matchingAnswers = question.answers.filter(
      answer => answer.key === choice.key
    )
    const isAnswer = !!matchingAnswers.length

    return (
      <div className="Question__key-val">
        <span className="Question_key">{choice.key}</span>
        <div className="Question__value">
          <RadioButton
            label={choice.key}
            value={choice.value}
            checked={isAnswer}
            labelHidden
            onChange={value => {
              onToggleAnswer(question.key, choice)
            }}
          />
        </div>
      </div>
    )
  })
}

Question.CHOICES_TYPES={
 MULTIPLE_CHOICES:0,
 TRUE_FALSE:1,
 ESSAY:2
}
export default Question
