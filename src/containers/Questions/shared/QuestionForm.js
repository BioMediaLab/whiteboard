import React from 'react'
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
            const answers = choices.filter((choice) =>{
                if (choice.checked) {
                    return true;
                }
                return false;
            }).map((choice)=> {
                return {
                    key: choice.key,
                    value: choice.value
                }
            });
            onQuestionEdit({
                question,
                choices: choices.filter((choice)=> {
                    if (!choice.checked) {
                        return true;
                    }
                    return false;
                }),
                answer: answers.length > 0 ? answers[0] : null
            });
        }
    }

    const updateAnswer=(choiceID) => {
        const newChoices = [..._allChoices.map(choice => {
            delete choice.checked;
            return choice;
        })];
        newChoices[choiceID]['checked'] = true;
        triggerEvent({
            question,
            choices: newChoices
        })
    }

    const updateChoice=(index,newText) => {
        const newChoices = [..._allChoices];
        newChoices[index]['key'] = newChoices[index]['value'] = newText;
        triggerEvent({
            question,
            choices: newChoices
        })
    }

    const addChoice=() => {
        const newChoices = [..._allChoices];
        newChoices.push({ key: '', value: '' });
        triggerEvent({
            question,
            choices: newChoices
        })
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
                            onChange={() => {
                                updateAnswer(index);
                              }}>
                            </RadioButton>
                        <TextField
                            id="choice"
                            value={choice.value}
                            disabled={disabled}
                            onChange={(newText)=>
                                {updateChoice(index,newText)}}>
                        </TextField>
                    </div>);
                })
            }
            <Button disabled={disabled}
                onClick={()=>{addChoice()}}
            >Add Option</Button>
        </FormLayout>
    )
}