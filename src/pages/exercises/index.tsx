import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';

function Index() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Obtenir les valeurs sélectionnées dans les champs de sélection
    const technology = e.target.technology.value;
    const source = e.target.source.value;
    const exerciseName = e.target.exerciseName.value;

    // Créer l'URL vers la page de l'application Next avec les paramètres sélectionnés
    const url = `/exercises/${technology}/${source}/${exerciseName}`;

    // Rediriger vers la page de l'application Next avec les paramètres
    router.push(url);
  };

  return (
    <div className='container'>
    <Form onSubmit={handleSubmit}>
      <Form.Select name="technology" size="lg">
        <option value="react">React</option>
        <option value="next">Next.js</option>
        <option value="node">Node.js</option>
      </Form.Select>
      <br />

      <Form.Select name="source">
        <option value="openai">Openai</option>
        <option value="site2">Source 2</option>
        <option value="site3">Source 3</option>
      </Form.Select>
      <br />
      <Form.Select name="exerciseName" size="sm">
        <option value="e1">Display array of users to browser</option>
        <option value="e2">Show/Hide Element on Screen</option>
        <option value="e3">Exercise 3</option>
      </Form.Select>
      <br />

      <Button type="submit">Go to Exercise</Button>
    </Form>
    </div>
  );
}

export default Index;
