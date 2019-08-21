import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import quoteActions from '../actions/quotes';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote =>
                <QuoteCard
                  quote={quote}
                  removeQuote={() => this.props.removeQuote(quote.id)}
                  upvoteQuote={() => this.props.upvoteQuote(quote.id)}
                  downvoteQuote={() => this.props.downvoteQuote(quote.id)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect( s => ({quotes: s.quotes}), quoteActions )(Quotes);
