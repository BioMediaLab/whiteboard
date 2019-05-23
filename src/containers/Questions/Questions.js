import React, { useState, useEffect } from 'react'
import Card from 'components/Card'
import Page from 'components/Page'
import Title from 'components/Title'
import ResourceList, { ResourceListItem } from 'components/ResourceList'
import TextField from 'components/TextField'
import Form, { FormLayout } from 'components/Form'
import Checkbox from 'components/Checkbox'

export const Question = (props) => {
    const { question, disabled } = props;
    const [_question, setQuestion] = useState(question.question)
    const [_choices, setChoices] = useState(question.choices)
    const [_answer, setAnswer] = useState(question.answer)
    useEffect(() => {
        if ('onQuestionEdit' in props) {
            props.onQuestionEdit({
                question: _question,
                choices: _choices,
                answer : _answer
            });
        }
    }, [_question, _choices,_answer])
    return (
        <Card>
            <Form>
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
                                <Checkbox
                                    disabled={disabled}
                                ></Checkbox>
                                <TextField
                                    id="choice"
                                    value={choice.value}
                                    disabled={disabled}
                                    onChange={(newText) => {
                                        const newChoices = [..._choices];
                                        newChoices[index]['value'] = newText;
                                        setChoices(newChoices);
                                    }}>
                                </TextField>
                            </div>);
                        })
                    }
                    {_answer &&
                        <div>
                            <Checkbox checked
                                disabled={disabled}
                            ></Checkbox>
                            <TextField
                                id="answer"
                                value={_answer.value}
                                disabled={disabled}
                                onChange={(newText, id) => {
                                    setAnswer(newText)
                                }}>
                            </TextField>
                        </div>
                    }
                </FormLayout>
            </Form>
        </Card>
    )
}