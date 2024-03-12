import React, {useState} from "react";

function App() {

const [tarefas, setTarefas] = useState([ 
  'Estudar Cálculo',
  'Fazer lista de apartamentos'
]);

const [input, setInput] = useState('');

function handleAdd(){
  setTarefas([...tarefas, input]);
  setInput('');
}

  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" name="entrada" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Cadastrar</button>
    </div>
  );
}

export default App;
