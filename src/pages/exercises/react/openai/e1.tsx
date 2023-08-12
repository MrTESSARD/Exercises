import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function index() {
  const jsxCode = `
  export default function index() {
    const users = ["Alex", "John", "Eminem"];
    return (
      <div>
        <h1>Display array of users to browser</h1>
        <h3>Users</h3>
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
    
    `;

  const users = ["Alex", "John", "Eminem"];
  return (
    <div>
      <h1>Display array of users to browser</h1>
      <h3>Users</h3>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>

      <div>
        <h3>Code</h3>
        <SyntaxHighlighter language="jsx" style={docco}>
          {jsxCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
