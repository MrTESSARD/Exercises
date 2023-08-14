import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const [selectedTechnology, setSelectedTechnology] = useState(""); // Nouvelle variable
  const [selectedSource, setSelectedSource] = useState(""); // Nouvelle variable

  const handleSubmit = (e) => {
    e.preventDefault();
    let technology = selectedTechnology; // Utilisation de la variable
    let source = e.target.source.value;
    let exerciseName = e.target.exerciseName.value;
    const url = `/exercises/${technology}/${source}/${exerciseName}`;
    router.push(url);
  };
  const exercises = {
    technology: [
      {
        name: "Technologie",
        value: "",
        source: [
          {
            name: "Source",
            value: "",
            exerciseName: [
              {
                name: "",
                titre: "Titre",
              },
              
            ],
          },
          {
            name: "contactmentor.com",
            exerciseName: [
              {
                name: "e1",
                titre: "Display array of users to browser",
              },
            ],
          },
        ],
      },
      {
        name: "React",
        value: "react",
        source: [
          {
            name: "Openai",
            value: "openai",
            exerciseName: [
              {
                name: "e1",
                titre: "Display array of users to browser",
              },
              {
                name: "e2",
                titre: "Show/Hide Element on Screen",
              },
              {
                name: "e3",
                titre: "2 way data binding in ReactJS",
              },
              {
                name: "e4",
                titre: "Disable a button",
              },
              {
                name: "e5",
                titre: "Update the parent state",
              },
              {
                name: "e6",
                titre: "Dynamically add child components (React Children)",
              },
              {
                name: "e7",
                titre: "Sum of Two Numbers",
              },
              {
                name: "e8",
                titre: "Create Counter App",
              },
              {
                name: "e9",
                titre: "Fetch data from an API",
              },
              {
                name: "e10",
                titre: "Test",
              },
              {
                name: "e11",
                titre: "Test1",
              },
              {
                name: "e12",
                titre: "Test2",
              },
            ],
          },
          {
            name: "contactmentor.com",
            value: "contactmentor",
            exerciseName: [
              {
                name: "e1",
                titre: "Display array of users to browser",
              },
            ],
          },
        ],
      },
      {
        name: "Next.js",
        value: "next",
        source: {
          name: "Openai",
          value: "openai",
          exerciseName: {
            name: "e1",
            titre: "Display array of users to browser",
          },
        },
      },
      {
        name: "Node.js",
        value: "node",
        source: {
          name: "Openai",
          value: "openai",
          exerciseName: {
            name: "e1",
            titre: "Display array of users to browser",
          },
        },
      },
    ],
  };
  // Fonction réutilisable pour générer des options
  const generateOptions = (data) => {
    return data.map((item, index) => (
      <option key={index} value={item.value}>
        {item.name}
      </option>
    ));
  };
console.log('selectedTechnology', selectedTechnology)  
return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
      <Form.Select
  name="technology"
  size="lg"
  value={selectedTechnology} // Valeur actuellement sélectionnée
  onChange={(e) => setSelectedTechnology(e.target.value)}
>
  {generateOptions(exercises.technology)}
</Form.Select>
        <br />

        <Form.Select
          name="source"
          value={selectedSource} // Valeur actuellement sélectionnée
          onChange={(e) => setSelectedSource(e.target.value)} // Mise à jour de la variable
        >
          {generateOptions(
            exercises.technology.find(
              (tech) => tech.value === selectedTechnology
            )?.source || []
          )}
        </Form.Select>
        <br />

        <Form.Select name="exerciseName" size="sm">
          {generateOptions(
            exercises.technology
              .find((tech) => tech.value === selectedTechnology)
              ?.source?.find((src) => src.value === selectedSource)
              ?.exerciseName || []
          )}
        </Form.Select>
        <br />

        <Button type="submit">Go to Exercise</Button>
      </Form>
    </div>
  );
}

export default Index;
