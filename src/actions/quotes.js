// TODO: Create action creators as defined in tests
import {
  ADD_QUOTE,
  REMOVE_QUOTE,
  UPVOTE_QUOTE,
  DOWNVOTE_QUOTE

} from './types';

export const addQuote = quote => {
  return {
    type: ADD_QUOTE,
     quote
  }
}

export const removeQuote = quoteId => {
  return {
    type: REMOVE_QUOTE,
     quoteId
  }
}

export const upvoteQuote = quoteId => {
  return {
    type: UPVOTE_QUOTE,
     quoteId
  }
}

export const downvoteQuote = quoteId => {
  return {
    type: DOWNVOTE_QUOTE,
     quoteId
  }
}