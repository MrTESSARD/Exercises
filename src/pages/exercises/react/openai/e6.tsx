import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "react-bootstrap/Button";

function Parent({ children }) {
  return (
    <div>
      <div>Parent</div>
      <div>Children : {children}</div>
    </div>
  );
}
export default function Index() {
  const jsxCode = `
  function Parent({ children }) {
    return (
    <div>
      <div>Parent</div>
      <div>Children : {children}</div>
    </div>
    )
  }

  export default function Index() {
    function Child(){return "Child"}
    return (
      <div>
        <h1>Dynamically add child components (React Children)</h1>
        <Parent>
        <Child/>
          </Parent>
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

  function Child() {
    return "Child";
  }

  return (
    <div>
      <h1>Dynamically add child components (React Children)</h1>

      <Parent>
        <Child />
      </Parent>

      {code}
    </div>
  );
}
