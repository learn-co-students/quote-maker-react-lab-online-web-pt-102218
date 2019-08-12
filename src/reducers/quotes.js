export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return[...state, action.quote]
      case 'UPVOTE_QUOTE':
        let foundQuote = state.find(quote => quote.id === action.quoteId)
        foundQuote.votes = foundQuote.votes + 1
        return [...state]
      case 'DOWNVOTE_QUOTE':
        let quote = state.find(quote => quote.id === action.quoteId)
        if(quote.votes === 0){
          return [quote]
        }
        else if(quote.votes >= 1){
          quote.votes = quote.votes - 1
          return [...state]
        }
        case 'REMOVE_QUOTE':
          let idOfQuote = state.find(quote => quote.id === action.quoteId).id
          return state.filter(quote => quote.id !== idOfQuote)
    default:
    return state;
  }
  
}
