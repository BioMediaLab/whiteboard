export const initialState = {
  title: '',
  description: '',
  questions: [{
    question: '',
    choices: [],
    answer: null
  }]
}

export const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'UPDATE_TITLE':
      // payload = string
      return {
        ...state,
        title: payload
      }
    case 'UPDATE_DESCRIPTION':
      // payload = string
      return {
        ...state,
        description: payload
      }
    case 'UPDATE_QUESTION':
      // payload = {index:number, text:string}
      const { index, text } = payload
      return {
        ...state,
        questions: state.questions.map((question, questionIndex) => {
          if (questionIndex !== index) {
            return question
          }
          return {
            ...question,
            question: text,
          }
        })
      }
    case 'UPDATE_CHOICE':
      // payload = {index:number,choice:{key, value}}
      const { index: questionIndex, choice } = payload
      const currentQuestion = state.questions[questionIndex];
      currentQuestion.choices = currentQuestion.choices.map(item => {
        if (item.key !== choice.key) {
          return item
        }
        return {
          ...choice
        }
      })
      return {
        ...state,
        questions: state.questions.map((item, index) => {
          if (questionIndex !== index) {
            return item
          }
          return {
            ...currentQuestion
          }
        })
      }
    case 'ADD_CHOICE':
      {
        // payload = {index:number,choice:{key, value}}
        const { index } = payload
        return {
          ...state,
          questions: state.questions.map((item, questionIndex) => {
            if (questionIndex !== index) {
              return item
            }
            return {
              ...item,
              choices: [...item.choices, payload.choice],
            }
          })
        }
      }
    case 'REMOVE_CHOICE':
      {
        // payload = {index:number,choice:{key, value}}
        const { index, choice } = payload
        return {
          ...state,
          questions: state.questions.map((item, questionIndex) => {
            if (questionIndex !== index) {
              return item
            }
            return {
              ...item,
              choices: item.choices.filter(filterChoice => filterChoice.key !== choice.key)
            }
          })
        }
      }
    case 'UPDATE_ANSWER':
      // payload = {key, value}
      {
        const { questionIndex, ...payloadData } = payload
        return {
          ...state,
          questions: state.questions.map((item, index) => {
            console.log(questionIndex, index);
            if (questionIndex !== index) {
              return item
            }
            return {
              ...item,
              answer:payloadData
            }
          })
        }
      }

    case 'RESET_QUIZ_TEMPLATE':
      return {
        ...initialState
      }
    case 'ADD_QUESTION':
      return {
        ...state,
        questions: [...state.questions,
        {
          question: '',
          choices: [],
          answer: null
        }]
      }
    default:
      return state
  }
}
