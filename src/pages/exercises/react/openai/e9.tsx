import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Index() {
  const jsxCode = `
  export default function Index() {
    const [data, setData] = useState({});
    const fetchData = async() =>{
      try {
        const response =  await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données.');
        }
        const data  = await response.json();
        return (data)
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données.', error);
      }
    }
  
    useEffect(() => {
      fetchData().then((data) => setData(data));
      return () => {
        fetchData()
      }
    }, [])
    
    return (
      <div>
        <h1>Fetch data from an API</h1>
        <ul>
          {Object.entries(data).map(([user, data],i)=>(
         <li key={i}>{data.name} - {data.email}</li>
          ))}
        </ul>
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

  const [data, setData] = useState({});
  const fetchData = async() =>{
    try {
      const response =  await fetch("https://jsonplaceholder.typicode.com/users")
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données.');
      }
      const data  = await response.json();
      return (data)
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données.', error);
    }
  }

  useEffect(() => {
    fetchData().then((data) => setData(data));
    return () => {
      fetchData()
    }
  }, [])
  
  return (
    <div>
      <h1>Fetch data from an API</h1>
      <ul>
        {Object.entries(data).map(([user, data],i)=>(
       <li key={i}>{data.name} - {data.email}</li>
        ))}
      </ul>
      {code}
    </div>
  );
}
