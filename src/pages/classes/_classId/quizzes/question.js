import React, { useState } from 'react'
import Button from 'components/Button'
import Card from 'components/Card'
import Form, { FormLayout } from 'components/Form'
import TextField from 'components/TextField'
import Checkbox from 'components/Checkbox'

export default function Question() {
    const [state, setState] = useState({
        question: '',
        choices: []
    })
    return (
        <Card sectioned>
            <FormLayout>
                <TextField
                    label="Question"
                    id="question"
                    name="question"
                    value={state.question}
                    onChange={(value, id) => {
                        const newState = Object.assign({}, state)
                        newState.question = value;
                        setState(newState)
                    }}
                />
                {state.choices.map((choice, index) => {
                    return (<div key={index}>
                        <Checkbox></Checkbox>
                        <TextField></TextField>
                    </div>);
                })}
                <Button 
                value={state.choice}
                onClick={() => {
                    const newChoice=Object.assign({},state)
                    newChoice.choices.push({})
                    setState(newChoice)
                }}>
                    Add Option</Button>
            </FormLayout>
        </Card>
    );
}