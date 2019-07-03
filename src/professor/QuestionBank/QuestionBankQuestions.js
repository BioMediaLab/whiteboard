import React from 'react'
import Question from 'components/Question'
import { EmptyState, Card } from 'components'
export default ({
  questions,
  onAddChoice,
  onUpdateQuestion,
  onUpdateChoice,
  onToggleAnswer
}) => {
  if (!questions || !questions.length) {
    return (
      <EmptyState heading="Add Questions">
        <p>No questions added for this quiz.</p>
      </EmptyState>
    )
  }
  return questions.map(question => {
    return (
      <Card.Section
        key={question.key}
        title={`Question ${question.key}`}
        actions={[
          {
            content: 'Add Choices',
            id:'button-add-choice',
            onAction: () => {
              onAddChoice(question.key)
            }
          }
        ]}
      >
        <Question
          question={question}
          onUpdateQuestion={onUpdateQuestion}
          onUpdateChoice={onUpdateChoice}
          onToggleAnswer={onToggleAnswer}
        />
      </Card.Section>
    )
  })
}
