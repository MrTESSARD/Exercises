import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "react-bootstrap/Button";

export default function Index() {
  const jsxCode = `
  export default function Index() {
    const [but, setBut] = useState(false);
    const handleClick = () => {
      setBut(true);
    };
    return (
      <div>
        <h1>Disable a button</h1>
        <Button onClick={handleClick} disabled={but}>
          Désactiver 
        </Button>
  
        {code}
      </div>
    );
  }
    
    `;
  const code = (
    <div>
      <h3>Code</h3>
      <SyntaxHighlighter language="jsx" style={docco}>
        {jsxCode}
      </SyntaxHighlighter>
    </div>
  );

  const [but, setBut] = useState(false);

  const handleClick = () => {
    setBut(true);
  };

  return (
    <div>
      <h1>Disable a button</h1>
      <Button onClick={handleClick} disabled={but}>
        Désactiver 
      </Button>

      {code}
    </div>
  );
}
