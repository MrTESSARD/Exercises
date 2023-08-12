import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Index() {
  const jsxCode = `
  export default function Index() {
    const [somme, setSomme] = useState(0);
    return (
      <div>
        <h1>Create Counter App</h1>
        <p>Counter : {somme && somme}</p>
        <Button onClick={() => setSomme(somme + 1)}>Incrementer</Button>
        <Button onClick={() => setSomme(somme - 1)}>Décrementer</Button>
  
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

  const [somme, setSomme] = useState(0);
  return (
    <div>
      <h1>Create Counter App</h1>
      <p>Counter : {somme && somme}</p>
      <Button onClick={() => setSomme(somme + 1)}>Incrementer</Button>
      <Button onClick={() => setSomme(somme - 1)}>Décrementer</Button>

      {code}
    </div>
  );
}
