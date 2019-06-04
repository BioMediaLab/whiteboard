import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Button from 'components/Button'
import Card from 'components/Card'
import Page from 'components/Page'
import Form from 'components/Form'
import { createQuizTemplate } from 'graphql/mutations'
import { TextField } from '@shopify/polaris';
import { Question } from '../Questions/shared/QuestionForm'

export default ({ id, question, choices, answer }) => {
    const [title, setTitle] = useState(title)
    const [description, setDescription] = useState(description)
    const [_question, setQuestion] = useState([{}])
    const saveQuizTemplate = () => {
        return API.graphql(
            graphqlOperation(createQuizTemplate, {
                input: {
                    title,
                    description
                }
            })
        )
    }

    const resetQuiz = () => {
        setTitle('')
        setDescription('')
    }
    const handleSubmit = () => {
        saveQuizTemplate()
            .then(data => {
                resetQuiz()
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Page
            title="Create Quiz Template"
            breadcrumbs={[
                {
                    content: 'QuizTemplates',
                    url: '../'
                }
            ]}>
            <Card sectioned>
                <Form onSubmit={handleSubmit}>
                        <TextField
                            label="title"
                            id="title"
                            name="title"
                            value={title}
                            onChange={value => setTitle(value)}
                        />
                        <TextField
                            label="description"
                            id="description"
                            name="description"
                            value={description}
                            onChange={value => setDescription(value)}
                        />
                        {
                            _question.map((item, index) => <Question question={{ question, choices, answer }} key={index}/>)

                        }
                        <Button onClick={() => {
                            const newQuestions = [..._question];
                            newQuestions.push({});
                            setQuestion(newQuestions);
                        }
                        }>Add Question</Button>
                        <div>
                        <Button primary submit>Create</Button>
                        </div>
                </Form>
            </Card>
        </Page>
    )
}