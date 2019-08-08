export default (state = [], action) => {
  let idx;
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote ];
    case "REMOVE_QUOTE":
      console.log('The original quote Id equals',action.quoteId)
      idx = state.map((quote) {quote.id === action.quoteId
      })
      console.log('The id is',idx)
      return [...state.slice(0,idx), ...state.slice(idx + 1)]
    default:
      return state;
  }
}
