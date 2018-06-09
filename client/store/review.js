import axios from 'axios'

const ADD_REVIEW = 'ADD_REVIEW'

const addReview = review => ({ type: ADD_REVIEW, review })

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return action.review
    }
    default: {
      return state
    }
  }
}
export default reducer

export const createReview = review => dispatch => {
  axios
    .post('/api/reviews', review)
    .then(res => dispatch(addReview(res.data)))
    .catch(err => console.error('could not review ', err))
}
