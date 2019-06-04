import React, { useState, useEffect } from 'react'
import TextField from 'components/TextField'
import { FormLayout } from 'components/Form'
import RadioButton from 'components/RadioButton'
import Button from 'components/Button'

export const Question = (props) => {
    const { question, disabled } = props;
    const [_question, setQuestion] = useState(question.question)
    const initialChoicesState = [];
    if (question.choices) {
        initialChoicesState.push(...question.choices)
    }
    if (question.answer) {
        initialChoicesState.push({
            key: question.answer.key,
            value: question.answer.value,
            //checked true is correct answer
            checked: true
        });
    }
    const [_choices, setChoices] = useState(initialChoicesState);
    useEffect(() => {
        if ('onQuestionEdit' in props) {
            const answers = _choices.filter(function (choice) {
                if (choice.checked) {
                    return true
                }
                return false;
            }).map(function (choice) {
                return {
                    key: choice.key,
                    value: choice.value
                }
            });
            props.onQuestionEdit({
                question: _question,
                choices: _choices.filter(function (choice) {
                    if (!choice.checked) {
                        return true
                    }
                    return false;
                }),
                answer: answers.length > 0 ? answers[0] : null
            });
        }
    }, [_question, _choices])


    return (
        <FormLayout>
            <TextField
                label="question"
                id="question"
                name="question"
                value={_question}
                disabled={disabled}
                onChange={(newText, id) => {
                    setQuestion(newText)
                }} />
            {_choices &&
                _choices.map((choice, index) => {
                    return (<div key={index}>
                        <RadioButton
                            disabled={disabled}
                            checked={choice.checked}
                            name="choice"
                        ></RadioButton>
                        <TextField
                            id="choice"
                            value={choice.value}
                            disabled={disabled}
                            onChange={(newText) => {
                                const newChoices = [..._choices];
                                newChoices[index]['key'] = newChoices[index]['value'] = newText;
                                setChoices(newChoices);
                            }}>
                        </TextField>
                    </div>);
                })
            }
            <Button disabled={disabled}
                onClick={() => {
                    const newChoices = [..._choices];
                    newChoices.push({ key: '', value: '' })
                    setChoices(newChoices)
                }}
            >Add Option</Button>
        </FormLayout>
    )
}