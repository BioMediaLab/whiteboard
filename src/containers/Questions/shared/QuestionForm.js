import React, { useState, useEffect } from 'react'
import TextField from 'components/TextField'
import { FormLayout } from 'components/Form'
import RadioButton from 'components/RadioButton'
import Button from 'components/Button'

export const Question = ({ question = '', choices = [], answer = {}, disabled = false, onQuestionEdit }) => {
    const _allChoices = [
        ...choices,
        {
            key: answer.key,
            value: answer.key,
            checked: true
        }
    ];

    const triggerEvent = ({ question, choices }) => {
        if (onQuestionEdit) {
            const answers = choices.filter(function (choice) {
                if (choice.checked) {
                    return true;
                }
                return false;
            }).map(function (choice) {
                return {
                    key: choice.key,
                    value: choice.value
                }
            });
            onQuestionEdit({
                question,
                choices: choices.filter(function (choice) {
                    if (!choice.checked) {
                        return true;
                    }
                    return false;
                }),
                answer: answers.length > 0 ? answers[0] : null
            });
        }
    }
    return (
        <FormLayout>
            <TextField
                label="question"
                id="question"
                name="question"
                value={question}
                disabled={disabled}
                onChange={(newText, id) => {
                    triggerEvent({
                        question: newText,
                        choices: _allChoices
                    })
                }} />
            {_allChoices &&
                _allChoices.map((choice, index) => {
                    return (<div key={index}>
                        <RadioButton
                            disabled={disabled}
                            checked={choice.checked}
                            name="choice"
                            onChange ={() => {
                                const newChoices = [..._allChoices.map(choice => {
                                    delete choice.checked;
                                    return choice;
                                })];
                                newChoices[index]['checked'] = true;
                                triggerEvent({
                                    question,
                                    choices: newChoices
                                })
                            }}
                        ></RadioButton>
                        <TextField
                            id="choice"
                            value={choice.value}
                            disabled={disabled}
                            onChange={(newText) => {
                                const newChoices = [..._allChoices];
                                newChoices[index]['key'] = newChoices[index]['value'] = newText;
                                triggerEvent({
                                    question,
                                    choices: newChoices
                                })
                            }}>
                        </TextField>
                    </div>);
                })
            }
            <Button disabled={disabled}
                onClick={() => {
                    const newChoices = [..._allChoices];
                    newChoices.push({ key: '', value: '' });
                    triggerEvent({
                        question,
                        choices: newChoices
                    })
                }}
            >Add Option</Button>
        </FormLayout>
    )
}