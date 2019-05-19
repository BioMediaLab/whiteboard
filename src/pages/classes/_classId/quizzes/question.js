import React, { useState, useEffect } from 'react'
import Button from 'components/Button'
import Card from 'components/Card'
import Form, { FormLayout } from 'components/Form'
import TextField from 'components/TextField'
import Checkbox from 'components/Checkbox'

export default function Question(props) {
    const [question, setQuestion] = useState('');
    const [choices, setChoices] = useState([]);
    useEffect(() => {
        if (props.onChange) {
            props.onChange({
                question,
                choices
            })
        }
    }, [question, choices])
    return (
        <Card sectioned>
            <FormLayout>
                <TextField
                    label="Question"
                    id="question"
                    name="question"
                    value={question}
                    onChange={(value, id) => {
                        setQuestion(value)
                    }}
                />
                {choices.map((choice, index) => {
                    return (<div key={index}>
                        <Checkbox></Checkbox>
                        <TextField
                            id="choice"
                            value={choice.text}
                            onChange={(value) => {
                                const newChoices = [...choices];
                                newChoices[index]['text'] = value;
                                setChoices(newChoices);
                            }}
                        >

                        </TextField>
                    </div>);
                })}
                <Button
                    onClick={() => {
                        const newChoices = [...choices];
                        newChoices.push({ text: '', isCorrect: false })
                        setChoices(newChoices)
                    }}>
                    Add Option</Button>
            </FormLayout>
        </Card>
    );
}