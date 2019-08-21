export default (state = [], action) => {
  let idx, quote

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      idx = state.findIndex(q => q.id === action.quoteId)
      return [
        ...state.slice(0, idx-2),
        ...state.slice(idx+1),
      ]

    case "UPVOTE_QUOTE":
    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(q => q.id === action.quoteId)
      quote = {...state[idx]}
      if (action.type === "UPVOTE_QUOTE"){
        quote.votes++
      } else if (quote.votes > 0) {
        quote.votes--
      }
      
      return [
        ...state.slice(0, idx-2),
        quote,
        ...state.slice(idx+1),
      ]

    default:
      return [...state]
  }
}
