import {
  ADD_QUOTE,
  REMOVE_QUOTE,
  UPVOTE_QUOTE,
  DOWNVOTE_QUOTE

} from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_QUOTE:
      return [...state, action.quote]
    case REMOVE_QUOTE:
      return state.filter(quote => quote.id !== action.quoteId)
    case UPVOTE_QUOTE:
      const index = state.findIndex(quote => quote.id === action.quoteId)
      const quoteForUpVote = {...state[index]}
      const upvotedQuote = {...quoteForUpVote, votes: quoteForUpVote.votes += 1 }
      return [...state.slice(0, index), upvotedQuote, ...state.slice(index + 1)]
    case DOWNVOTE_QUOTE:
      const downIndex = state.findIndex(quote => quote.id === action.quoteId)
      const quoteForDownVote = {...state[downIndex]}
      const downvotedQuote = {...quoteForDownVote, votes: quoteForDownVote.votes -= 1}
      if (quoteForDownVote.votes > 0) {  
        return [...state.slice(0, downIndex), downvotedQuote, ...state.slice(downIndex + 1)]
      }

    default:
      return state;
  }
}
