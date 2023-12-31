import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "react-bootstrap/Button";

export default function Index() {
  const jsxCode = `
  export default function Index() {
    const handleClick = () => setHide(!hide);
    const [hide, setHide] = useState(true);
    const element = <div>Element à cacher</div>;
    return (
      <div>
        <h1>Show/Hide Element on Screen</h1>
        <h3>Users</h3>
        {hide && element}
        <Button variant="secondary" onClick={handleClick}>
          Chacher
        </Button>
      </div>
    );
    
    `;
  const code = (
    <div>
      <h3>Code</h3>
      <SyntaxHighlighter language="jsx" style={docco}>
        {jsxCode}
      </SyntaxHighlighter>
    </div>
  );

  const handleClick = () => setHide(!hide);
  const [hide, setHide] = useState(true);
  const element = <div>Element à cacher</div>;
  return (
    <div>
      <h1>Show/Hide Element on Screen</h1>
      <h3>Users</h3>
      {hide && element}
      <Button variant="secondary" onClick={handleClick}>
        Chacher
      </Button>

      {code}
    </div>
  );
}
