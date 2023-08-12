import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "react-bootstrap/Button";

export default function Index() {
  const jsxCode = `
  export default function Index() {
    const [num, setNum] = useState(0);
    const twoWayDataBinding = (num) => {
      return num + 1;
    };
    return (
      <div>
        <h1>2 way data binding in ReactJS</h1>
        <h3>{num}</h3>
        <Button onClick={() => setNum(twoWayDataBinding(num))}>
          Incrementer
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

  const [num, setNum] = useState(0);

  const twoWayDataBinding = (num) => {
    return num + 1;
  };

  return (
    <div>
      <h1>2 way data binding in ReactJS</h1>
      <h3>{num}</h3>
      <Button onClick={() => setNum(twoWayDataBinding(num))}>
        Incrementer
      </Button>

      {code}
    </div>
  );
}
