export default (state = [], action) => {
  let idx;
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote ];

    case "REMOVE_QUOTE":
      idx = state.findIndex((quote) => quote.id === action.quoteId)
      return [...state.slice(0,idx), ...state.slice(idx + 1)]

    case "UPVOTE_QUOTE":
    console.log('upvote')
    idx = state.findIndex((quote) => quote.id === action.quoteId)
    let quote = state[idx]
    return [...state.slice(0,idx), {...quote, votes: quote.votes + 1},...state.slice(idx + 1)]

    case "DOWNVOTE_QUOTE":
    console.log('downvote')
    idx = state.findIndex((quote) => quote.id === action.quoteId)
    let q = state[idx]
    if (q.votes < 1) {
      return state
    } else {
      return [...state.slice(0,idx), {...q, votes: q.votes - 1},...state.slice(idx + 1)]
    }


    default:
      return state;
  }
}
