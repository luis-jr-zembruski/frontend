import React, { useState } from 'react';

import Header from './components/Header';

function App() {

  const [ projects, setProjects ] = useState(['Desenvolvimento de app', 'Front-end web']);  

  function hundleAddProject() {
    
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li  key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={hundleAddProject}>Adicionar Projetos</button>
    </>
  );
}

export default App;