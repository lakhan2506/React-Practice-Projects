import { Outlet, useParams, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Fragment } from "react";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning Rect is fun!" },
  { id: "q2", author: "Rohit", text: "Learning Rect is greate!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comment`}>
          Load Comments
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
