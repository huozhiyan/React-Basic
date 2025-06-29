import * as React from "react";
import quotes from "./quotes";
import FancyText from "./FancyText";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>你的励志名言是:</p>
      <FancyText text={quote} />
      <button onClick={next}>再次激励我</button>
      {children}
    </>
  );
}
