export default (state = [], action) => {
  let quote
  let i
  switch (action.type){
    case "ADD_QUOTE":
      return [...state,action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote=>quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      i = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[i]
      quote.votes++
      return [...state.slice(0,i),quote,...state.slice(i+1)]
    case "DOWNVOTE_QUOTE":
        i = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[i]
        if(quote.votes>0){quote.votes--}
        return [...state.slice(0,i),quote,...state.slice(i+1)]
    default:
      return state;
  }
}
