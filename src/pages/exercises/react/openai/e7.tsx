import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Index() {
  const jsxCode = `
  export default function Index() {

    const [somme, setSomme] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const handleClick =()=>{
      setSomme(num1 + num2)
    }
  
    return (
      <div>
        <h1>Sum of Two Numbers</h1>
        <>
        <InputGroup className="mb-3">
          
          <Form.Control
            type="number"
            aria-describedby="inputGroup-sizing-default"
            onChange={(event) => setNum1(+event.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3" >
          
          <Form.Control
            type="number"
            aria-describedby="inputGroup-sizing-default"
            onChange={(event) => setNum2(+event.target.value)}
          />
        </InputGroup>
        <Button onClick={handleClick}>Additionner</Button>
        <p>Total  : {somme&&somme}</p>
  
       
      </>
  
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
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const handleClick =()=>{
    setSomme(num1 + num2)
  }

  return (
    <div>
      <h1>Sum of Two Numbers</h1>
      <>
      <InputGroup className="mb-3">
        
        <Form.Control
          type="number"
          aria-describedby="inputGroup-sizing-default"
          onChange={(event) => setNum1(+event.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3" >
        
        <Form.Control
          type="number"
          aria-describedby="inputGroup-sizing-default"
          onChange={(event) => setNum2(+event.target.value)}
        />
      </InputGroup>
      <Button onClick={handleClick}>Additionner</Button>
      <p>Total  : {somme&&somme}</p>

     
    </>

      {code}
    </div>
  );
}
