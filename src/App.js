import React, {useEffect, useState, useMemo } from "react";
import './styles.css';

function App() {

const [tarefas, setTarefas] = useState([ 
  'Estudar Cálculo',
  'Fazer lista de apartamentos'
]);

const [input, setInput] = useState('');

/* Pega o que já está armazenado no localStorage */
/*
useEffect(() => {
  const tarefasStorage = localStorage.getItem('tarefas');

  if(tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage));
  }
},

[]);
*/

useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}, [tarefas]);

function handleAdd(){
  setTarefas([...tarefas, input]);
  setInput('');
}

const totalTarefas = useMemo( () => tarefas.length, [tarefas]);

  return (
    <div className="container">
      <h1>Tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br/>
      <strong>Você tem {totalTarefas} tarefas!</strong><br/>
      <input type="text" name="entrada" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Cadastrar</button>
    </div>
  );
}

export default App;
