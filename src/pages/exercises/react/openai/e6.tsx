import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "react-bootstrap/Button";

function Enfant({ text }) {
  const handleClick = () => {
    text("Parent est mis à jour");
  };
  return <Button onClick={handleClick}>Mettre à jour Parent</Button>;
}
export default function Index() {
  const jsxCode = `
  function Enfant({ text }) {
    const handleClick = () => {
      text("Parent est mis à jour");
    };
    return <Button onClick={handleClick}>Mettre à jour Parent</Button>;
  }
  
  export default function Index() {
    const [message, setMessage] = useState("Text original");
    return (
      <div>
        <h1>Disable a button</h1>
        <h3>{message}</h3>
        <Enfant text={(text) => setMessage(text)} />

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

  const [message, setMessage] = useState("Text original");

  return (
    <div>
      <h1>Dynamically add child components (React Children)</h1>
      <h3>{message}</h3>

      <Enfant text={(text) => setMessage(text)} />

      {code}
    </div>
  );
}
