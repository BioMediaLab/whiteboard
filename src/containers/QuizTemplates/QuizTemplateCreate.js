import React, { useReducer } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import Page from 'components/Page'
import PageActions from 'components/PageActions'
import { createQuizTemplate } from 'graphql/mutations'
import QuestionForm from 'components/QuestionForm/'
import Description from 'components/Description/'

import { initialState, reducer } from './state'

export default () => {
    const [quiztemplate, dispatch] = useReducer(reducer, initialState)
    const saveQuizTemplate = () => {
        return API.graphql(
            graphqlOperation(createQuizTemplate, {
                input: quiztemplate

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
                    dispatch({ type: 'UPDATE_DECSRIPTION', payload })
                }}
            ></Description>
            <QuestionForm
                question={quiztemplate.question}
                choices={quiztemplate.choices}
                answer={quiztemplate.answer}
                onUpdateQuestion={payload => {
                    dispatch({ type: 'UPDATE_QUESTION', payload })
                }}
                onUpdateChoice={payload => {
                    dispatch({ type: 'UPDATE_CHOICE', payload })
                }}
                onAddChoice={payload => {
                    dispatch({ type: 'ADD_CHOICE', payload })
                }}
                onRemoveChoice={payload => {
                    dispatch({ type: 'REMOVE_CHOICE', payload })
                }}
                onUpdateAnswer={payload => {
                    dispatch({ type: 'UPDATE_ANSWER', payload })
                }}
            />

            <PageActions
                primaryAction={{ content: 'Create', onAction: handleSubmit }}
            />
        </Page>
    )
}