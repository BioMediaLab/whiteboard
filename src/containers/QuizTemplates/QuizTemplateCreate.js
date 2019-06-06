import React, { useReducer } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Page from 'components/Page'
import PageActions from 'components/PageActions'
import { createQuizTemplate } from 'graphql/mutations'
import QuestionForm from 'components/QuestionForm/'
import Description from 'components/Description/'
import Button from 'components/Button'
import Card from 'components/Card'

import { initialState, reducer } from './state'

export default () => {
    const [quiztemplate, dispatch] = useReducer(reducer, initialState)
    const saveQuizTemplate = () => {
        return API.graphql(
            graphqlOperation(createQuizTemplate, {
                input:quiztemplate
            })
        )
    }

    const handleSubmit = () => {
        saveQuizTemplate()
            .then(data => {
                dispatch({ type: 'RESET_QUIZ' })
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
                    content: 'QuizTemplate',
                    url: '../'
                }
            ]}
        >
            <Description
                title={quiztemplate.title}
                description={quiztemplate.description}
                onUpdateTitle={payload => {
                    dispatch({ type: 'UPDATE_TITLE', payload })
                }}
                onUpdateDescription={payload => {
                    dispatch({ type: 'UPDATE_DESCRIPTION', payload })
                }}
            ></Description>
            {quiztemplate.questions.map((item, index) => {
                return (<QuestionForm key={index}
                    question={item.question}
                    choices={item.choices}
                    answer={item.answer}
                    onUpdateQuestion={text => {
                        const payload = {
                            index, text
                        };
                        dispatch({ type: 'UPDATE_QUESTION', payload })
                    }}
                    onUpdateChoice={choice => {
                        const payload = {
                            index, choice
                        }
                        dispatch({ type: 'UPDATE_CHOICE', payload })
                    }}
                    onAddChoice={choice => {
                        const payload = {
                            index, choice
                        }
                        dispatch({ type: 'ADD_CHOICE', payload })
                    }}
                    onUpdateAnswer={payload => {
                        dispatch({ type: 'UPDATE_ANSWER', payload })
                    }}
                    onRemoveChoice={choice => {
                        const payload = {
                            index, choice
                        }
                        dispatch({ type: 'REMOVE_CHOICE', payload })
                    }}
                />);
            }
            )}
            <Card>
                <Button
                    onClick={()=>{dispatch({ type: 'ADD_QUESTION' })
                    }}
                >Add Question</Button>
            </Card>
            <PageActions
                primaryAction={{ content: 'Create', onAction: handleSubmit }}
            />
        </Page>
    )
}